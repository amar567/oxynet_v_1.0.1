import React, { Component } from 'react'
import Cards from './Cards/Cards'
import './NewHomePage.css'
import distance from './../Distance/Distance';
import './bootstrap.css'
const maha = require('./maharastra.json')


export default class NewHomePage extends Component {

    constructor(props){
        super(props)
        this.state = {
            render:[],
            data:props.hospitalData,
            filter:props.item
        }
    }


 
  
    render() {

        return (
            <div className="card-render-whole">
                <div className="card-sec">
                <div className="row">
                        {this.props.hospitalData.map((dt,ind) => (
                        <div className="col-xl-4 col-lg-6" style={{paddingRight:'0'}}>
                        <div className="inside-col-card">
                            <Cards data={dt} index={ind}></Cards>
                        </div>
                    </div>
                        )
                    )
                    }
                   
                   
                </div>
                </div>
              
            </div>
        )
    }
}
