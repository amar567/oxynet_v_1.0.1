import React, { Component } from 'react'
import './Cards.css'
import NewHospital from '../Svg/newHospital';
import Box from '../Svg/box';
import Address from '../Svg/Address';
import Newphone from '../Svg/Newphone';
// import phone from './../Svg/phone.svg'
import ReactCardFlip from 'react-card-flip';
import Quote from '../Svg/Quote';
import Distancesvg from '../Svg/Distancesvg';
var arrrayData = require('../arrayData')

export default class Cards extends Component {

    constructor(props) {
        super(props);
          this.state = {
          isFlipped: false,
          data:props.data,
          index:props.index,
          showMore:false,
          changeStatement:'',
          array:arrrayData
   
        };
        this.handleClick = this.handleClick.bind(this);
      }

      componentDidMount = () => {
        this.Screen()
    }
      handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
      }

      readMore = () => {
          this.setState({
              showMore:!this.state.showMore
          })
      }

      Screen = () => {
     
        window.onresize = this.displayWindowSize;
        window.onload = this.displayWindowSize;
       
      }
      
      displayWindowSize =() => {
        let myWidth = window.innerWidth;
        // let myHeight = window.innerHeight;
        // your size calculation code here
        if(myWidth<=500){
          this.setState({
              changeStatement:9
          })
        }
        if(myWidth>=500){
          this.setState({
              changeStatement:18
          })
        }
      }
   
    render() {  
   
        return (
            <div className="flip-whole">
                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
            <div className="card-whole">
                <div className="hospital-info">
                    <div className="hospital-name">
                        <div className="hospital-ic"><NewHospital></NewHospital></div>
                        <div className=  "hospital-name-content-lg" >  
                      
                        {this.state.data.hospitalName}
                          </div>
                      
                        <div className="hospital-name-verified" onClick={this.handleClick}><Box></Box></div>
                    </div>
                    <div className="hospital-address">
                        <div className="hospital-ic"><Address></Address></div>
                        <div className="hospital-ad-content">
                            {this.state.data.hospitalAddress}
                        </div>
                    </div>
                    <div className="hospital-address">
                        <div className="hospital-ic"><Newphone></Newphone></div>
                        <div className="hospital-ad-content">
                            {(parseInt(this.state.data.phoneNo))?<a href={"tel:"+this.state.data.phoneNo}>{this.state.data.phoneNo}</a>: null}
                        </div>

                    </div>
                    <div className="rd-whole">
                        <div className="rd-icon"><Distancesvg></Distancesvg></div>
                    <div className="rd-distance">{this.state.data.distance==="Not Available" ? "Not Available" : `Within ${this.state.data.distance} Km radius`}</div>
                    </div>

                    <div className="btn-tab">
                        <a rel="noreferrer" target='_blank' style={{width:'40%'}} href={this.state.data.googleSearch}>
                            <div className="btn-inside" >Google Search</div>
                        </a>
                        <a style={{width:'40%'}} href={"tel:"+this.state.data.phoneNo}>
                            <div className="btn-inside">Call Us</div>
                        </a>
                    </div>

                </div>
                <div className="bed-info">
                    <div className="inside-bed">
                        <div className="number-box">{this.state.data.normalBedTotal}</div>
                        <div className="heading-box">Total<br/> Beds</div>
                    </div>
                    <div className="inside-bed">
                        <div className="number-box">{this.state.data.normalBedAvailable}</div>
                        <div className="heading-box">Available<br/> Beds</div>
                    </div>
                    <div className="inside-bed">
                        <div className="number-box">{this.state.data.oxygenBedTotal}</div>
                        <div className="heading-box">Total<br/> Oxygen Beds</div>
                    </div>
                    <div className="inside-bed">
                        <div className="number-box">{this.state.data.oxygenBedAvailable}</div>
                        <div className="heading-box">Available<br/> Oxygen Beds</div>
                    </div>
                </div>
                <div className="last-updated">
                {/* Last Updated : 4:30 Pm I 14-05-2021 */}
                Last Updated : {this.state.data.lastUpdatedTime} | {this.state.data.lastUpdatedDate}
                </div>

            </div>
            <div className="card-whole-back">

       <div className="back-card-top">
             <div className="btn-back" onClick={this.handleClick}><Box></Box></div>
             </div>

             <div className="quote-block">

                 <div className="inside-qt">
                    <div className="qt-top"><Quote></Quote></div>
                {this.state.array.data[this.state.index]}
             <div className="qt-bottom"><Quote></Quote></div>
             </div>
             </div>

            </div>
            </ReactCardFlip>
            </div>
        )
    }
}
