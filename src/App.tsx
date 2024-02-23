
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './components/Intro';
import IntrospectionQuery from './components/IntrospectionQuery';
import IntrospectionResult from './components/IntrospectionResult';
import IntrospectionVisualization from './components/IntrospectionVisualization';


const App: React.FC = () => {
        return (
                <div>
                        <Intro />
                        <IntrospectionQuery />
                        <IntrospectionResult />
                        <IntrospectionVisualization />
                </div>
        );
};

export default App;
