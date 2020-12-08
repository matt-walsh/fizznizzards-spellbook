import React from 'react';
import '../css/Content.css'
import Card from './Card'

class ContentArea extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <section className="content">
                <Card />
            </section>
        )
    }
}

export default ContentArea