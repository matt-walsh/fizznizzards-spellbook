import React from 'react';
import { withRouter } from 'react-router-dom';

import '../css/SpellForm.css'

class EditSpell extends React.Component{
    constructor(props){
        super(props);
        this.state = {}

    }

    componentDidMount() {
        const currentSpellName = this.props.location.state.spellName;
        const spellList = this.props.spells;

        //Find the spell to edit
        const currentSpell = spellList.find(spell => spell.name === currentSpellName);
        if(currentSpell){
            //Add previousName field to currentSpell (So we know which spell to update)
            currentSpell.previousName = currentSpellName;
            this.setState(currentSpell, () =>{})
            
        }

    }

    handleChange = (event) =>{
        const {id, value} = event.target;

        //Deal with checkboxes
        if(event.target.type === "checkbox"){
            this.setState({[id]: event.target.checked});
        }
        //Deal with level being a number
        if(id==="level"){
            this.setState({[id]: Number.parseInt(value)})
        }
        else{
            this.setState({[id] : value});
        }
    }

    handleSubmit = (event) =>{
        event.preventDefault();

        this.props.updateSpell(this.state);
        this.props.history.push('/');

    }

    render(){
        return(
            <section name="Add Spell">
                <form className="content add-spell" id="spell-form" onSubmit={this.handleSubmit} >
                    <div className="input-container">
                        <label htmlFor="spell-name">Spell Name</label>
                        <input type="text" name="spell name" id="name" onChange={this.handleChange}  value={this.state.name} required/>
                    </div>
                    <div className="input-container">
                        <label htmlFor="school">School</label>
                        <select name="school" id="school" onChange={this.handleChange} value={this.state.school}required>
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
                        <input type="number" name="level" id="level" min="0" max="9" onChange={this.handleChange} value={this.state.level} required/>
                    </div>
                    <div className="input-container">
                        <label htmlFor="ritual">Ritual</label>
                        <div>
                            <input type="checkbox" name="ritual" id="ritual" onChange={this.handleChange} checked={this.state.ritual}/>
                        </div>
                        
                    </div>
                    <div className="input-container">
                        <label htmlFor="time">Casting Time</label>
                        <input type="text" name="casting time" id="time" onChange={this.handleChange} value={this.state.time} required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="spell-components">Spell Components</label>
                        <div id="spell-components">
                            <label htmlFor="verbal-component">Verbal</label>
                            <input type="checkbox" name="verbal component" id="verbal" onChange={this.handleChange} checked={this.state.verbal}/> 
                            <label htmlFor="somatic-component">Somatic</label>
                            <input type="checkbox" name="somatic component" id="somatic" onChange={this.handleChange} checked={this.state.somatic}/> 
                            <label htmlFor="material-component">Material</label>
                            <input type="checkbox" name="material component" id="material" onChange={this.handleChange} checked={this.state.material}/> 
                        </div>
                    </div>
                    <div className="input-container">
                        <label htmlFor="materials">Materials</label>
                        <input type="text" name="materials" id="materials" onChange={this.handleChange} value={this.state.time} />
                    </div>
                    <div className="input-container">
                        <label htmlFor="source">Source</label>
                        <input type="text" name="source" id="source" onChange={this.handleChange} value={this.state.time} required/>
                    </div>

                    <div className="input-container">
                        <label htmlFor="details">Spell Details</label>
                        <textarea name="details" id="details" onChange={this.handleChange} value={this.state.details}/>
                    </div>
                    <div className="button-container">
                        <button type="submit" id="save-button">Save</button>
                        <button type="button" id="clear-button">Back</button>
                    </div>
                </form>
            </section>               
        )
    }
}

export default withRouter(EditSpell);