import Spam from "./Spam";
import React, { Component } from 'react';

function Spamalot() {

    const arr = [];
    for (let i = 0; i < 500; i++) {
        arr.push(<Spam />)

    }

    return arr;

    // return (
    //     <div>
    //         {arr}
    //     </div>
    // )
}

export default Spamalot

