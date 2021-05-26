import React, { Component } from 'react'
import './Contactus.css'

export default class Contactus extends Component {

    constructor(props){
        super(props)
        this.state = {
            show1:true,
            show2:false,
            show3:false,
            show2card:false,
            currentTrgent:1
        }
    }


    handleradio3 = () => {

        this.setState({
            currentTrgent:3
        })
        if(!this.state.show3){
            this.setState({
                show3:true,
                show1:false,
                show2:false
              
            })
        }
    //     if(this.state.show3){
    //     this.setState({
    //         show3:false,
                      
    //     })
    
    // }
    }
    handleradio2 = () => {

        this.setState({
            currentTrgent:2
        })
        if(!this.state.show2){
            this.setState({
                show3:false,
                show1:false,
                show2:true
              
            })
        }
    //     if(this.state.show3){
    //     this.setState({
    //         show3:false,
                      
    //     })
    
    // }
    }
    handleradio1 = () => {
        this.setState({
            currentTrgent:1
        })

        if(!this.state.show1){
            this.setState({
                show1:true,
                show3:false,
                show2:false
              
            })
        }
    //     if(this.state.show3){
    //     this.setState({
    //         show3:false,
                      
    //     })
    
    // }
    }

    componentDidCatch = () => {
        this.Screen()
    }

    Screen = () => {
     
        window.onresize = this.displayWindowSize;
        window.onload = this.displayWindowSize;
       
      }
      
      displayWindowSize =() => {
        let myWidth = window.innerWidth;
        // let myHeight = window.innerHeight;
        // your size calculation code here
  
        if(myWidth<=1020){
          this.setState({
              show2card:true
          })
        }
        if(myWidth>1020){
          this.setState({
              show2card:false
          })
        }
    
      }
    render() {
        this.Screen()

  console.log(this.state.show3)
        return (
            <div className="contactus-whole">
                
           
                {this.state.show2card ?
                <div className="card-sec-2-whole">
                 <div className="card-section-2">
                    <div className={this.state.show1 ? "whole-card-sm" : "animate-1-sm"}>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="card-contact">
                                    <div className="contact-top">
                                        <img src="./pp_12.png" className="img-avatar"></img>
                                    </div>
                            
                                    <div className="contact-info">
                                        <div className="name-info">Sridhar  Chimalakonda</div>
                                        <div className="work">Mentor</div>
                                        <div className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the in</div>
                                    </div>
                            </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card-contact">
                                    <div className="contact-top">
                                        <img src="./pp_13.png" className="img-avatar"></img>
                                    </div>
                            
                                    <div className="contact-info">
                                        <div className="name-info">Shubham Raj</div>
                                        <div className="work">Front & Back-End</div>
                                        <div className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the in</div>
                                    </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className={this.state.show2 ? "whole-card-sm-2" : "animate-2-sm"}>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="card-contact">
                                    <div className="contact-top">
                                        <img src="./pp_4.png" className="img-avatar"></img>
                                    </div>
                            
                                    <div className="contact-info">
                                        <div className="name-info">TalhA Shamim</div>
                                        <div className="work">Front & Back-End</div>
                                        <div className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the in</div>
                                    </div>
                            </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card-contact">
                                    <div className="contact-top">
                                        <img src="./pp_5.png" className="img-avatar"></img>
                                    </div>
                            
                                    <div className="contact-info">
                                        <div className="name-info">Abhirrop Chauhan</div>
                                        <div className="work">UI Design</div>
                                        <div className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the in</div>
                                    </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className={this.state.show3 ? "whole-card-sm-3" : "animate-3-sm"}>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="card-contact">
                                    <div className="contact-top">
                                        <img src="./pp_8.png" className="img-avatar"></img>
                                    </div>
                            
                                    <div className="contact-info">
                                        <div className="name-info">Amardeep Khushwaha</div>
                                        <div className="work">Front & Back-End</div>
                                        <div className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the in</div>
                                    </div>
                            </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card-contact">
                                    <div className="contact-top">
                                        <img src="./pp_9.png" className="img-avatar"></img>
                                    </div>
                            
                                    <div className="contact-info">
                                        <div className="name-info">Adarsh Shivhare</div>
                                        <div className="work">Back-End</div>
                                        <div className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the in</div>
                                    </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className="radio-btns-sm">
                    <div className={this.state.show1 ? "active-rd-1-sm": "cr-1-sm"} onClick={this.handleradio1}></div>
                    <div className="line-st"></div>
                    <div className={this.state.show2 ? "active-rd-2-sm" : "cr-2-sm"} onClick={this.handleradio2}></div>
                    <div className="3rd-btn">
                    <div className="line-st-2"></div>
                    <div className={this.state.show3 ? "active-rd-3-sm" : "cr-3-sm"} onClick={this.handleradio3}></div>
                    </div>
                </div>
                </div> :
                <div className="card-section-contact">
                <div className={this.state.show1 ? "whole-card" : "animate-show-1"}>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card-contact">
                            <div className="contact-top">
                            <img src="./pp_12.png" className="img-avatar"></img>
                            </div>
                           
                            <div className="contact-info">
                                <div className="name-info">Sridhar  Chimalakonda</div>
                                <div className="work">Mentor</div>
                                <div className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the in</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card-contact">
                            <div className="contact-top">
                            <img src="./pp_13.png" className="img-avatar"></img>
                            </div>
                           
                            <div className="contact-info">
                                <div className="name-info">Shubham Raj</div>
                                <div className="work">Front & Back-End</div>
                                <div className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the in</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-4">
                        <div className="card-contact">
                            <div className="contact-top">
                            <img src="./pp_4.png" className="img-avatar pp_10"></img>
                            </div>
                           
                            <div className="contact-info">
                                <div className="name-info">Talha Shamim</div>
                                <div className="work">Front & Back-End</div>
                                <div className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the in</div>
                            </div>
                        </div>
                    </div>
         
                </div>
                </div>

                <div className={this.state.show2 ? "animate-show-2" : "whole-card-2"}>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card-contact">
                            <div className="contact-top">
                            <img src="./pp_5.png" className="img-avatar"></img>
                            </div>
                           
                            <div className="contact-info">
                                <div className="name-info">Abhiroop Chauhan</div>
                                <div className="work">UI Designing</div>
                                <div className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the in</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card-contact">
                            <div className="contact-top">
                            <img src="./pp_8.png" className="img-avatar"></img>
                            </div>
                           
                            <div className="contact-info">
                                <div className="name-info">Amardeep Khuswaha</div>
                                <div className="work">Front & Back-End</div>
                                <div className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the in</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card-contact">
                            <div className="contact-top">
                            <img src="./pp_9.png" className="img-avatar"></img>
                            </div>
                           
                            <div className="contact-info">
                                <div className="name-info">Adarsh Shivhare</div>
                                <div className="work">Back-End</div>
                                <div className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the in</div>
                            </div>
                        </div>
                    </div>
         
                </div>
                </div>
                </div>
    }
                <div className="radio-btns">
                    <div className={this.state.show1 ? "active-rd-1": "cr-1"} onClick={this.handleradio1}></div>
                    <div className="line-st"></div>
                    <div className={this.state.show2 ? "active-rd-2" : "cr-2"} onClick={this.handleradio2}></div>
                    {this.state.show2card ? <div className="3rd-btn">
                    <div className="line-st-2"></div>
                    <div className={this.state.show3 ? "active-rd-3" : "cr-3"} onClick={this.handleradio3}></div>
                    </div> : null}
                </div>
            </div>
        )
    }
}
