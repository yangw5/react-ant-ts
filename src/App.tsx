import React from 'react';
import './App.css';
import Login from './component/Login';

const App: React.FC = () => {
    let a: number[] = [];
    let b: number[] = [1, 2, 3];
    a = b;
    console.log(a);
    return (
        <div className="App">
            <header className="App-header">
                <Login />
            </header>
        </div>
    );
};

export default App;
