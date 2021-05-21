import { Component } from "react";
import working_on_it from './working_on_it.gif'
import WorkingOnit from './woi/WorkingOnIt'

export default class WorkingOnIt extends Component {
    
    render(){
        return(
            <div style={{color: 'black', textAlign: 'center',background: '#e0e0e0',height:'100vh'}}>
                <div className="gt" style={{height: '25vh'}} />
                <div className="lt" style={{height: '8vh'}} />
                {/* <img src={working_on_it} alt="We are still working on it..." style={{display: 'block', margin: 'auto', maxWidth: '100%'}} /> */}
                <WorkingOnit></WorkingOnit>
            </div>
        )
    }
}