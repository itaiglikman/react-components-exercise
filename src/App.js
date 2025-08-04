import React, { Component } from 'react';
import './App.css';
import Dummy from './components/Dummy';
import Spamalot from './components/Spamalot';
import Checkout from './components/Checkout';
import Menu from './components/Menu';
import NavBar from './components/NavBar';
// import NavBar from './components/NavBar';
// import Checkout from './components/Checkout';
// import Menu from './components/Menu';


export function App() {

    return (
        <div className="app">

            {/* For Exercise 1, go ahead and check out the Dummy component inside your components folder.

            Add some code so it renders an input and a button

            Your App component should render Dummy onto the page. */}
            <div className="ex-space">
                <h4 className="ex-title">Exercise 1</h4>
                <div className="exercise" id="ex-1">
                    <Dummy />
                </div>
            </div>


            <div className="ex-space">
                <h4 className="ex-title">Exercise 4</h4>
                <div className="exercise" id="ex-4">
                    <NavBar/>
                    <Menu/>
                    <Checkout/>
                </div>
            </div>

            {/* Exercise 2
            In your components folder you'll find a Spam and Spamalot component. Please follow these instructions:

            The Spam component should render a div with the text "Spam"
            The Spamalot component should load Spam 500 times
            Note: certainly, do not copy-paste 500 times. Be clever, and remember that the function components can return an array of JSX.

            Next, use your App.js to render Spamalot, and check out the following CSS in your App.css: */}
            <div className="ex-space">
                <h4 className="ex-title">Exercise 2</h4>
                <div className="exercise" id="ex-2">
                    <Spamalot />
                </div>
            </div>

        </div>
    )
}

