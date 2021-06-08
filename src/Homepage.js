import React , { Component } from "react";
import './main.css'
import './hamburgers.css'
import img1 from './img1.png'
import WorkingOnIt from './WorkingOnIt'
import './homepage.css'
import NewHomePage from './cards/NewHomePage'
import Mapbox from './mapbox/Mapbox'
import iittp from './iittp.png'
import risha from './rishalab.png'
import { ToastContainer } from 'react-toastify'
import '../node_modules/react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'
import distance from './Distance/Distance';
import axios from "axios";


// const states = ['Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chandigarh','Chhattisgarh','Dadra and Nagar Haveli','Daman and Diu','Delhi','Goa','Gujarat','Haryana','Himachal Pradesh','Jammu and Kashmir','Jharkhand','Karnataka','Kerala','Lakshadweep','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Puducherry','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttarakhand','Uttar Pradesh','West Bengal']

var states =[  
  {name:'Andhra Pradesh',data:568},
{name: "Chhattisgarh", data: 477},
{name: "Delhi", data: 52},
{name: "Goa", data: 29},
{name: "Gujarat", data: 41},
{name: "Haryana", data: 488},
{name: "Jharkhand", data: 44},
{name: "Madhya Pradesh", data: 1094},
{name: "Maharashtra", data: 159},
{name: "Puducherry", data: 20},
{name: "Rajasthan", data: 758},
{name: "Uttarakhand", data: 167},
{name: "Uttar Pradesh", data: 32},
{name: "West Bengal", data: 110}]

const SD = {  
    "states":[
      {"state":"Andhra Pradesh","districts":["Anantapur","Chittoor","East Godavari","Guntur","Krishna","Kurnool","Nellore","Prakasam","Srikakulam","Visakhapatnam","Vizianagaram","West Godavari","YSR Kadapa"]},
      {"state":"Chandigarh","districts":["Chandigarh"]},
      {"state":"Chhattisgarh","districts":["Balod","Balrampur","Bastar","Bemetara","Bijapur","Bilaspur","Dhamtari","Durg","Gariyaband","Janjgir-Champa","Jashpur","Kondagaon","Korba","Mahasamund","Mungeli","Narayanpur","Raigarh","Raipur","Rajnandgaon","Sukma","Surajpur  ","Surguja"]},
      {"state":"Delhi","districts":[]},
      {"state":"Goa","districts":[]},
      {"state":"Gujarat","districts":["Ahmedabad"]},
      {"state":"Haryana","districts":["Ambala","Bhiwani","Faridabad","Fatehabad","Hisar","Jind","Karnal","Mahendragarh","Palwal","Panipat","Rewari","Rohtak","Sirsa","Sonipat","Yamunanagar"]},
      {"state":"Jharkhand","districts":["Ranchi"]},
      {"state":"Madhya Pradesh","districts":["Agar Malwa","Alirajpur","Anuppur","Ashoknagar","Balaghat","Barwani","Betul","Bhind","Bhopal","Burhanpur","Chhatarpur","Chhindwara","Damoh","Datia","Dewas","Dhar","Dindori","Guna","Gwalior","Harda","Hoshangabad","Indore","Jabalpur","Jhabua","Katni","Khandwa","Khargone","Mandla","Mandsaur","Morena","Narsinghpur","Neemuch","Panna","Raisen","Rajgarh","Ratlam","Rewa","Sagar","Satna","Sehore","Seoni","Shahdol","Shajapur","Sheopur","Shivpuri","Sidhi","Singrauli","Tikamgarh","Ujjain","Umaria","Vidisha"]},{"state":"Maharashtra","districts":["Pune","Thane"]},
      {"state":"Puducherry","districts":["Karaikal","Mahe","Pondicherry","Yanam"]},
      {"state":"Rajasthan","districts":["Ajmer","Alwar","Banswara","Baran","Barmer","Bharatpur","Bhilwara","Bikaner","Bundi","Chittorgarh","Churu","Dausa","Dholpur","Dungarpur","Hanumangarh","Jaipur","Jaisalmer","Jalore","Jhalawar","Jhunjhunu","Jodhpur","Karauli","Kota","Nagaur","Pali","Pratapgarh","Rajsamand","Sawai Madhopur","Sikar","Sirohi","Sri Ganganagar","Tonk","Udaipur"]},{"state":"Sikkim","districts":["East Sikkim","North Sikkim","South Sikkim","West Sikkim"]},
      {"state":"Uttarakhand","districts":["Almora","Bageshwar","Chamoli","Champawat","Dehradun","Haridwar","Nainital","Pithoragarh","Rudraprayag","Tehri Garhwal","Uttarkashi"]},
      {"state":"Uttar Pradesh","districts":["Azamgarh","Bahraich","Bhadohi","Ghaziabad","Ghazipur","Gorakhpur","Jhansi","Lucknow","Mainpuri","Rampur","Sultanpur","Varanasi"]},
      {"state":"West Bengal","districts":["Alipurduar","Bankura","Birbhum","Burdwan (Bardhaman)","Cooch Behar","Dakshin Dinajpur (South Dinajpur)","Darjeeling","Hooghly","Howrah","Jalpaiguri","Kalimpong","Kolkata","Malda","Murshidabad","Nadia","Uttar 24 Pargana","Paschim Medinipur (West Medinipur)","Purba Medinipur (East Medinipur)","Purulia","Dakshin 24 Pargana","Uttar Dinajpur (North Dinajpur)"]}]
}

const dist = (state)=>{
  // console.log(state);
    const districts = SD.states[
      SD.states.findIndex(x => x.state ===state)
    ].districts
    return districts
}

// const HospitalData = require('./cards/Navimumbai.json')

export default class Homepage extends Component{

    constructor(props){
        super(props)
        this.myRef = React.createRef()

        this.state = {
            sidebar: false,
            hidden : true,
            isActive: false,
            showcards: false,
            district:'Select district',
            stateName: '',
            districts: [],
            notfound : false,
            render :[],
            data: [],
            searching:false,
            Item:'',
            state:[],
            direction:'',
            lastScrollPos:0,
            transitionStyle:{},
            transitionStyle2:{},
            transitionStyle3:{},
            popUp : true,
            search : ''
        }
    }

    componentDidMount() {
      const result = fetch(`https://datascraping001.herokuapp.com/covinetViewCount_`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
      }).then((res) => res.json())
    }

    handletransition = (e) => {
      if(e>this.state.lastScrollPos){
       
          this.setState({
            direction:'down',
            transitionStyle:{display:'none'},
            transitionStyle2:{display:'none'},
            transitionStyle3:{display:'none'},
  
          })
    
      }
      else{
        setTimeout(()=> {
          
        })
        this.setState({
          direction:'up',
          transitionStyle:{transform:'translateY(0)'},
          transitionStyle2:{transform:'translateY(0)'},
          transitionStyle3:{transform:'translateY(0)'},
        })
      }

      this.setState({
        lastScrollPos:e
      })
   
    }

    handleDistrict = async(event) => {
        // await this.setState({searching : true})
        let val = event.target.value
        await this.setState({render: []})
        await this.setState({district: val})
        // if(this.state.district ===''){
        //     await this.setState({district:''})
        // }
        // console.log(this.state.render)
        let filterBydistrict = await this.state.data.filter(
            card => (card.district.toLowerCase().includes(val.toLowerCase().replaceAll(" ","")))
        )
        console.log(filterBydistrict);
        toast(`Showing ${filterBydistrict.length} results`)

        if(this.state.Item===""){
          filterBydistrict.sort((a, b) => (parseInt(a.rank) > parseInt(b.rank)) ? -1 : 1)
      }
        if(val !== 'Reset district'){
    
            await this.setState({render: filterBydistrict})
            if(this.state.render.length===0){
              this.setState({notfound:true})
            }
        
          
          else{
            this.setState({notfound:false})
          }
       
        }
        if(val === 'Reset district'){ 
            await this.setState({render: this.state.data})
            this.setState({notfound:false})
        }
        // console.log(this.state.render)
    }

 
    handleState = async(event) => {

    
        this.setState({notfound:false})
        this.setState({Item:""})
        let val = event.target.value
        await this.setState({stateName: val})
        await this.setState({render: []})
        await this.setState({district:'Reset district'})
        var districts = []
        districts = dist(val)
        await this.setState({districts:districts})
        await this.setState({searching: true})
        const state = val.toLowerCase().split(" ").join("")

        try{
              const result = await fetch(`https://services.iittp.ac.in/covinet_server/api_covinet?placename=${state}`, {
                  method: 'GET',
                  headers: {
                      'Content-Type': 'application/json'
                  },
              }).then((res) => res.json())

              // await this.setState({render:result})
              setTimeout(()=> {
                toast(`Showing ${result.length} results`)
              },1000)
           
              
              var latlocal =localStorage.getItem("latitude")
              var longlocal = localStorage.getItem("longitude")
              var newarray = []
              
              try{
                result.map(dt => {
                  const obj = dt
                  var distances = distance(dt.latitude,dt.longitude,latlocal,longlocal,'K')
                  if(isNaN(distances)){
                  obj.distance = 'Not Available'
                  }else{
                    obj.distance=distances
                    // console.log('dt',distances)
                  }
                  newarray.push(obj)
                })
              }catch{
                console.log('no data');
              }
        



              if(this.state.Item===""){
                  newarray.sort((a, b) => (parseInt(a.rank) > parseInt(b.rank)) ? -1 : 1)
              }

              if(!result.status){
                this.setState({notfound:false})
                this.setState({data:newarray})
                this.setState({render:newarray})
                // console.log(this.state.render)
                // console.log(this.state.data)
              }
              if(result.status === 'error') {
                toast('Currently not available')
                this.setState({notfound:true})
              }

            
        }
        catch{
          console.log('');
        }
        // if(result.lenght)
        // await this.setState({searching : true})
        // await this.setState({response: this.state.render})
    }

    menu = ()=>{
        this.setState({sidebar:!this.state.sidebar})
        this.setState({hidden:false})
    }

    toggle = ()=>{
        this.setState({isActive:!this.state.isActive})
    }

    showcards = (e)=>{
      e.preventDefault()
      if(this.state.showcards){}else{this.setState({showcards:!this.state.showcards})}
    }
    
    sort = async(event) =>{
      let val = event.target.value
      await this.setState({Item:val})
      console.log(val)
      // function compare(a, b) {
      //     return a.oxygenBedAvailable - b.oxygenBedAvailable;
      // }
      // this.state.data.sort(compare)
      var data = this.state.render
      if (val === 'oxygenBedAvailable'){
        data.sort((a, b) => (parseInt(a.oxygenBedAvailable) > parseInt(b.oxygenBedAvailable)) ? -1 : 1)
      }
      if(val === 'normalBedAvailable'){
        data.sort((a, b) => (parseInt(a.normalBedAvailable) > parseInt(b.normalBedAvailable)) ? -1 : 1)
      }
      if(val === 'distance'){
        data.sort((a, b) => ((a.distance) < (b.distance)) ? -1 : 1)
      }
      await this.setState({render:[]})
      await this.setState({render:data})
      // let filterBydistrict = await this.state.data.filter(
      //     card => (card.district.includes(this.state.district))
      // )
      // console.log(filterBydistrict);
      // if(this.state.district !=="Select district" & this.state.district !=="Reset district"){
      //     await this.setState({render: filterBydistrict})
      // }else{
      //     await this.setState({render: this.state.data})
      // }
      console.log(this.state.render)
    }

    desclaimerHandler = ()=>{
      this.setState({popUp : false})
    }

    handlesearch = async (e)=>{
      alert('under developement!')
      // try{
      //   this.setState({search : e.target.value})
      //   const val = this.state.search
      //   // var data = []
      //   if (val.length > 0){
      //     let filterByName = await this.state.data.filter(
      //       data => (data.hospitalName.toLowerCase().includes(val.toLowerCase().replaceAll(" ","")))
      //     )
      //     this.setState({render:filterByName})

      //   }else{
          
      //     this.handleDistrict()

      //   }
      // }catch(err){
      //   console.log(err.message);
      // }
      // data => (data.hospitalName.toLowerCase().includes(val.toLowerCase().replaceAll(" ","")))
      // console.log(filterByName)
    }

    render(){
      
// states.map(dt=> {
//   const state = dt.name.toLowerCase().split(" ").join("")
//   axios.get(`https://datascraping001.herokuapp.com/api_covinet?placename=${state}`)
//   .then(res=> {
//     dt.data=res.data.length
//   })
//   .catch((err) => {
// console.log("err",err)
//   })
// })

// const newstate=states
//       console.log("states",states)




        return (
            <div >
                <ToastContainer></ToastContainer>
              {(this.state.showcards)?
              <div className="show" id="cardContainer" style={{background: '#FFFFFF',width:'100vw'}}>
                  <div className="lt">
                    <div className="searchBar show" id="searchBar" >
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
                      <div className='active' style={{padding: '3vh', textAlign: 'center'}} onClick={()=>{window.location.assign('https://apicovinet.netlify.app/')}} >
                        <font style={{fontSize: '4vh'}}>
                          API
                        </font>
                      </div>
                      <hr style={{background:'#7B60F7',border:'0',height:'1px',width:'60%'}}/>
                            <div style={{textAlign:"center"}}>
                          
                            </div>
                            <div className="" style={{padding:'2vh 0',textAlign:"center"}}>
                            <img alt="" src={iittp} style={{width:'150px',display:'block',margin:'auto'}}></img>
                              <img alt="" src={risha} style={{width:'200px',display:'block',margin:'auto',marginTop:'20px'}}></img>
                            </div>
                      </div>
                    </div>
                    
                      <div className="blu " style={this.state.transitionStyle}>
                      <div className="c50-50">
                          <div style={{display: 'flex'}}>
                            <div>
                                <button className={(this.state.isActive)?"hamburger hamburger--spin is-active":"hamburger hamburger--spin"}  id="hamburger" style={{outline: 0, transform: 'scale(0.5)', position: 'relative', zIndex: '11', padding: '4vh 1vh 0 3vh'}} onClick={()=>{this.menu();this.toggle();}}>
                                  <div className="hamburger-box" style={{padding: '1vh 0'}}>
                                      <div className="hamburger-inner" />
                                  </div>
                                </button>
                            </div>
                            <div style={{padding: '4vh 0 0 0', outline: '0' , display:'flex'}}>
                              {/* <svg fill-rule="evenodd" clip-rule="evenodd" style={{background: 'white',  padding: '1vh 0vh 1vh 2vh',height:'40px', width:'40px'}}>
                                <path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z"/>
                              </svg> */}
                              <form>
                                <input className="select_item" value={this.state.search} name="search" placeholder="Search" onChange={this.handlesearch} />
                              </form>
                            </div>
                          {/* <div style={{color: 'white', fontWeight: 200, fontSize: '4vh', padding: '3vh 0 0 0'}}>
                              <font> COVINET </font>
                          </div> */}
                          </div>
                          <div style={{padding: '4vh 0 0 0', outline: '0'}}>
                            <select className="select_item" value={this.state.Item} onChange={this.sort}>
                                <option value="" disabled selected >Filter by</option>
                                <option value="oxygenBedAvailable" >Oxygen Beds Available</option>
                                <option value="normalBedAvailable" >Normal Beds Available</option>
                                {/* <option value="distance" >Distance</option> */}
                            </select>
                          </div>
                      </div>
                      </div>
                      <div className="white" style={this.state.transitionStyle2} >
                      <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                          <div style={{display: 'block', margin: 'auto', padding: '2vh 0 0 0'}}>
                            <select className="select clear" name="stateName" onChange={this.handleState} value={this.state.stateName}  style={{display: 'block', cursor:'pointer', margin: 'auto', padding: '1vh 4.5vh', borderRadius: 0, maxWidth:'45vw'}}>
                                <option value="" disabled >Select state</option>
                               {states.map((state,index) => (<option className="options" value={state.name} key={index} >{state.name} ~ {state.data} results</option>))}
                            </select>
                          </div>
                          <div style={{display: 'block', margin: 'auto', padding: '2vh 0 0 0'}}>
                          <select  name="district" id="district" value={this.state.district}  className="select clear" style={{display: 'block', margin: 'auto',cursor:'pointer',  padding: '1vh 4.5vh', borderRadius: 0, maxWidth:'45vw'}} onChange={this.handleDistrict}>
                                {(!this.state.searching)?
                                  <option value="Select district"> Select district</option>
                                :
                                (
                                  (this.state.district !== 'Reset district' )?<option value="Reset district">Reset district</option>:<option value="Select district"> Select district</option>
                                )
                                }
                                { this.state.districts.map((district,index) => (<option className="options" key={index} value={district}>{district}</option>)) }
                          </select>
                          </div>
                      </div>
                      </div>
                  </div>
                  <div id="scrollBox" >
                    {
                      (this.state.notfound)?
                        <WorkingOnIt/>
                        :
                        <div  >
                          <NewHomePage hospitalData={this.state.render} handleTransform={this.handletransition}/>
                        </div>                        
                    }
                  </div>
                  </div>
                  <div className="gt">
                  <div className="fixedBar" style={this.state.transitionStyle3}>
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
                          <div className='active' style={{padding: '3vh', textAlign: 'center'}} onClick={()=>{window.location.assign('https://apicovinet.netlify.app/')}} >
                            <font style={{fontSize: '4vh'}}>
                              API
                            </font>
                          </div>
                            <hr style={{background:'#7B60F7',border:'0',height:'1px',width:'60%'}}/>
                            <div style={{textAlign:"center"}}>
                           
                            </div>
                            <div className="" style={{padding:'2vh 0',textAlign:"center",display:'flex',justifyContent:'center',alignItems:'center'}}>
                              <img alt="" src={iittp} style={{width:'150px',display:'block',margin:'auto'}}></img>
                              <img alt="" src={risha} style={{width:'200px',display:'block',margin:'auto',marginTop:'20px'}}></img>
                            </div>
                        </div>
                      </div>
                      <div>
                      <form  style={{display: 'flex', justifyContent: 'space-evenly'}} onSubmit={this.submit}>
                   
                        <div>
                            <button type="button" className={(this.state.isActive)?"hamburger hamburger--spin is-active":"hamburger hamburger--spin"} id="hamburger" style={{outline: 0, transform: 'scale(0.7)', position: 'relative', padding: '4vh 1vh 0 3vh', zIndex: 11}} onClick={()=>{this.menu();this.toggle();}}>
                              <div className="hamburger-box">
                                  <div className="hamburger-inner" />
                              </div>
                            </button>
                        </div>
                  
                        <div style={{display: 'block', marginTop: 'auto', outline: 0}}>
                            <select className="select_item" name="stateName" value={this.state.stateName} style={{borderRadius: '5px',cursor:'pointer',  width: '22vw'}} onChange={this.handleState}>
                              <option value="" disabled >Select state</option>
                              {states.map((state,index) => (<option className="options" value={state.name} key={index} name={state.name}>{state.name} ~ {state.data} results</option>))}
                            </select>
                        </div>
                        <div style={{display: 'block', marginTop: 'auto', outline: 0}}>
                            <select className="select_item" style={{borderRadius: '5px',cursor:'pointer',  width: '22vw'}} value={this.state.district} onChange={this.handleDistrict} name="district">
                                  {(!this.state.searching)?
                                    <option value="Select district"> Select district</option>
                                 
                                    :(
                                  (this.state.district !== 'Reset district' )?<option value="Reset district">Reset district</option>:<option value="Select district"> Select district</option>
                                )                                  }
                                  { this.state.districts.map((district,index) => (<option className="options" key={index} value={district}>{district}</option>)) }
                            </select>
                        </div>
                        <div style={{display: 'block', marginTop: 'auto', outline: 0}}>
                            <select className="select_item" style={{borderRadius: '5px', width: '22vw'}} value={this.state.Item} onChange={this.sort}>
                                <option value="" disabled selected >Filter by</option>
                                <option value="oxygenBedAvailable" >Oxygen beds available</option>
                                <option value="normalBedAvailable" >Normal beds available</option>
                                {/* <option value="distance" >Distance</option> */}
                            </select>
                            {/* <select className="select_item" style={{borderRadius: '5px', width: '22vw'}}>
                              <option value>Hospitals</option>
                            </select> */}
                        </div>
                        <div style={{display: 'block', marginTop: 'auto'}}>
                          <form>
                            <input className="White_submitBtn_d" value={this.state.search} name="search" placeholder="Search" onChange={this.handlesearch} />
                          </form>
                        </div>
                      </form>
                      </div>
                  </div>
                    {
                      (this.state.notfound)? 
                        <div>
                          <WorkingOnIt/>
                        </div>
                        :
                        <div id="scrollBox"  style={{height:'100vh',overflow:'scroll',width:'100vw'}}>
                          <div style={{height: '10vh'}} style={this.state.transitionStyle3} />
                          <NewHomePage hospitalData={this.state.render} handleTransform={this.handletransition} />
                        </div>
                    }
                  </div>
              </div>
              :
              <div className="homepage" style={{minHeight:'100vh'}}>
              
                <div className="lt"  style={{minHeight:'100vh'}}>
                {
                  (this.state.popUp)?
                  <div style={{height :'100vh',padding :'20vh 5vw',position:"fixed",background:"rgba(0,0,0,0.8)"}}>
                    <div style={{background:'white', height : '60vh',borderRadius:'20px',width :'90vw',display:'block',margin:'auto' ,justifyContent: "center"}}>
                      <div style={{padding:'3vh',height:'50vh',overflow:"scroll"}}>
                        <b>Disclaimer :</b><br/>
                        The website is under active development. The content on this website comes from Govt. websites and we do not fact check any of the content and thereby hold no responsibility for content that is incorrect. Please use at your discretion, and contact the hospital before reaching there. Also, please note that this is a student initiative and IIT Tirupati is not responsible for any issues whatsoever!
                      </div>
                      <div style={{width:'100%',textAlign : "center"}}>
                        <button onClick={this.desclaimerHandler} style={{position:'relative',bottom: '0',color: 'white',background: '#6748F7',borderRadius: '5px',display: 'block',margin: 'auto',padding: '1.8vh 12vh',border: '0',textAlign: 'center'}}>OK</button>
                      </div>
                    </div>
                  </div>
                  :
                  null
                  }
                  <div>
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
                              <div className='active' style={{padding: '3vh', textAlign: 'center'}} onClick={()=>{window.location.assign('https://apicovinet.netlify.app/')}} >
                                <font style={{fontSize: '4vh'}}>
                                  API
                                </font>
                              </div>
                              <hr style={{background:'#7B60F7',border:'0',height:'1px',width:'60%'}}/>
                              <div style={{textAlign:"center"}}>
                              
                              </div>
                              <div className="" style={{padding:'2vh 0',textAlign:"center"}}>
                                <img alt="" src={iittp} style={{width:'150px',display:'block',margin:'auto'}}></img>
                                <img alt="" src={risha} style={{width:'200px',display:'block',margin:'auto',marginTop:'20px'}}></img>
                              </div>
                          </div>
                      </div>
                    <div>
                      <button className={(this.state.isActive)?"hamburger hamburger--spin is-active":"hamburger hamburger--spin"} id="hamburger" style={{outline: '0', transform: 'scale(0.7)', position: 'fixed', top: '1.4vh', left: '1.4vh' ,zIndex: '11'}} onClick={()=>{this.menu();this.toggle();}}>
                        <div className="hamburger-box">
                          <div className="hamburger-inner" />
                        </div>
                      </button>
                    </div>
                    <div>
                      <div style={{display: 'block', margin: 'auto', textAlign: 'center'}}>
                        <div style={{height: '12vh'}} />
                        <font style={{fontSize: '6.5vh', fontWeight: 'bold', color: 'white', lineHeight: 0}}>COVID19</font><br />
                        <font style={{fontSize: '4.8vh', fontWeight: 'bold', color: 'white'}}>ESSENTIALS</font>
                        <hr style={{color: 'white', border: 'none', display: 'block', margin: 'auto', height: '1px', backgroundColor: 'white', width: '32vh'}} />
                        <div style={{width: '36vh', display: 'block', margin: 'auto', textAlign: 'center'}}>
                          <font style={{color: 'white', fontSize: '1.6vh'}}>
                            Helping people reach the resources in time to fight against the crisis.
                          </font>
                          <div style={{height: '2vh'}} />
                        </div>
                      </div>
                      <img alt="" className="mainImage" src={img1} alt="" style={{width: '100%', maxWidth: '50vh'}} />
                      <div style={{height: '40vh', width: '50vh', borderRadius: '10px', backgroundColor: 'white', display: 'block', margin: 'auto'}}>
                        <form >
                          <div style={{height: '6vh',position:'absolute',bottom:'5vh',paddingBottom:'10px'}} />
                          {/* <select className="clear" name="Item" style={{background: 'rgba(158, 158, 158, 0.17)', borderRadius: '6px', width: '80%', display: 'block', margin: 'auto', padding: '1.5vh'}} >
                            <option value>Hospitals</option>
                          </select> */}
                          <div style={{height: '5vh'}} />
                          <select className="clear" name="stateName" value={this.state.stateName} onChange={this.handleState} style={{background: 'rgba(158, 158, 158, 0.17)',cursor:'pointer',  borderRadius: '6px', width: '80%', display: 'block', margin: 'auto', padding: '1.5vh'}}>
                                  <option value="" disabled >Select state</option>
                                  {states.map((state,index) => (<option className="options" key={index} value={state.name}name={state.name}>{state.name} ~ {state.data} results </option>))}
                          </select>
                          <div style={{height: '5vh'}} />
                          <select  className="clear" value={this.state.district} style={{background: 'rgba(158, 158, 158, 0.17)', cursor:'pointer', borderRadius: '6px', width: '80%', display: 'block', margin: 'auto', padding: '1.5vh'}} onChange={this.handleDistrict} name="district">
                                {(!this.state.searching)?
                                  <option value="Select district"> Select district</option>
                                :
                                (
                                  (this.state.district !== 'Reset district' )?<option value="Reset district">Reset district</option>:<option value="Select district"> Select district</option>
                                )
                                }
                                { this.state.districts.map((district,index) => (<option className="options" key={index} value={district}>{district}</option>)) }
                          </select>
                          <div style={{height: '7vh'}} />
                          <button className="submitBtn" type="button" name="button" onClick={this.showcards}>Search</button>
                          {/* <div style={{height:'5vh'}}></div> */}
                      {/* <div className="mapbox-class">   <Mapbox></Mapbox></div> */}
                        </form>
                      </div>
                      
                    </div>
                  </div>                  
                </div>
                <div className="gt" style={{minHeight : '100vh',overflow:"scroll"}}>
                  <div style={{height: '2vh'}} />
                  <div className="navbar c33-67" style={{borderRadius: 0}}>
                    <div className="logo-class" style={{color: 'white', fontWeight: 200, padding: '0 12vw'},
                    {display:'flex'}}>
                      <img alt="" src={iittp} className="iittp-logo"></img>
                      <img alt="" src={risha} className="risha-logo"></img>
                      <font className="logo-covinet"> COVINET </font>
                    </div>
                    <div style={{color: 'white', fontWeight: 200, display: 'flex', justifyContent: 'space-evenly'}}>
                      <font style={{cursor: 'pointer'}} onClick={()=>{window.location.assign('./')}} > HOME </font>
                      <font style={{cursor: 'pointer'}} onClick={()=>{window.location.assign('./about')}} >ABOUT US</font>
                      <font style={{cursor: 'pointer'}} onClick={()=>{window.location.assign('https://apicovinet.netlify.app/')}} > API </font>
                    </div>
                  </div>
                  <div>
                    <div style={{}}>
                      <div className="c50-50" style={{padding: '6vh 4vw 0vh 4vw'}}>
                        <div>
                          <div style={{height: '8vh'}} />
                          <font style={{fontSize: '16vh', fontWeight: 'bold', color: 'white', lineHeight: 0}}>COVID19</font><br />
                          <font style={{fontSize: '12vh', fontWeight: 'bold', color: 'white'}}>ESSENTIALS</font>
                          <hr style={{color: 'white', border: 'none', margin: 0, height: '1px', backgroundColor: 'white', width: '80%'}} />
                          <div style={{width: '82%'}}>
                            <div style={{height: '2vh'}} />
                            <font style={{color: 'white', fontSize: '4vh'}}>
                              Helping people reach the resources in time to fight against the crisis.
                            </font>
                            <div style={{height: '2vh'}} />
                          </div>
                        </div>
                        <div style={{display: 'flex'}}>
                          <img alt="" src={img1} style={{width: '100%', height: 'max-content', display: 'block', marginTop: 'auto', marginBottom: 0}} alt="" />
                        </div>
                      </div>
                      <div className="serchbBox">
                        <div style={{padding:'6vh 10vw 2vh 10vw'}}>
                          <font style={{fontSize:'2.5vh'}}>
                            Hospitals 
                          </font>
                        </div>
                        <form>
                        {/* <div className="mapbox-class"> <Mapbox></Mapbox> </div>  */}
                  
                          <div style={{padding: '1vh 6vw' , display: 'flex', justifyContent: 'space-evenly'}}>
                            <select className="SBOptions" style={{borderRadius: '5px', cursor:'pointer', width: '22vw',background:'#FFFFFF'}} name="stateName" value={this.state.stateName} onChange={this.handleState} >
                                <option value="" disabled >Select state</option>
                                {states.map((state,index) => (<option className="options" key={index} value={state.name} name={state.name}>{state.name} ~ {state.data} results</option>))}
                            </select>
                            <select  className="SBOptions" style={{borderRadius: '5px', cursor:'pointer',  width: '22vw',background:'#FFFFFF'}} onChange={this.handleDistrict} name="district" value={this.state.district}>
                              {(!this.state.searching)?
                                <option value="Select district"> Select district</option>
                              :
                              (
                                (this.state.district !== 'Reset district' )?<option value="Reset district">Reset district</option>:<option value="Select district"> Select district</option>
                              )
                              }
                              { this.state.districts.map((district,index) => (<option className="options" key={index} value={district}>{district}</option>)) }
                            </select>
                            <button className="submitBtn_d" type="button" name="button" onClick={this.showcards}>Search</button>
                          </div>
                        </form>
                      </div>
                      <div style={{color:"white",fontSize:'1.5vh',padding : '1vh 10vw'}}>
                        Disclaimer : The website is under active development. The content on this website comes from Govt. websites and we do not fact check any of the content and thereby hold no responsibility for content that is incorrect. Please use at your discretion, and contact the hospital before reaching there. Also, please note that this is a student initiative and IIT Tirupati is not responsible for any issues whatsoever!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              }
            </div>
          );
    }
}