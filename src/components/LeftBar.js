import React from 'react';
import { useHistory } from 'react-router-dom'
import '../css/SideBar.css';

const LeftBar = (props) => {
    const history = useHistory();

    const handleClick = (event) =>{
        //Remove selected class from all buttons
        let buttons = event.target.parentNode.childNodes;
        buttons.forEach(button => {
            button.className = "bar-button"
        });

        //Add selected class to the clicked button
        event.target.className += " selected";

        //If the button clicked was Add Spell, redirect to /add
        if(event.target.id === 'add-spell'){
            history.push('/add');
        }
        //Else, make sure we are at root and apply filter
        else{
            if(history.location.pathname !== '/'){
                history.push('/')
            }

            //Apply filter
            props.setFilter(event.target.id);
        }
        
    }

    return(
        <section className="left-bar">
            <button className="bar-button" onClick={handleClick} id="add-spell" name="Add Spell"></button>
            <button className="bar-button" id="show-all" onClick={handleClick} name="Show All"></button>
            <button className="bar-button" id="0" onClick={handleClick} name="Show Cantrips">C</button>
            <button className="bar-button" id="1" onClick={handleClick} name="Show Level 1 Spells">1</button>
            <button className="bar-button" id="2" onClick={handleClick} name="Show Level 2 Spells">2</button>
            <button className="bar-button" id="3" onClick={handleClick} name="Show Level 3 Spells">3</button>
            <button className="bar-button" id="4" onClick={handleClick} name="Show Level 4 Spells">4</button>
            <button className="bar-button" id="5" onClick={handleClick} name="Show Level 5 Spells">5</button>
            <button className="bar-button" id="6" onClick={handleClick} name="Show Level 6 Spells">6</button>
            <button className="bar-button" id="7" onClick={handleClick} name="Show Level 7 Spells">7</button>
            <button className="bar-button" id="8" onClick={handleClick} name="Show Level 8 Spells">8</button>
            <button className="bar-button" id="9" onClick={handleClick} name="Show Level 9 Spells">9</button>
        </section>
    )
}

export default LeftBar