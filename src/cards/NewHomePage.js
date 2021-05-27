import React, { Component } from 'react'
import Cards from './Cards/Cards'
import './NewHomePage.css'
import distance from './../Distance/Distance';
const maha = require('./maharastra.json')
// import './bootstrap.css'


export default class NewHomePage extends Component {

    constructor(props){
        super(props)
        this.state = {
            render:[],
            data:maha
        }
    }

    componentDidMount = () => {
        setTimeout(this.handleDistance(),5000)
    }
    handleDistance = () => {
        var latlocal =localStorage.getItem("latitude")
        var longlocal = localStorage.getItem("longitude")
        var newarray = []
 
        this.state.data.map(dt => {
            const obj = dt
            var distances = distance(dt.latitude,dt.longitude,latlocal,longlocal,'K')
            if(isNaN(distances)){
                obj.distance = 'Not Available'
            }
            else{
                obj.distance=distances
            }
            newarray.push(obj)

        })
  
        this.setState({
            render:newarray
        })

     
    }
  
    render() {

        return (
            <div className="card-render-whole">
                <div className="card-sec">
                <div className="row">
                        {this.state.render.map((dt,ind) => 
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
