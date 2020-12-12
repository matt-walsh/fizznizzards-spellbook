import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './Header'
import LeftBar from './LeftBar'
import RightBar from './RightBar'
import ShowSpells from './ShowSpells'
import AddSpell from './AddSpell'
import EditSpell from './EditSpell'

import '../css/App.css';

const {ipcRenderer} = window.require("electron");

const App = () => {
  const [spells, setSpells] = useState([]);
  const [filter, setFilter] = useState("show-all");

  //Add a spell
  const appendSpell = (spell) =>{
    let currentSpells = spells;
    currentSpells.push(spell);
    setSpells(currentSpells);

    //Push new spell list to Electron
    ipcRenderer.send('spells:save', currentSpells);
  }

  //Update a spell
  const updateSpell = (updatedSpell) =>{
    let currentSpells = spells;

    //find the index of the spell to update
    const spellIndex = currentSpells.findIndex(spell => spell.name === updatedSpell.previousName);
    if(spellIndex !== -1){
      //remove "previousName" property
      delete updatedSpell.previousName

      //replace currentSpell with Updated spell
      currentSpells[spellIndex] = updatedSpell;

      //Update state
      setSpells(currentSpells);
      console.log(spells)

      //Push new spell list to Electron
      ipcRenderer.send('spells:save', currentSpells);
    }
  }

  //Removes a spell, takes in a click event (target id is the spell to delete)
  const deleteSpell = (spellName) =>{
    let currentSpells = spells.filter( spell => spell.name !== spellName)
    setSpells(currentSpells);

    //Push new spell list to Electron
    ipcRenderer.send('spells:save', currentSpells);
  }

  //Spell names must be unique 
  const checkSpellName = spellName =>{
    return spells.find(spell => spell.name === spellName)
  }

  //Electron Events
  ipcRenderer.on('error', (event, errors) => {
    console.log(errors);
  })

  ipcRenderer.on('spell:list', (event, spellList) =>{
    setSpells(spellList);
  })


  return (
    <React.Fragment>
      <div className="App">
      <Router>
          <Header setFilter={setFilter}/>
          <LeftBar setFilter={setFilter}/>
          <Switch>
            <Route path="/add">
              <AddSpell appendSpell={appendSpell} checkSpellName={checkSpellName}/>
            </Route>
            <Route path="/edit">
              <EditSpell updateSpell={updateSpell} spells={spells}/>
            </Route>
            <Route exact path="/">
              <ShowSpells filter={filter} spells={spells} deleteSpell={deleteSpell} />
            </Route>
          </Switch>
          <RightBar />
      </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
