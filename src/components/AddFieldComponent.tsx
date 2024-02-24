import React, { useState } from 'react';
import { Field, GraphQLType, SchemaFixture } from '../utils/fixture';
import _ from 'lodash';

const AddFieldComponent: React.FC<{
    schema: SchemaFixture | null;
    updateSchema: (value: SchemaFixture) => void;
    setError: (value: string) => void;
}> =
    ({ schema, updateSchema, setError }) => {
        const [typeName, setTypeName] = useState('');
        const [fieldName, setFieldName] = useState('');
        const [fieldType, setFieldType] = useState('');
        const [argName, setArgName] = useState<string>('');
        const [argType, setArgType] = useState<string>('');

        function addFieldToSchema(
            graphQLTypeName: string,
            fieldName: string,
            fieldType: string,
            argName: string,
            argType: string
        ): SchemaFixture | null {
            if (schema === null) {
                setError("Cannot find schema");
                return null;
            }
            const existingGraphQLType = schema.data.__schema.types.find(
                (type: { name: string }) => type.name === graphQLTypeName
            );

            if (existingGraphQLType) {
                const existingFieldIndex = existingGraphQLType.fields?.findIndex(
                    (field: Field) => field.name === fieldName
                );

                if (existingFieldIndex !== undefined && existingFieldIndex >= 0) {

                    const existingField = existingGraphQLType.fields![existingFieldIndex];
                    const argIndex = existingField.args.findIndex(arg => arg.name === argName);

                    if (argIndex !== -1) {

                        existingField.args[argIndex] = { name: argName, type: { kind: argType, name: argType }, defaultValue: null, description: null };
                    } else {

                        existingField.args.push({ name: argName, type: { kind: argType, name: argType }, defaultValue: null, description: null });
                    }
                } else {

                    const newField: Field = {
                        name: fieldName,
                        description: null,
                        args: [{ name: argName, type: { kind: argType, name: argType }, defaultValue: null, description: null }],
                        type: {
                            kind: fieldType,
                            name: fieldType,
                        },
                        isDeprecated: false,
                        deprecationReason: null,
                    };

                    if (existingGraphQLType.fields) {
                        existingGraphQLType.fields.push(newField);
                    } else {
                        existingGraphQLType.fields = [newField];
                    }
                }

                return schema;
            }


            const newGraphQLType: GraphQLType = {
                kind: "OBJECT",
                name: graphQLTypeName,
                fields: [
                    {
                        name: fieldName,
                        description: null,
                        args: [{ name: argName, type: { kind: argType, name: argType }, defaultValue: null, description: null }],
                        type: {
                            kind: fieldType,
                            name: fieldType,
                        },
                        isDeprecated: false,
                        deprecationReason: null,
                    },
                ],
            };

            schema.data.__schema.types.push(newGraphQLType);
            return schema;
        }




        const handleAddField = () => {
            const updatedSchemaFixture = addFieldToSchema(typeName, fieldName, fieldType, argName, argType);
            if (updatedSchemaFixture === null) {
                setError("Cannot find updated schema");
                return null;
            }
            updateSchema(updatedSchemaFixture);
            console.log("Set schema: ", updatedSchemaFixture)
        };

        return (
            <div>
                <input
                    type="text"
                    placeholder="Existing Type"
                    value={typeName}
                    onChange={(e) => setTypeName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="New Field"
                    value={fieldName}
                    onChange={(e) => setFieldName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Field Type"
                    value={fieldType}
                    onChange={(e) => setFieldType(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Input Arg Name"
                    value={argName}
                    onChange={(e) => setArgName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Input Arg Type"
                    value={argType}
                    onChange={(e) => setArgType(e.target.value)}
                />
                <button onClick={handleAddField}>Add Field</button>
            </div>
        );
    };

export default AddFieldComponent;