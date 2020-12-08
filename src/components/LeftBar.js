import React from 'react';
import '../css/SideBar.css';

class LeftBar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <section className="left-bar">
                <button id="add-spell" name="Add Spell"></button>
                <button id="show-all" name="Show All"></button>
                <button name="Show Cantrips"></button>
                <button name="Show Level 1 Spells"></button>
                <button name="Show Level 2 Spells"></button>
                <button name="Show Level 3 Spells"></button>
                <button name="Show Level 4 Spells"></button>
                <button name="Show Level 5 Spells"></button>
                <button name="Show Level 6 Spells"></button>
                <button name="Show Level 7 Spells"></button>
                <button name="Show Level 8 Spells"></button>
                <button name="Show Level 9 Spells"></button>
            </section>
        )
    }
}

export default LeftBar