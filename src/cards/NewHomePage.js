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




// import React, { useState, useEffect } from 'react';
// import ReactPaginate from 'react-paginate';
// import Cards from './Cards/Cards'
// import './NewHomePage.css'
// import distance from './../Distance/Distance';
// import './bootstrap.css'
// const maha = require('./maharastra.json')

// function NewHomePage(props) {
//   const [pagination, setPagination] = useState({
//     data: props.hospitalData,
//     offset: 0,
//     numberPerPage: 10,
//     pageCount: 0,
//     currentData: []
//   });
//   useEffect(() => {
//     setPagination((prevState) => ({
//       ...prevState,
//       pageCount: prevState.data.length / prevState.numberPerPage,
//       currentData: prevState.data.slice(pagination.offset, pagination.offset + pagination.numberPerPage)
//     }))
//   }, [pagination.numberPerPage, pagination.offset])
//   const handlePageClick = event => {
//     const selected = event.selected;
//     const offset = selected * pagination.numberPerPage
//     setPagination({ ...pagination, offset })
//   }
//   return (
//     <div>
//             {/* <div className="card-render-whole">
//                  <div className="card-sec">
//                  <div className="row"> */}
//                          {props.hospitalData.map((dt,ind) => (
//                          <div className="col-xl-4 col-lg-6" style={{paddingRight:'0'}}>
//                          <div className="inside-col-card">
//                              <Cards data={dt} index={ind}></Cards>
//                          </div>
//                      </div>
//                          )
//                      )
//                      }
//                  {/* </div>
//                  </div>
              
//             </div> */}
//       <ReactPaginate
//         previousLabel={'previous'}
//         nextLabel={'next'}
//         breakLabel={'...'}
//         pageCount={pagination.pageCount}
//         marginPagesDisplayed={2}
//         pageRangeDisplayed={5}
//         onPageChange={handlePageClick}
//         containerClassName={'pagination'}
//         activeClassName={'active'}
//       />
//     </div>
//   );
// }
// export default NewHomePage;



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