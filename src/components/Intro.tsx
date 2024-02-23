// src/components/Intro.tsx
import React from 'react';

const Intro: React.FC = () => (
  <div id="intro" className="jumbotron">
    <h1>GraphQL Visualizer</h1>
    <p className="lead">
      Run the introspection query against a GraphQL endpoint. Paste the result into the textarea below to view the model relationships.
    </p>
  </div>
);

export default Intro;
