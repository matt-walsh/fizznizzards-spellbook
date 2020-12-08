import React from 'react';
import '../css/Footer.css'

class Footer extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <footer className="footer">
                <span className="copyright">Developed with ❤ by Matt Walsh</span>
            </footer>
        )
    }
}

export default Footer