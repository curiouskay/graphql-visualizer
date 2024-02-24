import React, { useState } from 'react';
import { Field, GraphQLType, SchemaFixture } from '../utils/fixture';

const AddFieldComponent: React.FC<{ schema: SchemaFixture | null, updateSchema: (value: SchemaFixture) => void; setError: (value: string) => void; }> = ({ schema, updateSchema, setError }) => {
    const [typeName, setTypeName] = useState('');
    const [fieldName, setFieldName] = useState('');
    const [fieldType, setFieldType] = useState('');

    function addFieldToSchema(graphQLTypeName: string, fieldName: string, fieldType: string): SchemaFixture | null {
        if (schema === null) {
            setError("Cannot find schema");
            return null;
        }
        const existingGraphQLType = schema.data.__schema.types.find((type: { name: string; }) => type.name === graphQLTypeName);

        if (existingGraphQLType) {
            const newField: Field = {
                name: fieldName,
                description: null,
                args: [],
                type: {
                    kind: fieldType,
                    name: fieldType
                },
                isDeprecated: false,
                deprecationReason: null
            };

            if (existingGraphQLType.fields) {
                existingGraphQLType.fields.push(newField);
            } else {
                existingGraphQLType.fields = [newField];
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
                    args: [],
                    type: {
                        kind: fieldType,
                        name: fieldType
                    },
                    isDeprecated: false,
                    deprecationReason: null
                }
            ]
        };

        schema.data.__schema.types.push(newGraphQLType);
        return schema;
    }

    const handleAddField = () => {
        const updatedSchemaFixture = addFieldToSchema(typeName, fieldName, fieldType);
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
            <button onClick={handleAddField}>Add Field</button>
        </div>
    );
};

export default AddFieldComponent;