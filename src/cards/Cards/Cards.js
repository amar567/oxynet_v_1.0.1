import React, { Component } from 'react'
import './Cards.css'
import NewHospital from '../Svg/newHospital';
import Box from '../Svg/box';
import Address from '../Svg/Address';
import Newphone from '../Svg/Newphone';
// import phone from './../Svg/phone.svg'
import ReactCardFlip from 'react-card-flip';
import Quote from '../Svg/Quote';
const arrayData = require('../arrayData.js')
export default class Cards extends Component {

    constructor(props) {
        super(props);
          this.state = {
          isFlipped: false,
          data:props.data,
          index:props.index
        };
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
      }
    render() {
        return (
            <div className="flip-whole">
                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
            <div className="card-whole">
                <div className="hospital-info">
                    <div className="hospital-name">
                        <div className="hospital-ic"><NewHospital></NewHospital></div>
                        <div className= "hospital-name-content" >{this.state.data.hospitalName}</div>
                        <div className="hospital-name-verified" onClick={this.handleClick}><Box></Box></div>
                    </div>
                    <div className="hospital-address">
                        <div className="hospital-ic"><Address></Address></div>
                        <div className="hospital-ad-content">Sahara Hospital Rd, Viraj Khand - 1, Gomti Nagar, Lucknow, Uttar Pradesh 226010</div>

                    </div>
                    <div className="hospital-address">
                        <div className="hospital-ic"><Newphone></Newphone></div>
                        <div className="hospital-ad-content">+91-8764567891, +91-6745324578,</div>

                    </div>

                    <div className="btn-tab">
                        <div className="btn-inside">Google Search</div>
                        <div className="btn-inside">Call Us</div>
                    </div>

                </div>
                <div className="bed-info">
                    <div className="inside-bed">
                        <div className="number-box">100</div>
                        <div className="heading-box">Total<br/> Beds</div>
                    </div>
                    <div className="inside-bed">
                        <div className="number-box">86</div>
                        <div className="heading-box">Available<br/> Beds</div>
                    </div>
                    <div className="inside-bed">
                        <div className="number-box">77</div>
                        <div className="heading-box">Total<br/> Oxygen Beds</div>
                    </div>
                    <div className="inside-bed">
                        <div className="number-box">66</div>
                        <div className="heading-box">Available<br/> Oxygen Beds</div>
                    </div>
                </div>
                <div className="last-updated">
                Last Updated : 4:30 Pm I 14-05-2021
                </div>

            </div>
            <div className="card-whole-back">

       <div className="back-card-top">
             <div className="btn-back" onClick={this.handleClick}><Box></Box></div>
             </div>

             <div className="quote-block">

                 <div className="inside-qt">
                    <div className="qt-top"><Quote></Quote></div>
                {/* {arrayData.data[this.state.index]} */}
             <div className="qt-bottom"><Quote></Quote></div>
             </div>
             </div>

            </div>
            </ReactCardFlip>
            </div>
        )
    }
}
