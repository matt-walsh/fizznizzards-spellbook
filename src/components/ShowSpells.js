import React from 'react';
import Card from './Card';

import '../css/ShowSpells.css';

const ShowSpells = (props) =>{
    const {spells, filter, deleteSpell, updateSpell } = props;

    //Reduce spell list by filter
    const filteredSpells = filter === "show-all" ? spells : spells.filter(spell => spell.level === Number.parseInt(filter));

    return(
        <section className="content show-spells">
            {
                filteredSpells.map( spell =>{
                    return <Card key={spell.name + spell.level + spell.details} spell={spell} deleteSpell={deleteSpell} updateSpell={updateSpell}/>
                })
            }
        </section>
    )
}

export default ShowSpells