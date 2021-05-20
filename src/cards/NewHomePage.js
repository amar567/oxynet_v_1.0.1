import React, { Component } from 'react'
import Cards from './Cards/Cards'
import './NewHomePage.css'
// import './bootstrap.css'

const hospitalData = require('./Navimumbai.json')

export default class NewHomePage extends Component {
  
    render() {
        console.log(hospitalData)
        return (
            <div className="card-render-whole">
                <div className="card-sec">
                <div className="row">
                        {hospitalData.map((dt,ind) => 
                        <div className="col-xl-4 col-lg-6" style={{paddingRight:'0'}}>
                            <div className="inside-col-card">
                                <Cards data={dt} index={ind}></Cards>
                            </div>
                        </div>
                    )
                    }
                   
                   
                </div>
                </div>
              
            </div>
        )
    }
}
