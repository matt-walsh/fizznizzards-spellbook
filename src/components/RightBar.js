import React from 'react';
import { withRouter } from 'react-router-dom';

import '../css/SideBar.css';

const {ipcRenderer} = window.require("electron");

class RightBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            level1Current: 0,
            level1Max: 0,
            level2Current: 0,
            level2Max: 0,
            level3Current: 0,
            level3Max: 0,
            level4Current: 0,
            level4Max: 0,
            level5Current: 0,
            level5Max: 0,
            level6Current: 0,
            level6Max: 0,
            level7Current: 0,
            level7Max: 0,
            level8Current: 0,
            level8Max: 0,
            level9Current: 0,
            level9Max: 0,
        };
    }

    componentDidMount(){
        ipcRenderer.on('slot:list', (event, slotList) =>{
            this.setState(slotList);
        })
    }

    handleChange = (event) =>{
        const {id, value} = event.target;
        this.setState({[id]: Number.parseInt(value)}, ()=>{
            //Push new slots list to Electron
            ipcRenderer.send('slots:save', this.state);
        });
    }

    render(){
        return(
            <section className="right-bar">
                <div className="spell-counter" id="level-1">
                    <label htmlFor="level-1">Lvl 1</label>
                    <input type="number" name="level-1-current" id="level1Current" onChange={this.handleChange} value={this.state.level1Current} min="0" max="4" />
                    <input type="number" name="level-1-max" id="level1Max" onChange={this.handleChange} value={this.state.level1Max} min="0" max="4" />
                </div>
                <div className="spell-counter" id="level-2">
                    <label htmlFor="level-2">Lvl 2</label>
                    <input type="number" name="level-2-current" id="level2Current" onChange={this.handleChange} value={this.state.level2Current} min="0" max="4" />
                    <input type="number" name="level-2-max" id="level2Max" onChange={this.handleChange} value={this.state.level2Max} min="0" max="4" />
                </div>
                <div className="spell-counter" id="level-3">
                    <label htmlFor="level-3">Lvl 3</label>
                    <input type="number" name="level-3-current" id="level3Current" onChange={this.handleChange} value={this.state.level3Current} min="0" max="4" />
                    <input type="number" name="level-3-max" id="level3Max" onChange={this.handleChange} value={this.state.level3Max} min="0" max="4" /> 
                </div>
                <div className="spell-counter" id="level-4">
                    <label htmlFor="level-4">Lvl 4</label>
                    <input type="number" name="level-4-current" id="level4Current" onChange={this.handleChange} value={this.state.level4Current} min="0" max="4" />
                    <input type="number" name="level-4-max" id="level4Max" onChange={this.handleChange} value={this.state.level4Max} min="0" max="4" />  
                </div>
                <div className="spell-counter" id="level-5">
                    <label htmlFor="level-5">Lvl 5</label>
                    <input type="number" name="level-5-current" id="level5Current" onChange={this.handleChange} value={this.state.level5Current}min="0" max="4" />
                    <input type="number" name="level-5-max" id="level5Max" onChange={this.handleChange} value={this.state.level5Max} min="0" max="4" />
                </div>
                <div className="spell-counter" id="level-6">
                    <label htmlFor="level-6">Lvl 6</label>
                    <input type="number" name="level-6-current" id="level6Current" onChange={this.handleChange} value={this.state.level6Current} min="0" max="4" />
                    <input type="number" name="level-6-max" id="level6Max" onChange={this.handleChange} value={this.state.level6Max} min="0" max="4" /> 
                </div>
                <div className="spell-counter" id="level-7">
                    <label htmlFor="level-7">Lvl 7</label>
                    <input type="number" name="level-7-current" id="level7Current" onChange={this.handleChange} value={this.state.level7Current} min="0" max="4" />
                    <input type="number" name="level-7-max" id="level7Max" onChange={this.handleChange} value={this.state.level7Max} min="0" max="4" />  
                </div>
                <div className="spell-counter" id="level-8">
                    <label htmlFor="level-8">Lvl 8</label>
                    <input type="number" name="level-8-current" id="level8Current" onChange={this.handleChange} value={this.state.level8Current}min="0" max="4" />
                    <input type="number" name="level-8-max" id="level8Max" onChange={this.handleChange} value={this.state.level8Max} min="0" max="4" /> 
                </div>
                <div className="spell-counter" id="level-9">
                    <label htmlFor="level-9">Lvl 9</label>
                    <input type="number" name="level-9-current" id="level9Current" onChange={this.handleChange} value={this.state.level9Current} min="0" max="4" />
                    <input type="number" name="level-4-max" id="level9Max" onChange={this.handleChange} value={this.state.level9Max} min="0" max="4" /> 
                </div>
            </section>
        )
    }
}

export default withRouter(RightBar);