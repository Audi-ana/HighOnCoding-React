import React, { Component } from 'react';
import './App.css'

export class Navbar extends Component {

    render(){
        return(
            <nav className="navStyling">
                <span><b>HighOnCoding</b></span> 
                <span className="homeStyling">Home</span> 
                <span>Categories</span>
            
            </nav>
        )
    }
}

