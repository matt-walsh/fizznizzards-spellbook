import React from 'react';
import '../css/NavBar.css'

class NavBar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <header className="header">
                <h1>Fizz Nizzard's Spell Book</h1>
                <label for="searchBar">Search <input type="text" id="searchBar"/></label>
                
            </header>
        )
    }
}

export default NavBar