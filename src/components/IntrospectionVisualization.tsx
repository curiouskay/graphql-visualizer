import React, { useState, useRef } from 'react';

const IntrospectionVisualization: React.FC<{ html: string | null, error: string }> = ({ html, error }) => {
    const [scale, setScale] = useState(1);
    const containerRef = useRef<HTMLDivElement>(null);
  
    const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
      event.preventDefault(); 
      const newScale = scale + (event.deltaY >  0 ? -0.1 :  0.1);
      setScale(Math.max(0.1, newScale)); 
    };
  
    return (
      <div
        id="introspection-visualization"
        ref={containerRef}
        style={{ transform: `scale(${scale})` }}
        onWheel={handleWheel}
      >
        {html && <div dangerouslySetInnerHTML={{ __html: html }} />}
        {error && <div id="introspection-error" className="alert alert-danger" role="alert">{error}</div>}
      </div>
    );
  };

  export default IntrospectionVisualization;