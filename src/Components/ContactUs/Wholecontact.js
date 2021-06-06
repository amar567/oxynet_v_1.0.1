import React, { Component } from 'react'
import './Contactus'
import Contactus from './Contactus'
import iittp from '../../iittp.png'
import risha from '../../rishalab.jpg'

export default class Wholecontact extends Component {

    constructor(props){
        super(props)

        this.state = {
            sidebar: false,
            hidden : false,
            isActive: false,
        }
    }

    menu = ()=>{
        this.setState({sidebar:!this.state.sidebar})
        this.setState({hidden:false})
    }

    toggle = ()=>{
        this.setState({isActive:!this.state.isActive})
    }


    render() {
        return (
          <>
            <div className="homepage">
                <div className="lt">
                    <div className={ (this.state.hidden)? "hidden" : null}>
                      <div className={(this.state.sidebar)?"show":"hide"} id="drawer" style={{zIndex: 10}}>
                      <div style={{height: '10vh'}} />
                      <div className='active' style={{padding: '3vh', textAlign: 'center'}} onClick={()=>{window.location.assign('./')}} >
                        <font style={{fontSize: '4vh'}}>
                          HOME
                        </font>
                      </div>
                      <div className='active' style={{padding: '3vh', textAlign: 'center'}} onClick={()=>{window.location.assign('./about')}} >
                        <font style={{fontSize: '4vh'}}>
                          ABOUT US
                        </font>
                      </div>
                      <div className='active' style={{padding: '3vh', textAlign: 'center'}} onClick={()=>{window.location.assign('./team')}} >
                        <font style={{fontSize: '4vh'}}>
                          OUR TEAM
                        </font>
                      </div>
                      <div className='active' style={{padding: '3vh', textAlign: 'center'}} onClick={()=>{window.location.assign('https://apicovinet.netlify.app/')}} >
                        <font style={{fontSize: '4vh'}}>
                          API
                        </font>
                      </div>
                      <hr style={{background:'#7B60F7',border:'0',height:'1px',width:'60%'}}/>
                            <div style={{textAlign:"center"}}>
                          
                            </div>
                            <div className="" style={{padding:'2vh 0',textAlign:"center"}}>
                              <img src={iittp} style={{width:'150px',display:'block',margin:'auto'}}></img>
                              <img src={risha} style={{width:'200px',display:'block',margin:'auto',marginTop:'20px'}}></img>
                            </div>
                      </div>
                    </div>
                  <div>
                    <button className={(this.state.isActive)?"hamburger hamburger--spin is-active":"hamburger hamburger--spin"} id="hamburger" style={{outline: '0', transform: 'scale(0.7)', position: 'fixed',zIndex: '11'}} onClick={()=>{this.menu();this.toggle();}}>
                      <div className="hamburger-box">
                        <div className="hamburger-inner" />
                      </div>
                    </button>
                  </div>
                  <div className="" style={{height:'100vh',display:'block',justifyContent:'center',overflow:'scroll'}}>
                  </div>
                </div>
                <div className="gt" style={{height:'100vh'}}>
                  <div style={{height: '2vh'}} />
                  <div className="navbar c33-67" style={{borderRadius: 0}}>
                    <div style={{color: 'white', fontWeight: 200, padding: '0 12vw'}}>
                      <font> COVINET </font>
                    </div>
                    <div style={{color: 'white', fontWeight: 200, display: 'flex', justifyContent: 'space-evenly'}}>
                      <font style={{cursor: 'pointer'}} onClick={()=>{window.location.assign('./')}} > HOME </font>
                      <font style={{cursor: 'pointer'}} onClick={()=>{window.location.assign('./about')}} >ABOUT US</font>
                      <font style={{cursor: 'pointer'}} onClick={()=>{window.location.assign('./team')}} >TEAM </font>
                      <font style={{cursor: 'pointer'}} onClick={()=>{window.location.assign('https://apicovinet.netlify.app/')}} > API </font>
                    </div>
                  </div>
                  <div>
                  </div>
                </div>
            </div>
            <Contactus></Contactus>
          </>        
      )
    }
}