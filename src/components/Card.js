import React from 'react';
import '../css/Card.css'

class Card extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <article className="card">
                Some Text for you
            </article>
        )
    }
}

export default Card