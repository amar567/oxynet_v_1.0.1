import { Component } from "react";
import working_on_it from './working_on_it.gif'

export default class WorkingOnIt extends Component {
    
    render(){
        return(
            <div style={{color: 'black', textAlign: 'center'}}>
                <img src={working_on_it} alt="We are still working on it..." style={{display: 'block', margin: 'auto', maxWidth: '100%'}} />
                <h1>We are still working on it.....</h1>
            </div>
        )
    }
}