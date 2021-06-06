import React, { Component } from 'react'
import Cards from './Cards/Cards'
import './NewHomePage.css'
import distance from './../Distance/Distance';
import './bootstrap.css'
import Down from './Svg/Down';
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify'


export default class NewHomePage extends Component {

    constructor(props){
        super(props)
        this.myRef = React.createRef()
        this.state = {
            render:[],
            data:props.hospitalData,
            filter:props.item,
            prev:0,
            next:9,
            loadbool:false,
            scrollTop: 0
        }
    }
handleLoad = () => {
this.setState({
    next:this.state.next+18
})

}

onScroll = () => {
    const scrollTop = this.myRef.current.scrollTop
    
    this.setState({
       scrollTop: scrollTop
    })

    this.props.handleTransform(scrollTop)
 }

    render() {
    
        var data=this.props.hospitalData
        var newarray = data.slice(0,this.state.next)
        var boolshow = true
        if(this.state.next>=data.length){
            boolshow=false
        }
     
        // else{
        //     var inter =setInterval(()=> {
        //         this.handleLoad()

        //         if(this.state.next>=data.length){
        //             clearInterval(inter)
        //         }
        //     },5000)
        // }
        
        return (
    
            <div className="render-whole"style={{paddingBottom:"50px", height:'100vh',overflow:'scroll'}} ref={this.myRef} onScroll={this.onScroll}>    
        
                <div className="card-render-whole">
                <div className="card-sec">
                <div className="row">
                        {
                        newarray.map((dt,ind) => (
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
           { boolshow ? <div className="btn-load" onClick={this.handleLoad}>
                <div className="svg-dwn">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
</svg>
                </div> 
            </div>
            : null}
            </div>
        )
    }
}

