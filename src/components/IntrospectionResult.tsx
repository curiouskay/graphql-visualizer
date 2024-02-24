import React, { useState, useEffect } from 'react';
import { buildDot } from '../utils/buildDot';
import Viz from 'viz.js';
import { Module, render } from 'viz.js/full.render.js';
import { Field, GraphQLType, SchemaFixture } from '../utils/fixture';
import IntrospectionVisualization from './IntrospectionVisualization';
import AddFieldComponent from './AddFieldComponent';

const IntrospectionResult: React.FC = () => {
  const [result, setResult] = useState('');
  const [schema, setSchema] = useState<SchemaFixture | null>(null);
  const [dotfile, setDotfile] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [html, setHtml] = useState<string | null>(null);

  useEffect(() => {
    if (dotfile) {
      const viz = new Viz({ Module, render });
      viz.renderString(dotfile)
        .then((output) => {
          setHtml(output);
        })
        .catch((error) => {
          console.error(error);
          setError("Experienced error rendering: " + error);
        });
    }
  }, [dotfile]);

  const updateSchema = (schema: SchemaFixture) => {
    if (schema !== null) {
      console.log("hello?")
      const newDotfile = buildDot(schema, {});
      setDotfile(newDotfile);
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setResult(event.target.value);
    setDotfile(null);
    setError('');
    try {
      const schema: SchemaFixture = JSON.parse(event.target.value);
      const newDotfile = buildDot(schema, {});
      setSchema(schema)
      setDotfile(newDotfile);
    } catch (err) {
      setError("Experienced an error parsing the schema: " + (err as Error).message);
    }
  };

  // Function to copy schema to clipboard
  const copySchemaToClipboard = async () => {
    if (schema) {
      try {
        // Convert the schema object to a string if necessary
        const schemaString = JSON.stringify(schema, null,  2);
        await navigator.clipboard.writeText(schemaString);
        alert('Schema copied to clipboard!');
      } catch (err) {
        console.error('Failed to copy schema: ', err);
      }
    }
  };

  return (
    <>
      <div>
        <div>
          <AddFieldComponent schema={schema} updateSchema={updateSchema} setError={setError} />
          <button onClick={copySchemaToClipboard}>Copy Schema to Clipboard</button>
        </div>
        <h2>Introspection Result</h2>
        <textarea
          id="introspection-result"
          className="form-control"
          value={result}
          onChange={handleChange}
        ></textarea>
        <IntrospectionVisualization html={html} error={error} />      
      </div>
    </>
  );
};

export default IntrospectionResult;
