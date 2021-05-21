import { Component } from "react";
import working_on_it from './working_on_it.gif'
import './WorkingOnIt.css'

export default class WorkingOnit extends Component {
    
    render(){
        return(
            <div className="Working_whole" style={{color: 'black', textAlign: 'center'}}>
                <img src={working_on_it} alt="We are still working on it..." style={{display: 'block', margin: 'auto', maxWidth: '100%'}} />
                <h1>
                    <span>W</span>
                    <span>e </span>
                    <span>   </span>
                    <span>a</span>
                    <span>r</span>
                    <span>e</span>
                    <span> </span>
                    <span>s</span>
                    <span>t</span>
                    <span>i</span>
                    <span>l</span>
                    <span>l</span>
                    <span> </span>
                    <span>W</span>
                    <span>o</span>
                    <span>r</span>
                    <span>k</span>
                    <span>i</span>
                    <span>n</span>
                    <span>g</span>
                    <span> </span>
                    <span>o</span>
                    <span>n</span>
                    <span> </span>
                    <span>i</span>
                    <span>t</span>
                    <span> </span>
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
         
                    </h1>
            </div>
        )
    }
}