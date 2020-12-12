import React from 'react';
import { useHistory } from 'react-router-dom'


import '../css/SpellForm.css'

const AddSpell = (props) =>{
    const history = useHistory();

    const resetForm = (event)=>{
       event.preventDefault()
        document.getElementById("spell-form").reset()
    }

    const saveSpell = (event) =>{
        event.preventDefault();

        let spell = {
            name: document.querySelector("#spell-name").value,
            school: document.querySelector("#school").value,
            ritual:  document.querySelector("#ritual").checked,
            level: Number.parseInt(document.querySelector("#level").value),
            time: document.querySelector("#time").value,
            verbal: document.querySelector("#verbal-component").checked,
            somatic: document.querySelector("#somatic-component").checked,
            material: document.querySelector("#material-component").checked,
            materials: document.querySelector("#materials").value,
            details: document.querySelector("#details").value,
            source: document.querySelector("#source").value
        }
        //Check if spell name exists
        if(props.checkSpellName(spell.name)){
            alert("Spell already exists. \nPlease choose another name.");
        }
        //Check for whitespace only name
        else if(spell.name.trim() === ""){
            alert("Spell Name cannot be only whitespace \nPlease choose another name.");
        }
        else if(spell.level === ""){
            alert("Spell Level cannot be only whitespace \nPlease choose a level.");
        }
        //Check for whitespace only time
        else if(spell.time.trim() === ""){
            alert("Casting Time cannot be only whitespace \nPlease enter a valid casting Time.");
        }
        //Check for whitespace only source
        else if(spell.source.trim() === ""){
            alert("Source cannot be only whitespace \nPlease enter a valid source.")
        }
        else{
            //Name is unique, and all validation passed, push spell to App
            props.appendSpell(spell);
            //redirect to root
            history.push('/');
        }
    }

    return(
        <section name="Add Spell">
            <form className="content add-spell" id="spell-form" onSubmit={saveSpell}>
                <div className="input-container">
                    <label htmlFor="spell-name">Spell Name</label>
                    <input type="text" name="spell name" id="spell-name" required/>
                </div>
                <div className="input-container">
                    <label htmlFor="school">School</label>
                    <select name="school" id="school" required>
                        <option value="Conjuration">Conjuration</option>
                        <option value="Necromancy">Necromancy</option>
                        <option value="Evocation">Evocation</option>
                        <option value="Abjuration">Abjuration </option>
                        <option value="Transmutation">Transmutation</option>
                        <option value="Divination">Divination</option>
                        <option value="Enchantment">Enchantment</option>
                        <option value="Illusion">Illusion</option>
                    </select>
                </div>
                <div className="input-container">
                    <label htmlFor="level">Level</label>
                    <input type="number" name="level" id="level" min="0" max="9" required/>
                </div>
                <div className="input-container">
                    <label htmlFor="ritual">Ritual</label>
                    <div>
                        <input type="checkbox" name="ritual" id="ritual"/>
                    </div>
                    
                </div>
                <div className="input-container">
                    <label htmlFor="time">Casting Time</label>
                    <input type="text" name="casting time" id="time"required />
                </div>
                <div className="input-container">
                    <label htmlFor="spell-components">Spell Components</label>
                    <div id="spell-components">
                        <label htmlFor="verbal-component">Verbal</label>
                        <input type="checkbox" name="verbal component" id="verbal-component"/> 
                        <label htmlFor="somatic-component">Somatic</label>
                        <input type="checkbox" name="somatic component" id="somatic-component"/> 
                        <label htmlFor="material-component">Material</label>
                        <input type="checkbox" name="material component" id="material-component"/> 
                    </div>
                </div>
                <div className="input-container">
                    <label htmlFor="materials">Materials</label>
                    <input type="text" name="materials" id="materials"/>
                </div>
                <div className="input-container">
                    <label htmlFor="source">Source</label>
                    <input type="text" name="source" id="source" required/>
                </div>

                <div className="input-container">
                    <label htmlFor="details">Spell Details</label>
                    <textarea name="details" id="details"/>
                </div>
                <div className="button-container">
                    <button type="submit" id="save-button">Save</button>
                    <button onClick={resetForm} id="clear-button">Clear</button>
                </div>
            </form>
        </section>
    )
}

export default AddSpell