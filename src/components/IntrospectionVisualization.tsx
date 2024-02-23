import React, { useRef, useState } from 'react';

const IntrospectionVisualization: React.FC = () => {
        const [scale, setScale] = useState(1);
        const containerRef = useRef<HTMLDivElement>(null);

        const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
          event.preventDefault(); // Prevent page scroll
          const newScale = scale + (event.deltaY >  0 ? -0.1 :  0.1);
          setScale(Math.max(0.1, newScale)); // Limit scale to a minimum of  0.1
        };
      
        return (
          <div
            id="introspection-visualization"
            ref={containerRef}
            style={{ transform: `scale(${scale})` }}
            onWheel={handleWheel}
          >
            {/* Visualization will be rendered here */}
          </div>
        );
      };
      
      export default IntrospectionVisualization;