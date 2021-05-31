import React, { Component } from 'react'
import Cards from './Cards/Cards'
import './NewHomePage.css'
import distance from './../Distance/Distance';
import './bootstrap.css'
import Down from './Svg/Down';
const maha = require('./maharastra.json')



export default class NewHomePage extends Component {

    constructor(props){
        super(props)
        this.state = {
            render:[],
            data:props.hospitalData,
            filter:props.item,
            prev:0,
            next:60,
            loadbool:false
        }
    }
handleLoad = () => {
this.setState({
    next:this.state.next+60
})

}
    render() {
  
        console.log("home",this.props.hospitalData.length)
        var data=this.props.hospitalData
        var newarray = data.slice(0,this.state.next)
        var boolshow = true
        if(this.state.next>=data.length){
            boolshow=false
        }
       
        return (
            <div style={{paddingBottom:"50px"}}>            
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


// import React, { Component,useState } from 'react'
// import Cards from './Cards/Cards'
// import './NewHomePage.css'
// import distance from './../Distance/Distance';
// import './bootstrap.css'
// // const maha = require('./maharastra.json')
// // import React, { useState } from 'react';
// import InfiniteScroll from 'react-infinite-scroll-component';


// function NewHomePage(props) {

//     console.log(props);

//   const [count, setCount] = useState({
//     prev: 0,
//     next: 3
//   })
//   const [hasMore, setHasMore] = useState(true);
//   const [current, setCurrent] = useState(props.hospitalData.slice(count.prev, count.next))
//   const getMoreData = () => {
//     if (current.length === props.hospitalData.length) {
//       setHasMore(false);
//       return;
//     }
//     setTimeout(() => {
//       setCurrent(current.concat(props.hospitalData.slice(count.prev + 3, count.next + 3)))
//     }, 5000)
//     setCount((prevState) => ({ prev: prevState.prev + 3, next: prevState.next + 3 }))
//   }

//   return (
//             <div className="card-render-whole">
//                 <div className="card-sec">
//                 <InfiniteScroll
//                     dataLength={current.length}
//                     next={getMoreData}
//                     hasMore={hasMore}
//                     loader={<h4>Loading...</h4>}
//                     >
//                          {props.hospitalData.map((dt,ind) => (
//                          <div className="col-xl-4 col-lg-6" style={{paddingRight:'0'}}>
//                          <div className="inside-col-card">
//                              <Cards data={dt} index={ind}></Cards>
//                          </div>
//                          </div>)
//                          )}
//                 </InfiniteScroll>
//                 </div>
//             </div>
//   );
// }
// export default NewHomePage;