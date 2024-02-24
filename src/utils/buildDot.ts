import _ from 'lodash';

type FieldType = {
    name: string;
    isDeprecated?: boolean;
    deprecationReason?: string;
    type: {
        name?: string;
        kind: string;
        ofType?: any;
    };
    args?: Array<{
        name: string;
        type: {
            name?: string;
            kind: string;
            ofType?: {
                name: string;
            };
        };
    }>;
};

type EntityType = {
    name: string;
    fields: FieldType[];
};

type SchemaType = {
    types: EntityType[];
    queryType?: {
        name: string;
    };
    mutationType?: {
        name: string;
    };
};

type RowType = {
    name: string;
    text: string;
};


export const buildDot = (function (_: any) {
    function processType(item: string, entities: { [key: string]: EntityType }, types: EntityType[]): string[] {
        const type = _.find(types, { name: item });

        const fields = _.map(type.fields, (field: FieldType) => {
            const obj: any = {};
            obj.name = field.name;
            obj.isDeprecated = field.isDeprecated;
            obj.deprecationReason = field.deprecationReason;

            if (field.type.kind === 'NON_NULL') {
                field.type = field.type.ofType;
                obj.isRequired = true;
            }

            if (field.type.ofType) {
                if (field.type.ofType.kind === 'NON_NULL') {
                    field.type.ofType = field.type.ofType.ofType;
                    obj.isNestedRequired = true;
                }
                obj.type = field.type.ofType.name;
                obj.isObjectType = field.type.ofType.kind === 'OBJECT';
                obj.isList = field.type.kind === 'LIST';
            } else {
                obj.type = field.type.name;
                obj.isObjectType = field.type.kind === 'OBJECT';
            }

            if (field.args && field.args.length) {
                obj.args = _.map(field.args, (arg: any) => {
                    const argObj: any = {};
                    argObj.name = arg.name;
                    if (arg.type.ofType) {
                        argObj.type = arg.type.ofType.name;
                        argObj.isRequired = arg.type.kind === 'NON_NULL';
                    } else {
                        argObj.type = arg.type.name;
                    }
                    return argObj;
                });
            }

            return obj;
        });

        entities[type.name] = {
            name: type.name,
            fields: fields,
        };

        const linkedItems = _.chain(fields)
            .filter('isObjectType')
            .map('type')
            .uniq()
            .value();

        return linkedItems;
    }

    function walkBFS(obj: any, iter: (v: any, k: string, p: string) => any) {
        const q = _.map(_.keys(obj), (k: string) => ({ key: k, path: `["${k}"]` }));

        let current: any;
        let currentNode;
        let retval;
        const push = (v: any, k: string) => {
            q.push({ key: k, path: current.path + `["${k}"]` });
        };
        while (q.length) {
            current = q.shift();
            currentNode = _.get(obj, current.path);
            retval = iter(currentNode, current.key, current.path);
            if (retval) {
                return retval;
            }

            if (_.isPlainObject(currentNode) || _.isArray(currentNode)) {
                _.each(currentNode, push);
            }
        }
    }

    return function (schema: any, opts: any = {}) {
        if (_.isString(schema)) {
            schema = JSON.parse(schema);
        }

        if (!_.isPlainObject(schema)) {
            throw new Error('Must be plain object');
        }

        const rootPath = walkBFS(schema, (v, k, p) => {
            if (k === '__schema') {
                return p;
            }
        });
        if (!rootPath) {
            throw new Error('Cannot find "__schema" object');
        }

        const root: SchemaType = _.get(schema, rootPath);
        let q: string[] = [];
        if (root.queryType) {
            q.push(root.queryType.name);
        }
        if (root.mutationType) {
            q.push(root.mutationType.name);
        }

        const entities: { [key: string]: EntityType } = {};
        while (q.length) {
            const current = q.shift();

            if (current === undefined) {
                break;
            }
            if (entities[current]) {
                continue;
            }

            q = q.concat(processType(current, entities, root.types));
        }

        let dotfile = 'digraph erd {\n' +
            'graph [\n' +
            '  rankdir = "LR"\n' +
            '];\n' +
            'node [\n' +
            '  fontsize = "16"\n' +
            '  shape = "plaintext"\n' +
            '];\n' +
            'edge [\n' +
            '];\n';

        dotfile += _.map(entities, (v: EntityType) => {
            if (opts.sort) {
                v.fields = _.sortBy(v.fields, 'name');
            }

            const rows = _.map(v.fields, (v: any) => {
                let str = v.name;
                if (!opts.noargs && v.args && v.args.length) {
                    str += '(' + _.map(v.args, (v: any) => `${v.name}:${v.type}${v.isRequired ? '!' : ''}`).join(', ') + ')';
                }
                let deprecationReason = '';
                if (v.isDeprecated) {
                    deprecationReason = ' <FONT color="red">';
                    deprecationReason += v.deprecationReason ? v.deprecationReason : 'Deprecated';
                    deprecationReason += '</FONT>';
                }
                return {
                    text: `${str}: ${v.isList ? `[${v.type}${v.isNestedRequired ? '!' : ''}]` : v.type}${v.isRequired ? '!' : ''}${deprecationReason}`,
                    name: `${v.name}port`,
                };
            });

            let result = `${v.name} [label=<<TABLE BORDER="0" CELLBORDER="1" CELLSPACING="0"><TR><TD><B>${v.name}</B></TD></TR>`;
            result += rows.map((row: RowType) => `<TR><TD PORT="${row.name}">${row.text}</TD></TR>`).join('');
            result += '</TABLE>>];';
            return result;
        }).join('\n');

        dotfile += '\n\n';

        dotfile += _.chain(entities)
            .reduce((a: string[], v: EntityType) => {
                _.each(v.fields, (f: any) => {
                    if (!f.isObjectType) {
                        return;
                    }

                    a.push(`${v.name}:${f.name}port -> ${f.type}`);
                });

                return a;
            }, [])
            .uniq()
            .value()
            .join('\n');

        dotfile += '\n}';

        return dotfile;
    };
})(_);
