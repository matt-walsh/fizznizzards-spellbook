import React from 'react';
import '../css/SideBar.css';

class RightBar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <section className="right-bar">
                <div className="spell-counter" id="level-1">
                    <label for="level-1-current">Used</label>
                    <input type="number" name="level-1-current" id="level-1-current" min="0" max="4" />
                    <input type="number" name="level-1-max" id="level-1-max" min="0" max="4" />
                    <label for="level-1-max">Max</label>   
                </div>
                <div className="spell-counter" id="level-2">
                    <label for="level-2-current">Used</label>
                    <input type="number" name="level-2-current" id="level-2-current" min="0" max="4" />
                    <input type="number" name="level-2-max" id="level-2-max" min="0" max="4" />
                    <label for="level-2-max">Max</label>   
                </div>
                <div className="spell-counter" id="level-3">
                    <label for="level-3-current">Used</label>
                    <input type="number" name="level-3-current" id="level-3-current" min="0" max="4" />
                    <input type="number" name="level-3-max" id="level-3-max" min="0" max="4" />
                    <label for="level-3-max">Max</label>   
                </div>
                <div className="spell-counter" id="level-4">
                    <label for="level-4-current">Used</label>
                    <input type="number" name="level-4-current" id="level-4-current" min="0" max="4" />
                    <input type="number" name="level-4-max" id="level-4-max" min="0" max="4" />
                    <label for="level-4-max">Max</label>   
                </div>
                <div className="spell-counter" id="level-5">
                    <label for="level-5-current">Used</label>
                    <input type="number" name="level-5-current" id="level-5-current" min="0" max="4" />
                    <input type="number" name="level-5-max" id="level-5-max" min="0" max="4" />
                    <label for="level-5-max">Max</label>   
                </div>
                <div className="spell-counter" id="level-6">
                    <label for="level-6-current">Used</label>
                    <input type="number" name="level-6-current" id="level-6-current" min="0" max="4" />
                    <input type="number" name="level-6-max" id="level-6-max" min="0" max="4" />
                    <label for="level-6-max">Max</label>   
                </div>
                <div className="spell-counter" id="level-7">
                    <label for="level-7-current">Used</label>
                    <input type="number" name="level-7-current" id="level-7-current" min="0" max="4" />
                    <input type="number" name="level-7-max" id="level-7-max" min="0" max="4" />
                    <label for="level-7-max">Max</label>   
                </div>
                <div className="spell-counter" id="level-8">
                    <label for="level-8-current">Used</label>
                    <input type="number" name="level-8-current" id="level-8-current" min="0" max="4" />
                    <input type="number" name="level-8-max" id="level-8-max" min="0" max="4" />
                    <label for="level-8-max">Max</label>   
                </div>
                <div className="spell-counter" id="level-9">
                    <label for="level-9-current">Used</label>
                    <input type="number" name="level-9-current" id="level-9-current" min="0" max="4" />
                    <input type="number" name="level-4-max" id="level-9-max" min="0" max="4" />
                    <label for="level-9-max">Max</label>   
                </div>
            </section>
        )
    }
}

export default RightBar