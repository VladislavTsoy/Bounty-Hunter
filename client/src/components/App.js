import React from 'react';
import Form from './Form';
import Main from './Main';
import Navbar from './Navbar';

const App = () => {
    return (
        <div>
            <Navbar/>
            <div className="form-new-container">
                <Form />
            </div>
            <div className="main-container">
                <Main />
            </div>
        </div>
    );
};

export default App;