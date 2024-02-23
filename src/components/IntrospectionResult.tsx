import React, { useState, useEffect } from 'react';
import { buildDot } from '../utils/buildDot';
import Viz from 'viz.js';
import { Module, render } from 'viz.js/full.render.js';

const IntrospectionResult: React.FC = () => {
  const [result, setResult] = useState('');
  const [dotfile, setDotfile] = useState<string | undefined>(undefined);
  const [error, setError] = useState('');
  const [html, setHtml] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (dotfile) {
      const viz = new Viz({ Module, render });
      viz.renderString(dotfile)
        .then((output) => {
          setHtml(output);
        })
        .catch((error) => {
          console.error(error);
          setError('Failed to render visualization.');
        });
    }
  }, [dotfile]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setResult(event.target.value);
    setDotfile(undefined);
    setError('');
    try {
      const schema = JSON.parse(event.target.value);
      const newDotfile = buildDot(schema, {}); // Assuming buildDot is defined elsewhere
      setDotfile(newDotfile);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div>
      <h2>Introspection Result</h2>
      <textarea
        id="introspection-result"
        className="form-control"
        value={result}
        onChange={handleChange}
      ></textarea>
      {error && <div id="introspection-error" className="alert alert-danger" role="alert">{error}</div>}
      <div id="introspection-visualization">
        {html && <div dangerouslySetInnerHTML={{ __html: html }} />}
      </div>
    </div>
  );
};

export default IntrospectionResult;
