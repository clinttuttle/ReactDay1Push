import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

const App = () => (
        <div className="App">
            <Header />
            <Main />
            <Footer />
            {/*Comments in JSX need to be in brackets*/} 
        </div>
);

//comments outside of the App don't need brackets

export default App;
