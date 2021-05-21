import { Component } from "react";
import './main.css'
import './hamburgers.css'
import img1 from './img1.png'
import WorkingOnIt from './WorkingOnIt'
import './homepage.css'
import NewHomePage from './cards/NewHomePage'
// import react from react


const states = ['Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chandigarh (UT)','Chhattisgarh','Dadra and Nagar Haveli (UT)','Daman and Diu (UT)','Delhi (NCT)','Goa','Gujarat','Haryana','Himachal Pradesh','Jammu and Kashmir','Jharkhand','Karnataka','Kerala','Lakshadweep (UT)','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Puducherry (UT)','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttarakhand','Uttar Pradesh','West Bengal']

const SD = {  
    "states":[{"state":"Andhra Pradesh","districts":["Anantapur","Chittoor","East Godavari","Guntur","Krishna","Kurnool","Nellore","Prakasam","Srikakulam","Visakhapatnam","Vizianagaram","West Godavari","YSR Kadapa"]},{"state":"Arunachal Pradesh","districts":["Tawang","West Kameng","East Kameng","Papum Pare","Kurung Kumey","Kra Daadi","Lower Subansiri","Upper Subansiri","West Siang","East Siang","Siang","Upper Siang","Lower Siang","Lower Dibang Valley","Dibang Valley","Anjaw","Lohit","Namsai","Changlang","Tirap","Longding"]},{"state":"Assam","districts":["Baksa","Barpeta","Biswanath","Bongaigaon","Cachar","Charaideo","Chirang","Darrang","Dhemaji","Dhubri","Dibrugarh","Goalpara","Golaghat","Hailakandi","Hojai","Jorhat","Kamrup Metropolitan","Kamrup","Karbi Anglong","Karimganj","Kokrajhar","Lakhimpur","Majuli","Morigaon","Nagaon","Nalbari","Dima Hasao","Sivasagar","Sonitpur","South Salmara-Mankachar","Tinsukia","Udalguri","West Karbi Anglong"]},{"state":"Bihar","districts":["Araria","Arwal","Aurangabad","Banka","Begusarai","Bhagalpur","Bhojpur","Buxar","Darbhanga","East Champaran (Motihari)","Gaya","Gopalganj","Jamui","Jehanabad","Kaimur (Bhabua)","Katihar","Khagaria","Kishanganj","Lakhisarai","Madhepura","Madhubani","Munger (Monghyr)","Muzaffarpur","Nalanda","Nawada","Patna","Purnia (Purnea)","Rohtas","Saharsa","Samastipur","Saran","Sheikhpura","Sheohar","Sitamarhi","Siwan","Supaul","Vaishali","West Champaran"]},{"state":"Chandigarh (UT)","districts":["Chandigarh"]},{"state":"Chhattisgarh","districts":["Balod","Baloda Bazar","Balrampur","Bastar","Bemetara","Bijapur","Bilaspur","Dantewada (South Bastar)","Dhamtari","Durg","Gariyaband","Janjgir-Champa","Jashpur","Kabirdham (Kawardha)","Kanker (North Bastar)","Kondagaon","Korba","Korea (Koriya)","Mahasamund","Mungeli","Narayanpur","Raigarh","Raipur","Rajnandgaon","Sukma","Surajpur  ","Surguja"]},{"state":"Dadra and Nagar Haveli (UT)","districts":["Dadra & Nagar Haveli"]},{"state":"Daman and Diu (UT)","districts":["Daman","Diu"]},{"state":"Delhi (NCT)","districts":["Central Delhi","East Delhi","New Delhi","North Delhi","North East  Delhi","North West  Delhi","Shahdara","South Delhi","South East Delhi","South West  Delhi","West Delhi"]},{"state":"Goa","districts":["North Goa","South Goa"]},{"state":"Gujarat","districts":["Ahmedabad","Amreli","Anand","Aravalli","Banaskantha (Palanpur)","Bharuch","Bhavnagar","Botad","Chhota Udepur","Dahod","Dangs (Ahwa)","Devbhoomi Dwarka","Gandhinagar","Gir Somnath","Jamnagar","Junagadh","Kachchh","Kheda (Nadiad)","Mahisagar","Mehsana","Morbi","Narmada (Rajpipla)","Navsari","Panchmahal (Godhra)","Patan","Porbandar","Rajkot","Sabarkantha (Himmatnagar)","Surat","Surendranagar","Tapi (Vyara)","Vadodara","Valsad"]},{"state":"Haryana","districts":["Ambala","Bhiwani","Charkhi Dadri","Faridabad","Fatehabad","Gurgaon","Hisar","Jhajjar","Jind","Kaithal","Karnal","Kurukshetra","Mahendragarh","Mewat","Palwal","Panchkula","Panipat","Rewari","Rohtak","Sirsa","Sonipat","Yamunanagar"]},{"state":"Himachal Pradesh","districts":["Bilaspur","Chamba","Hamirpur","Kangra","Kinnaur","Kullu","Lahaul &amp; Spiti","Mandi","Shimla","Sirmaur (Sirmour)","Solan","Una"]},{"state":"Jammu and Kashmir","districts":["Anantnag","Bandipore","Baramulla","Budgam","Doda","Ganderbal","Jammu","Kargil","Kathua","Kishtwar","Kulgam","Kupwara","Leh","Poonch","Pulwama","Rajouri","Ramban","Reasi","Samba","Shopian","Srinagar","Udhampur"]},{"state":"Jharkhand","districts":["Bokaro","Chatra","Deoghar","Dhanbad","Dumka","East Singhbhum","Garhwa","Giridih","Godda","Gumla","Hazaribag","Jamtara","Khunti","Koderma","Latehar","Lohardaga","Pakur","Palamu","Ramgarh","Ranchi","Sahibganj","Seraikela-Kharsawan","Simdega","West Singhbhum"]},{"state":"Karnataka","districts":["Bagalkot","Ballari (Bellary)","Belagavi (Belgaum)","Bengaluru (Bangalore) Rural","Bengaluru (Bangalore) Urban","Bidar","Chamarajanagar","Chikballapur","Chikkamagaluru (Chikmagalur)","Chitradurga","Dakshina Kannada","Davangere","Dharwad","Gadag","Hassan","Haveri","Kalaburagi (Gulbarga)","Kodagu","Kolar","Koppal","Mandya","Mysuru (Mysore)","Raichur","Ramanagara","Shivamogga (Shimoga)","Tumakuru (Tumkur)","Udupi","Uttara Kannada (Karwar)","Vijayapura (Bijapur)","Yadgir"]},{"state":"Kerala","districts":["Alappuzha","Ernakulam","Idukki","Kannur","Kasaragod","Kollam","Kottayam","Kozhikode","Malappuram","Palakkad","Pathanamthitta","Thiruvananthapuram","Thrissur","Wayanad"]},{"state":"Lakshadweep (UT)","districts":["Agatti","Amini","Androth","Bithra","Chethlath","Kavaratti","Kadmath","Kalpeni","Kilthan","Minicoy"]},{"state":"Madhya Pradesh","districts":["Agar Malwa","Alirajpur","Anuppur","Ashoknagar","Balaghat","Barwani","Betul","Bhind","Bhopal","Burhanpur","Chhatarpur","Chhindwara","Damoh","Datia","Dewas","Dhar","Dindori","Guna","Gwalior","Harda","Hoshangabad","Indore","Jabalpur","Jhabua","Katni","Khandwa","Khargone","Mandla","Mandsaur","Morena","Narsinghpur","Neemuch","Panna","Raisen","Rajgarh","Ratlam","Rewa","Sagar","Satna","Sehore","Seoni","Shahdol","Shajapur","Sheopur","Shivpuri","Sidhi","Singrauli","Tikamgarh","Ujjain","Umaria","Vidisha"]},{"state":"Maharashtra","districts":["Ahmednagar","Akola","Amravati","Aurangabad","Beed","Bhandara","Buldhana","Chandrapur","Dhule","Gadchiroli","Gondia","Hingoli","Jalgaon","Jalna","Kolhapur","Latur","Mumbai City","Mumbai Suburban","Nagpur","Nanded","Nandurbar","Nashik","Osmanabad","Palghar","Parbhani","Pune","Raigad","Ratnagiri","Sangli","Satara","Sindhudurg","Solapur","Thane","Wardha","Washim","Yavatmal"]},{"state":"Manipur","districts":["Bishnupur","Chandel","Churachandpur","Imphal East","Imphal West","Jiribam","Kakching","Kamjong","Kangpokpi","Noney","Pherzawl","Senapati","Tamenglong","Tengnoupal","Thoubal","Ukhrul"]},{"state":"Meghalaya","districts":["East Garo Hills","East Jaintia Hills","East Khasi Hills","North Garo Hills","Ri Bhoi","South Garo Hills","South West Garo Hills ","South West Khasi Hills","West Garo Hills","West Jaintia Hills","West Khasi Hills"]},{"state":"Mizoram","districts":["Aizawl","Champhai","Kolasib","Lawngtlai","Lunglei","Mamit","Saiha","Serchhip"]},{"state":"Nagaland","districts":["Dimapur","Kiphire","Kohima","Longleng","Mokokchung","Mon","Peren","Phek","Tuensang","Wokha","Zunheboto"]},{"state":"Odisha","districts":["Angul","Balangir","Balasore","Bargarh","Bhadrak","Boudh","Cuttack","Deogarh","Dhenkanal","Gajapati","Ganjam","Jagatsinghapur","Jajpur","Jharsuguda","Kalahandi","Kandhamal","Kendrapara","Kendujhar (Keonjhar)","Khordha","Koraput","Malkangiri","Mayurbhanj","Nabarangpur","Nayagarh","Nuapada","Puri","Rayagada","Sambalpur","Sonepur","Sundargarh"]},{"state":"Puducherry (UT)","districts":["Karaikal","Mahe","Pondicherry","Yanam"]},{"state":"Punjab","districts":["Amritsar","Barnala","Bathinda","Faridkot","Fatehgarh Sahib","Fazilka","Ferozepur","Gurdaspur","Hoshiarpur","Jalandhar","Kapurthala","Ludhiana","Mansa","Moga","Muktsar","Nawanshahr (Shahid Bhagat Singh Nagar)","Pathankot","Patiala","Rupnagar","Sahibzada Ajit Singh Nagar (Mohali)","Sangrur","Tarn Taran"]},{"state":"Rajasthan","districts":["Ajmer","Alwar","Banswara","Baran","Barmer","Bharatpur","Bhilwara","Bikaner","Bundi","Chittorgarh","Churu","Dausa","Dholpur","Dungarpur","Hanumangarh","Jaipur","Jaisalmer","Jalore","Jhalawar","Jhunjhunu","Jodhpur","Karauli","Kota","Nagaur","Pali","Pratapgarh","Rajsamand","Sawai Madhopur","Sikar","Sirohi","Sri Ganganagar","Tonk","Udaipur"]},{"state":"Sikkim","districts":["East Sikkim","North Sikkim","South Sikkim","West Sikkim"]},{"state":"Tamil Nadu","districts":["Ariyalur","Chennai","Coimbatore","Cuddalore","Dharmapuri","Dindigul","Erode","Kanchipuram","Kanyakumari","Karur","Krishnagiri","Madurai","Nagapattinam","Namakkal","Nilgiris","Perambalur","Pudukkottai","Ramanathapuram","Salem","Sivaganga","Thanjavur","Theni","Thoothukudi (Tuticorin)","Tiruchirappalli","Tirunelveli","Tiruppur","Tiruvallur","Tiruvannamalai","Tiruvarur","Vellore","Viluppuram","Virudhunagar"]},{"state":"Telangana","districts":["Adilabad","Bhadradri Kothagudem","Hyderabad","Jagtial","Jangaon","Jayashankar Bhoopalpally","Jogulamba Gadwal","Kamareddy","Karimnagar","Khammam","Komaram Bheem Asifabad","Mahabubabad","Mahabubnagar","Mancherial","Medak","Medchal","Nagarkurnool","Nalgonda","Nirmal","Nizamabad","Peddapalli","Rajanna Sircilla","Rangareddy","Sangareddy","Siddipet","Suryapet","Vikarabad","Wanaparthy","Warangal (Rural)","Warangal (Urban)","Yadadri Bhuvanagiri"]},{"state":"Tripura","districts":["Dhalai","Gomati","Khowai","North Tripura","Sepahijala","South Tripura","Unakoti","West Tripura"]},{"state":"Uttarakhand","districts":["Almora","Bageshwar","Chamoli","Champawat","Dehradun","Haridwar","Nainital","Pauri Garhwal","Pithoragarh","Rudraprayag","Tehri Garhwal","Udham Singh Nagar","Uttarkashi"]},{"state":"Uttar Pradesh","districts":["Agra","Aligarh","Allahabad","Ambedkar Nagar","Amethi (Chatrapati Sahuji Mahraj Nagar)","Amroha (J.P. Nagar)","Auraiya","Azamgarh","Baghpat","Bahraich","Ballia","Balrampur","Banda","Barabanki","Bareilly","Basti","Bhadohi","Bijnor","Budaun","Bulandshahr","Chandauli","Chitrakoot","Deoria","Etah","Etawah","Faizabad","Farrukhabad","Fatehpur","Firozabad","Gautam Buddha Nagar","Ghaziabad","Ghazipur","Gonda","Gorakhpur","Hamirpur","Hapur (Panchsheel Nagar)","Hardoi","Hathras","Jalaun","Jaunpur","Jhansi","Kannauj","Kanpur Dehat","Kanpur Nagar","Kanshiram Nagar (Kasganj)","Kaushambi","Kushinagar (Padrauna)","Lakhimpur - Kheri","Lalitpur","Lucknow","Maharajganj","Mahoba","Mainpuri","Mathura","Mau","Meerut","Mirzapur","Moradabad","Muzaffarnagar","Pilibhit","Pratapgarh","RaeBareli","Rampur","Saharanpur","Sambhal (Bhim Nagar)","Sant Kabir Nagar","Shahjahanpur","Shamali (Prabuddh Nagar)","Shravasti","Siddharth Nagar","Sitapur","Sonbhadra","Sultanpur","Unnao","Varanasi"]},{"state":"West Bengal","districts":["Alipurduar","Bankura","Birbhum","Burdwan (Bardhaman)","Cooch Behar","Dakshin Dinajpur (South Dinajpur)","Darjeeling","Hooghly","Howrah","Jalpaiguri","Kalimpong","Kolkata","Malda","Murshidabad","Nadia","North 24 Parganas","Paschim Medinipur (West Medinipur)","Purba Medinipur (East Medinipur)","Purulia","South 24 Parganas","Uttar Dinajpur (North Dinajpur)"]}]
}

const dist = (state)=>{
    const districts = SD.states[states.lastIndexOf(state)].districts
    return districts
}


export default class Homepage extends Component{

    constructor(props){
        super(props)

        this.state = {
            sidebar: false,
            hidden : true,
            isActive: false,
            showcards: false,
            district:'Reset district',
            stateName: '',
            districts: [],
            notfound : false,
        }
    }

    handleDistrict = async(event) => {
        await this.setState({searching : true})
        let val = event.target.value
        // await this.setState({render: []})
        await this.setState({district: val})
        // if(this.state.district ===''){
        //     await this.setState({district:''})
        // }
        // console.log(this.state.district)
        // let filterBydistrict = this.state.response.filter(
        //     card => (card.district === this.state.district)
        // )
        // if(val !== 'Reset district'){
        //     this.setState({render: filterBydistrict})
        // }else{ 
        //     this.setState({render: this.state.response})
        // }
    }

    handleState = async(event) => {
        let val = event.target.value
        await this.setState({stateName: val})
        await this.setState({render: []})
        await this.setState({district:'Reset district'})
        var districts = []
        districts = dist(this.state.stateName)
        await this.setState({districts:districts})
        const result = await fetch(`https://oxynet.herokuapp.com/oxynet/getByState?state=`+this.state.stateName, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res) => res.json())
        // await this.setState({render:result})
        if(result.status==='ok'){
          this.setState({render:result.cards})
          console.log(this.state.render)
        }
        await this.setState({searching : true})
        await this.setState({response: this.state.render})
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
    
    render(){
        return (
            <div>
              {(this.state.showcards)?
              <div className="show" id="cardContainer" style={{background: '#FFFFFF'} ,{width:'100vw'}}>
                  <div className="lt">
                    <div className={ (this.state.hidden)? "hidden" : null}>
                      <div className={(this.state.sidebar)?"show":"hide"} id="drawer" style={{zIndex: 10}}>
                      <div style={{height: '10vh'}} />
                      <div style={{padding: '3vh', textAlign: 'center'}}>
                        <font style={{fontSize: '4vh'}}>
                          HOME
                        </font>
                      </div>
                      <div style={{padding: '3vh', textAlign: 'center'}}>
                        <font style={{fontSize: '4vh'}}>
                          HOME
                        </font>
                      </div>
                      <div style={{padding: '3vh', textAlign: 'center'}}>
                        <font style={{fontSize: '4vh'}}>
                          HOME
                        </font>
                      </div>
                      <div style={{padding: '3vh', textAlign: 'center'}}>
                        <font style={{fontSize: '4vh'}}>
                          HOME
                        </font>
                      </div>
                    </div>
                    </div>
                    <div className="searchBar show" id="searchBar">
                      <div className="blu ">
                      <div className="c50-50">
                          <div style={{display: 'flex'}}>
                            <div>
                                <button className={(this.state.isActive)?"hamburger hamburger--spin is-active":"hamburger hamburger--spin"}  id="hamburger" style={{outline: 0, transform: 'scale(0.5)', position: 'relative', zIndex: '11', padding: '4vh 1vh 0 3vh'}} onClick={()=>{this.menu();this.toggle();}}>
                                  <div className="hamburger-box" style={{padding: '1vh 0'}}>
                                      <div className="hamburger-inner" />
                                  </div>
                                </button>
                            </div>
                          <div style={{color: 'white', fontWeight: 200, fontSize: '4vh', padding: '3vh 0 0 0'}}>
                              <font> OXYNET </font>
                          </div>
                          </div>
                          <div style={{padding: '3vh 0 0 0', outline: 0}}>
                            <select className="select_item" value={this.state.Item} defaultValue="" onChange={this.handleItem}>
                                <option value="" disabled >Select Item</option>
                            </select>
                          </div>
                      </div>
                      </div>
                      <div className="white">
                      <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                          <div style={{display: 'block', margin: 'auto', padding: '2vh 0 0 0'}}>
                            <select className="select clear" name="stateName" value={this.state.stateName} defaultValue="" onChange={this.handleState}  style={{display: 'block', margin: 'auto', padding: '1vh 4.5vh', borderRadius: 0, maxWidth:'45vw'}}>
                                <option value="" disabled >Select state</option>
                                {states.map((state,index) => (<option key={index} name={state}>{state}</option>))}
                            </select>
                          </div>
                          <div style={{display: 'block', margin: 'auto', padding: '2vh 0 0 0'}}>
                          <select defaultValue={this.state.district}  name="district" id="district"  className="select clear" style={{display: 'block', margin: 'auto', padding: '1vh 4.5vh', borderRadius: 0, maxWidth:'45vw'}} onChange={this.handleDistrict}>
                                <option>Select district</option>
                                { this.state.districts.map((district,index) => (<option key={index} value={district}>{district}</option>)) }
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
                        <div>
                          {/* <div style={{height:21vh}}></div> */}
                          <NewHomePage/>
                        </div>                        
                    }
                  </div>
                  </div>
                  <div className="gt">
                  <div className="fixedBar" style={{width: '100vw', height: '10vh', backgroundColor: '#7B60F7'}}>
                      <div className={ (this.state.hidden)? "hidden" : null}>
                        <div className={(this.state.sidebar)?"show":"hide"} id="drawer" style={{zIndex: 10}}>
                        <div style={{height: '10vh'}} />
                        <div style={{padding: '3vh', textAlign: 'center'}}>
                          <font style={{fontSize: '4vh'}}>
                            HOME
                          </font>
                        </div>
                        <div style={{padding: '3vh', textAlign: 'center'}}>
                          <font style={{fontSize: '4vh'}}>
                            HOME
                          </font>
                        </div>
                        <div style={{padding: '3vh', textAlign: 'center'}}>
                          <font style={{fontSize: '4vh'}}>
                            HOME
                          </font>
                        </div>
                        <div style={{padding: '3vh', textAlign: 'center'}}>
                          <font style={{fontSize: '4vh'}}>
                            HOME
                          </font>
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
                            <select className="select_item" name="stateName" value={this.state.stateName} style={{borderRadius: '5px', width: '22vw'}} onChange={this.handleState}>
                              {/* <select name="district" i{this.state.district} className="select clear" style={{display: 'block', margin: 'auto', padding: '1vh 4.5vh', borderRadius: 0, maxWidth:'45vw'}} onChange={this.handleDistrict}> */}
                              <option value="" disabled >Select state</option>
                                {states.map((state,index) => (<option key={index} name={state}>{state}</option>))}
                              </select>
                            {/* </select> */}
                        </div>
                        <div style={{display: 'block', marginTop: 'auto', outline: 0}}>
                            <select defaultValue={this.state.district} className="select_item" style={{borderRadius: '5px', width: '22vw'}} onChange={this.handleDistrict} name="district" id={this.state.district}>
                                  <option>Select district</option>
                                  { this.state.districts.map((district,index) => (<option key={index} value={district}>{district}</option>)) }
                            </select>
                        </div>
                        <div style={{display: 'block', marginTop: 'auto', outline: 0}}>
                            <select className="select_item" style={{borderRadius: '5px', width: '22vw'}}>
                            <option selected disabled={true} >Select Item</option>
                            <option value>Hospitals</option>
                            </select>
                        </div>
                        <div style={{display: 'block', marginTop: 'auto'}}>
                            <button className="White_submitBtn_d" type="submit" name="button" onClick={this.showcards}> Search</button>
                        </div>
                      </form>
                      </div>
                  </div>
                    {
                      (this.state.notfound)? 
                        <div>
                          <div style={{height: '15vh'}} />
                          <WorkingOnIt/>
                        </div>
                        :
                        <div id="scrollBox"  style={{overflow:'scroll'}}>
                          <div style={{height: '10vh'}} />
                          <NewHomePage/>
                        </div>
                    }
                  </div>
              </div>
              :
              <div>
                <div className="lt">
                  <div className={ (this.state.hidden)? "hidden" : null}>
                        <div className={(this.state.sidebar)?"show":"hide"} id="drawer" style={{zIndex: 10}}>
                            <div style={{height: '10vh'}} />
                            <div style={{padding: '3vh', textAlign: 'center'}}>
                            <font style={{fontSize: '4vh'}}>
                                HOME
                            </font>
                            </div>
                            <div style={{padding: '3vh', textAlign: 'center'}}>
                            <font style={{fontSize: '4vh'}}>
                                HOME
                            </font>
                            </div>
                            <div style={{padding: '3vh', textAlign: 'center'}}>
                            <font style={{fontSize: '4vh'}}>
                                HOME
                            </font>
                            </div>
                            <div style={{padding: '3vh', textAlign: 'center'}}>
                            <font style={{fontSize: '4vh'}}>
                                HOME
                            </font>
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
                    <img className="mainImage" src={img1} alt="" style={{width: '100%', maxWidth: '50vh'}} />
                    <div style={{height: '50vh', width: '50vh', borderRadius: '10px', backgroundColor: 'white', display: 'block', margin: 'auto'}}>
                      <form>
                        <div style={{height: '6vh'}} />
                        <select className="clear" name="Item" style={{background: 'rgba(158, 158, 158, 0.17)', borderRadius: '6px', width: '80%', display: 'block', margin: 'auto', padding: '1.5vh'}} >
                          <option selected disabled>Select Item</option>
                          <option value>Hospitals</option>
                        </select>
                        <div style={{height: '5vh'}} />
                        <select className="clear" name="stateName" value={this.state.stateName} onChange={this.handleState} style={{background: 'rgba(158, 158, 158, 0.17)', borderRadius: '6px', width: '80%', display: 'block', margin: 'auto', padding: '1.5vh'}}>
                                <option value="" disabled >Select state</option>
                                {states.map((state,index) => (<option key={index} name={state}>{state}</option>))}
                        </select>
                        <div style={{height: '5vh'}} />
                        <select defaultValue={this.state.district}  className="clear" style={{background: 'rgba(158, 158, 158, 0.17)', borderRadius: '6px', width: '80%', display: 'block', margin: 'auto', padding: '1.5vh'}} onChange={this.handleDistrict} name="district" id={this.state.district}>
                              <option>Select district</option>
                              { this.state.districts.map((district,index) => (<option key={index} value={district}>{district}</option>)) }
                        </select>
                        <div style={{height: '7vh'}} />
                        <button className="submitBtn" type="button" name="button" onClick={this.showcards}>Search</button>
                      </form>
                    </div>
                    <div style={{height: '5vh'}} />
                  </div>
                </div>
                <div className="gt">
                  <div style={{height: '2vh'}} />
                  <div className="navbar c33-67" style={{borderRadius: 0}}>
                    <div style={{color: 'white', fontWeight: 200, padding: '0 12vw'}}>
                      <font> OXYNET </font>
                    </div>
                    <div style={{color: 'white', fontWeight: 200, display: 'flex', justifyContent: 'space-evenly'}}>
                      <font> HOME </font>
                      <font> IMPORTANT </font>
                      <font> ABOUT US </font>
                      <font> SELLER POINT </font>
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
                          <img src={img1} style={{width: '100%', height: 'max-content', display: 'block', marginTop: 'auto', marginBottom: 0}} alt="" />
                        </div>
                      </div>
                      <div className="serchbBox">
                        <div style={{padding:'6vh 10vw 2vh 10vw'}}>
                          <font style={{fontSize:'2.5vh'}}>
                            Hospitals 
                          </font>
                        </div>
                        <form>
                          <div style={{padding: '4vh 6vw', display: 'flex', justifyContent: 'space-evenly'}}>
                            <select className="SBOptions" name="stateName" value={this.state.stateName} onChange={this.handleState}>
                                <option value="" disabled >Select state</option>
                                {states.map((state,index) => (<option key={index} name={state}>{state}</option>))}
                            </select>
                            <select defaultValue={this.state.district}  className="SBOptions" style={{borderRadius: '5px', width: '22vw'}} onChange={this.handleDistrict} name="district" id={this.state.district}>
                              <option>Select district</option>
                              { this.state.districts.map((district,index) => (<option key={index} value={district}>{district}</option>)) }
                            </select>
                            <button className="submitBtn_d" type="button" name="button" onClick={this.showcards}>Search</button>
                          </div>
                        </form>
                      </div>
                      <div style={{height:'4vh'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              }
            </div>
          );
    }
}