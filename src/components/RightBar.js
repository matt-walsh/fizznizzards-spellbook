import React from 'react';
import '../css/SideBar.css';

const RightBar = () => {
    return(
        <section className="right-bar">
            <h2>Spell Slots</h2>
            <div className="spell-counter" id="level-1">
                <label htmlFor="level-1">Lvl 1</label>
                <input type="number" name="level-1-current" id="level-1-current" min="0" max="4" />
                <input type="number" name="level-1-max" id="level-1-max" min="0" max="4" />
            </div>
            <div className="spell-counter" id="level-2">
                <label htmlFor="level-2">Lvl 2</label>
                <input type="number" name="level-2-current" id="level-2-current" min="0" max="4" />
                <input type="number" name="level-2-max" id="level-2-max" min="0" max="4" />
            </div>
            <div className="spell-counter" id="level-3">
                <label htmlFor="level-3">Lvl 3</label>
                <input type="number" name="level-3-current" id="level-3-current" min="0" max="4" />
                <input type="number" name="level-3-max" id="level-3-max" min="0" max="4" /> 
            </div>
            <div className="spell-counter" id="level-4">
                <label htmlFor="level-4">Lvl 4</label>
                <input type="number" name="level-4-current" id="level-4-current" min="0" max="4" />
                <input type="number" name="level-4-max" id="level-4-max" min="0" max="4" />  
            </div>
            <div className="spell-counter" id="level-5">
                <label htmlFor="level-5">Lvl 5</label>
                <input type="number" name="level-5-current" id="level-5-current" min="0" max="4" />
                <input type="number" name="level-5-max" id="level-5-max" min="0" max="4" />
            </div>
            <div className="spell-counter" id="level-6">
                <label htmlFor="level-6">Lvl 6</label>
                <input type="number" name="level-6-current" id="level-6-current" min="0" max="4" />
                <input type="number" name="level-6-max" id="level-6-max" min="0" max="4" /> 
            </div>
            <div className="spell-counter" id="level-7">
                <label htmlFor="level-7">Lvl 7</label>
                <input type="number" name="level-7-current" id="level-7-current" min="0" max="4" />
                <input type="number" name="level-7-max" id="level-7-max" min="0" max="4" />  
            </div>
            <div className="spell-counter" id="level-8">
                <label htmlFor="level-8">Lvl 8</label>
                <input type="number" name="level-8-current" id="level-8-current" min="0" max="4" />
                <input type="number" name="level-8-max" id="level-8-max" min="0" max="4" /> 
            </div>
            <div className="spell-counter" id="level-9">
                <label htmlFor="level-9">Lvl 9</label>
                <input type="number" name="level-9-current" id="level-9-current" min="0" max="4" />
                <input type="number" name="level-4-max" id="level-9-max" min="0" max="4" /> 
            </div>
        </section>
    )
}

export default RightBar