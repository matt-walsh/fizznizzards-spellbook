import React from 'react';
import { useHistory } from 'react-router-dom'
import '../css/Card.css'

const Card = (props) => {
    const history = useHistory();
    const {spell, deleteSpell, updateSpell} = props;

    const handleClick = (event) =>{
        //Get spell name
        const spellName = event.target.id;
        
        //decide which function to execute
        switch (event.target.className) {
            case "delete":
                deleteSpell(spellName);
                break;
            case "update":
                history.push("/edit", {
                    spellName: spellName,
                })
                break
            default:
                break;
        }
    }
    return(
        <article className="card">
            <header className="cardHeader">
                <h3>
                    {spell.name}
                    <div>
                        <button className="update" id={spell.name} onClick={handleClick}>📜</button>
                        <button className="delete" id={spell.name} onClick={handleClick}>❌</button>
                    </div>
                </h3>
            </header>
            <section className="spellDetails" name="Spell Details">
                <div>
                    <label htmlFor="school">School: </label>
                    <span id="school">{spell.school}</span>
                </div>
                <div>
                    <label htmlFor="level">Level: </label>
                    <span id="level">{spell.level !== 0 ? spell.level : "Cantrip"}</span>
                </div>
                <div>
                    <label htmlFor="ritual">Ritual: </label>
                    <span id="ritaul">{spell.ritual ? "Yes" : "No"}</span>
                </div>
                <div>
                    <label htmlFor="time">Casting Time: </label>
                    <span id="time">{spell.time}</span>
                </div>
                 <div>
                    <label htmlFor="spell-components">Spell Components: </label>
                    <span id="spell-components">{spell.verbal ? "V" : ""}{spell.somatic ? "S" : ""}{spell.material ? "M" : ""}</span>
                </div>
                <div>
                    <label htmlFor="materials">Materials: </label>
                    <span id="materials">{spell.materials}</span>
                </div>
                <div>
                    <label htmlFor="details">Details: </label>
                    <span id="details">{spell.details}</span>
                </div>
                <div>
                    <label htmlFor="source">Source: </label>
                    <span id="source">{spell.source}</span>
                </div>
            </section>
        </article>
    )
}

export default Card