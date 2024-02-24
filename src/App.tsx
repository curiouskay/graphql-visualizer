
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './components/Intro';
import IntrospectionResult from './components/IntrospectionResult';



const App: React.FC = () => {
        return (
                <div>
                        <Intro />
                        <IntrospectionResult />

                </div>
        );
};

export default App;
