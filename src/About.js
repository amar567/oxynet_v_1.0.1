import { Component } from "react";
import './main.css'
import './hamburgers.css'
import img1 from './img1.png'
import img2 from './img2.png'
import './homepage.css'


const states = ['Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chandigarh','Chhattisgarh','Dadra and Nagar Haveli','Daman and Diu','Delhi','Goa','Gujarat','Haryana','Himachal Pradesh','Jammu and Kashmir','Jharkhand','Karnataka','Kerala','Lakshadweep','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Puducherry','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttarakhand','Uttar Pradesh','West Bengal']

const SD = {  
    "states":[{"state":"Andhra Pradesh","districts":["Anantapur","Chittoor","East Godavari","Guntur","Krishna","Kurnool","Nellore","Prakasam","Srikakulam","Visakhapatnam","Vizianagaram","West Godavari","YSR Kadapa"]},{"state":"Arunachal Pradesh","districts":["Tawang","West Kameng","East Kameng","Papum Pare","Kurung Kumey","Kra Daadi","Lower Subansiri","Upper Subansiri","West Siang","East Siang","Siang","Upper Siang","Lower Siang","Lower Dibang Valley","Dibang Valley","Anjaw","Lohit","Namsai","Changlang","Tirap","Longding"]},{"state":"Assam","districts":["Baksa","Barpeta","Biswanath","Bongaigaon","Cachar","Charaideo","Chirang","Darrang","Dhemaji","Dhubri","Dibrugarh","Goalpara","Golaghat","Hailakandi","Hojai","Jorhat","Kamrup Metropolitan","Kamrup","Karbi Anglong","Karimganj","Kokrajhar","Lakhimpur","Majuli","Morigaon","Nagaon","Nalbari","Dima Hasao","Sivasagar","Sonitpur","South Salmara-Mankachar","Tinsukia","Udalguri","West Karbi Anglong"]},{"state":"Bihar","districts":["Araria","Arwal","Aurangabad","Banka","Begusarai","Bhagalpur","Bhojpur","Buxar","Darbhanga","East Champaran (Motihari)","Gaya","Gopalganj","Jamui","Jehanabad","Kaimur (Bhabua)","Katihar","Khagaria","Kishanganj","Lakhisarai","Madhepura","Madhubani","Munger (Monghyr)","Muzaffarpur","Nalanda","Nawada","Patna","Purnia (Purnea)","Rohtas","Saharsa","Samastipur","Saran","Sheikhpura","Sheohar","Sitamarhi","Siwan","Supaul","Vaishali","West Champaran"]},{"state":"Chandigarh","districts":["Chandigarh"]},{"state":"Chhattisgarh","districts":["Balod","Baloda Bazar","Balrampur","Bastar","Bemetara","Bijapur","Bilaspur","Dantewada (South Bastar)","Dhamtari","Durg","Gariyaband","Janjgir-Champa","Jashpur","Kabirdham (Kawardha)","Kanker (North Bastar)","Kondagaon","Korba","Korea (Koriya)","Mahasamund","Mungeli","Narayanpur","Raigarh","Raipur","Rajnandgaon","Sukma","Surajpur  ","Surguja"]},{"state":"Dadra and Nagar Haveli","districts":["Dadra & Nagar Haveli"]},{"state":"Daman and Diu","districts":["Daman","Diu"]},{"state":"Delhi","districts":["Central Delhi","East Delhi","New Delhi","North Delhi","North East  Delhi","North West  Delhi","Shahdara","South Delhi","South East Delhi","South West  Delhi","West Delhi"]},{"state":"Goa","districts":["North Goa","South Goa"]},{"state":"Gujarat","districts":["Ahmedabad","Amreli","Anand","Aravalli","Banaskantha (Palanpur)","Bharuch","Bhavnagar","Botad","Chhota Udepur","Dahod","Dangs (Ahwa)","Devbhoomi Dwarka","Gandhinagar","Gir Somnath","Jamnagar","Junagadh","Kachchh","Kheda (Nadiad)","Mahisagar","Mehsana","Morbi","Narmada (Rajpipla)","Navsari","Panchmahal (Godhra)","Patan","Porbandar","Rajkot","Sabarkantha (Himmatnagar)","Surat","Surendranagar","Tapi (Vyara)","Vadodara","Valsad"]},{"state":"Haryana","districts":["Ambala","Bhiwani","Charkhi Dadri","Faridabad","Fatehabad","Gurgaon","Hisar","Jhajjar","Jind","Kaithal","Karnal","Kurukshetra","Mahendragarh","Mewat","Palwal","Panchkula","Panipat","Rewari","Rohtak","Sirsa","Sonipat","Yamunanagar"]},{"state":"Himachal Pradesh","districts":["Bilaspur","Chamba","Hamirpur","Kangra","Kinnaur","Kullu","Lahaul &amp; Spiti","Mandi","Shimla","Sirmaur (Sirmour)","Solan","Una"]},{"state":"Jammu and Kashmir","districts":["Anantnag","Bandipore","Baramulla","Budgam","Doda","Ganderbal","Jammu","Kargil","Kathua","Kishtwar","Kulgam","Kupwara","Leh","Poonch","Pulwama","Rajouri","Ramban","Reasi","Samba","Shopian","Srinagar","Udhampur"]},{"state":"Jharkhand","districts":["Bokaro","Chatra","Deoghar","Dhanbad","Dumka","East Singhbhum","Garhwa","Giridih","Godda","Gumla","Hazaribag","Jamtara","Khunti","Koderma","Latehar","Lohardaga","Pakur","Palamu","Ramgarh","Ranchi","Sahibganj","Seraikela-Kharsawan","Simdega","West Singhbhum"]},{"state":"Karnataka","districts":["Bagalkot","Ballari (Bellary)","Belagavi (Belgaum)","Bengaluru (Bangalore) Rural","Bengaluru (Bangalore) Urban","Bidar","Chamarajanagar","Chikballapur","Chikkamagaluru (Chikmagalur)","Chitradurga","Dakshina Kannada","Davangere","Dharwad","Gadag","Hassan","Haveri","Kalaburagi (Gulbarga)","Kodagu","Kolar","Koppal","Mandya","Mysuru (Mysore)","Raichur","Ramanagara","Shivamogga (Shimoga)","Tumakuru (Tumkur)","Udupi","Uttara Kannada (Karwar)","Vijayapura (Bijapur)","Yadgir"]},{"state":"Kerala","districts":["Alappuzha","Ernakulam","Idukki","Kannur","Kasaragod","Kollam","Kottayam","Kozhikode","Malappuram","Palakkad","Pathanamthitta","Thiruvananthapuram","Thrissur","Wayanad"]},{"state":"Lakshadweep","districts":["Agatti","Amini","Androth","Bithra","Chethlath","Kavaratti","Kadmath","Kalpeni","Kilthan","Minicoy"]},{"state":"Madhya Pradesh","districts":["Agar Malwa","Alirajpur","Anuppur","Ashoknagar","Balaghat","Barwani","Betul","Bhind","Bhopal","Burhanpur","Chhatarpur","Chhindwara","Damoh","Datia","Dewas","Dhar","Dindori","Guna","Gwalior","Harda","Hoshangabad","Indore","Jabalpur","Jhabua","Katni","Khandwa","Khargone","Mandla","Mandsaur","Morena","Narsinghpur","Neemuch","Panna","Raisen","Rajgarh","Ratlam","Rewa","Sagar","Satna","Sehore","Seoni","Shahdol","Shajapur","Sheopur","Shivpuri","Sidhi","Singrauli","Tikamgarh","Ujjain","Umaria","Vidisha"]},{"state":"Maharashtra","districts":["Ahmednagar","Akola","Amravati","Aurangabad","Beed","Bhandara","Buldhana","Chandrapur","Dhule","Gadchiroli","Gondia","Hingoli","Jalgaon","Jalna","Kolhapur","Latur","Mumbai City","Mumbai Suburban","Nagpur","Nanded","Nandurbar","Nashik","Osmanabad","Palghar","Parbhani","Pune","Raigad","Ratnagiri","Sangli","Satara","Sindhudurg","Solapur","Thane","Wardha","Washim","Yavatmal"]},{"state":"Manipur","districts":["Bishnupur","Chandel","Churachandpur","Imphal East","Imphal West","Jiribam","Kakching","Kamjong","Kangpokpi","Noney","Pherzawl","Senapati","Tamenglong","Tengnoupal","Thoubal","Ukhrul"]},{"state":"Meghalaya","districts":["East Garo Hills","East Jaintia Hills","East Khasi Hills","North Garo Hills","Ri Bhoi","South Garo Hills","South West Garo Hills ","South West Khasi Hills","West Garo Hills","West Jaintia Hills","West Khasi Hills"]},{"state":"Mizoram","districts":["Aizawl","Champhai","Kolasib","Lawngtlai","Lunglei","Mamit","Saiha","Serchhip"]},{"state":"Nagaland","districts":["Dimapur","Kiphire","Kohima","Longleng","Mokokchung","Mon","Peren","Phek","Tuensang","Wokha","Zunheboto"]},{"state":"Odisha","districts":["Angul","Balangir","Balasore","Bargarh","Bhadrak","Boudh","Cuttack","Deogarh","Dhenkanal","Gajapati","Ganjam","Jagatsinghapur","Jajpur","Jharsuguda","Kalahandi","Kandhamal","Kendrapara","Kendujhar (Keonjhar)","Khordha","Koraput","Malkangiri","Mayurbhanj","Nabarangpur","Nayagarh","Nuapada","Puri","Rayagada","Sambalpur","Sonepur","Sundargarh"]},{"state":"Puducherry","districts":["Karaikal","Mahe","Pondicherry","Yanam"]},{"state":"Punjab","districts":["Amritsar","Barnala","Bathinda","Faridkot","Fatehgarh Sahib","Fazilka","Ferozepur","Gurdaspur","Hoshiarpur","Jalandhar","Kapurthala","Ludhiana","Mansa","Moga","Muktsar","Nawanshahr (Shahid Bhagat Singh Nagar)","Pathankot","Patiala","Rupnagar","Sahibzada Ajit Singh Nagar (Mohali)","Sangrur","Tarn Taran"]},{"state":"Rajasthan","districts":["Ajmer","Alwar","Banswara","Baran","Barmer","Bharatpur","Bhilwara","Bikaner","Bundi","Chittorgarh","Churu","Dausa","Dholpur","Dungarpur","Hanumangarh","Jaipur","Jaisalmer","Jalore","Jhalawar","Jhunjhunu","Jodhpur","Karauli","Kota","Nagaur","Pali","Pratapgarh","Rajsamand","Sawai Madhopur","Sikar","Sirohi","Sri Ganganagar","Tonk","Udaipur"]},{"state":"Sikkim","districts":["East Sikkim","North Sikkim","South Sikkim","West Sikkim"]},{"state":"Tamil Nadu","districts":["Ariyalur","Chennai","Coimbatore","Cuddalore","Dharmapuri","Dindigul","Erode","Kanchipuram","Kanyakumari","Karur","Krishnagiri","Madurai","Nagapattinam","Namakkal","Nilgiris","Perambalur","Pudukkottai","Ramanathapuram","Salem","Sivaganga","Thanjavur","Theni","Thoothukudi (Tuticorin)","Tiruchirappalli","Tirunelveli","Tiruppur","Tiruvallur","Tiruvannamalai","Tiruvarur","Vellore","Viluppuram","Virudhunagar"]},{"state":"Telangana","districts":["Adilabad","Bhadradri Kothagudem","Hyderabad","Jagtial","Jangaon","Jayashankar Bhoopalpally","Jogulamba Gadwal","Kamareddy","Karimnagar","Khammam","Komaram Bheem Asifabad","Mahabubabad","Mahabubnagar","Mancherial","Medak","Medchal","Nagarkurnool","Nalgonda","Nirmal","Nizamabad","Peddapalli","Rajanna Sircilla","Rangareddy","Sangareddy","Siddipet","Suryapet","Vikarabad","Wanaparthy","Warangal (Rural)","Warangal (Urban)","Yadadri Bhuvanagiri"]},{"state":"Tripura","districts":["Dhalai","Gomati","Khowai","North Tripura","Sepahijala","South Tripura","Unakoti","West Tripura"]},{"state":"Uttarakhand","districts":["Almora","Bageshwar","Chamoli","Champawat","Dehradun","Haridwar","Nainital","Pauri Garhwal","Pithoragarh","Rudraprayag","Tehri Garhwal","Udham Singh Nagar","Uttarkashi"]},{"state":"Uttar Pradesh","districts":["Agra","Aligarh","Allahabad","Ambedkar Nagar","Amethi (Chatrapati Sahuji Mahraj Nagar)","Amroha (J.P. Nagar)","Auraiya","Azamgarh","Baghpat","Bahraich","Ballia","Balrampur","Banda","Barabanki","Bareilly","Basti","Bhadohi","Bijnor","Budaun","Bulandshahr","Chandauli","Chitrakoot","Deoria","Etah","Etawah","Faizabad","Farrukhabad","Fatehpur","Firozabad","Gautam Buddha Nagar","Ghaziabad","Ghazipur","Gonda","Gorakhpur","Hamirpur","Hapur (Panchsheel Nagar)","Hardoi","Hathras","Jalaun","Jaunpur","Jhansi","Kannauj","Kanpur Dehat","Kanpur Nagar","Kanshiram Nagar (Kasganj)","Kaushambi","Kushinagar (Padrauna)","Lakhimpur - Kheri","Lalitpur","Lucknow","Maharajganj","Mahoba","Mainpuri","Mathura","Mau","Meerut","Mirzapur","Moradabad","Muzaffarnagar","Pilibhit","Pratapgarh","RaeBareli","Rampur","Saharanpur","Sambhal (Bhim Nagar)","Sant Kabir Nagar","Shahjahanpur","Shamali (Prabuddh Nagar)","Shravasti","Siddharth Nagar","Sitapur","Sonbhadra","Sultanpur","Unnao","Varanasi"]},{"state":"West Bengal","districts":["Alipurduar","Bankura","Birbhum","Burdwan (Bardhaman)","Cooch Behar","Dakshin Dinajpur (South Dinajpur)","Darjeeling","Hooghly","Howrah","Jalpaiguri","Kalimpong","Kolkata","Malda","Murshidabad","Nadia","North 24 Parganas","Paschim Medinipur (West Medinipur)","Purba Medinipur (East Medinipur)","Purulia","South 24 Parganas","Uttar Dinajpur (North Dinajpur)"]}]
}

const dist = (state)=>{
    const districts = SD.states[states.lastIndexOf(state)].districts
    return districts
}

const HospitalData = require('./cards/Navimumbai.json')

export default class Homepage extends Component{

    constructor(props){
        super(props)

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
            data: [
              {
                "hospitalName": "DH Agar Malwa - DCHC",
                "hospitalAddress": "Not Available",
                "normalBedTotal": "150 ",
                "normalBedOccupied": "-",
                "normalBedAvailable": 73,
                "oxygenBedTotal": "-",
                "oxygenBedOccupied": "-",
                "oxygenBedAvailable": 68,
                "lastUpdatedDate": "23-05-2021",
                "lastUpdatedTime": "19:53:15",
                "district": "",
                "state": "Madhyapradesh",
                "googleSearch": "https://www.google.com/search?q=DH+Agar Malwa - DCHC+Madhya+Pradesh&rlz=1C1CHBF_enIN859IN859&oq=DH+Agar Malwa - DCHC+Madhya+Pradesh&aqs=chrome..69i57j46i10i175i199j0i10l7.11711j0j15&sourceid=chrome&ie=UTF-8",
                "phoneNo": "Not Available"
              },
              {
                "hospitalName": "Pichda warg Boys Post matric Hostel Malikhedi road Agar Malwa",
                "hospitalAddress": "Not Available",
                "normalBedTotal": "186 ",
                "normalBedOccupied": "-",
                "normalBedAvailable": 177,
                "oxygenBedTotal": "-",
                "oxygenBedOccupied": "-",
                "oxygenBedAvailable": 65,
                "lastUpdatedDate": "23-05-2021",
                "lastUpdatedTime": "19:51:29",
                "district": "",
                "state": "Madhyapradesh",
                "googleSearch": "https://www.google.com/search?q=Pichda+warg Boys Post matric Hostel Malikhedi road Agar Malwa+Madhya+Pradesh&rlz=1C1CHBF_enIN859IN859&oq=Pichda+warg Boys Post matric Hostel Malikhedi road Agar Malwa+Madhya+Pradesh&aqs=chrome..69i57j46i10i175i199j0i10l7.11711j0j15&sourceid=chrome&ie=UTF-8",
                "phoneNo": "Not Available"
              },
              {
                "hospitalName": "Pichda warg Boys Post matric Hostel Malikhedi road Agar Malwa",
                "hospitalAddress": "Not Available",
                "normalBedTotal": "186 ",
                "normalBedOccupied": "-",
                "normalBedAvailable": 17787,
                "oxygenBedTotal": "-",
                "oxygenBedOccupied": "-",
                "oxygenBedAvailable": 55,
                "lastUpdatedDate": "23-05-2021",
                "lastUpdatedTime": "19:51:29",
                "district": "",
                "state": "Madhyapradesh",
                "googleSearch": "https://www.google.com/search?q=Pichda+warg Boys Post matric Hostel Malikhedi road Agar Malwa+Madhya+Pradesh&rlz=1C1CHBF_enIN859IN859&oq=Pichda+warg Boys Post matric Hostel Malikhedi road Agar Malwa+Madhya+Pradesh&aqs=chrome..69i57j46i10i175i199j0i10l7.11711j0j15&sourceid=chrome&ie=UTF-8",
                "phoneNo": "Not Available"
              },
              {
                "hospitalName": "Pichda warg Boys Post matric Hostel Malikhedi road Agar Malwa",
                "hospitalAddress": "Not Available",
                "normalBedTotal": "186 ",
                "normalBedOccupied": "-",
                "normalBedAvailable": 18,
                "oxygenBedTotal": "-",
                "oxygenBedOccupied": "-",
                "oxygenBedAvailable": 82,
                "lastUpdatedDate": "23-05-2021",
                "lastUpdatedTime": "19:51:29",
                "district": "",
                "state": "Madhyapradesh",
                "googleSearch": "https://www.google.com/search?q=Pichda+warg Boys Post matric Hostel Malikhedi road Agar Malwa+Madhya+Pradesh&rlz=1C1CHBF_enIN859IN859&oq=Pichda+warg Boys Post matric Hostel Malikhedi road Agar Malwa+Madhya+Pradesh&aqs=chrome..69i57j46i10i175i199j0i10l7.11711j0j15&sourceid=chrome&ie=UTF-8",
                "phoneNo": "Not Available"
              }
            ],
            searching:false,
            Item:''
        }
    }

    data = ()=>{
      this.setState({data:HospitalData})
      this.setState({render:HospitalData})
    }

    componentDidMount=()=>{
      // this.data()
    }

    handleDistrict = async(event) => {
        // await this.setState({searching : true})
        let val = event.target.value
        await this.setState({render: []})
        await this.setState({district: val})
        if(this.state.district ===''){
            await this.setState({district:''})
        }
        // console.log(this.state.render)
        let filterBydistrict = await this.state.data.filter(
            card => (card.district.includes(val))
        )
        // console.log(filterBydistrict);
        if(val !== 'Reset district'){
            await this.setState({render: filterBydistrict})
        }else{ 
            await this.setState({render: this.state.data})
        }
        // console.log(this.state.render)
    }

    handleState = async(event) => {
        let val = event.target.value
        await this.setState({stateName: val})
        await this.setState({render: []})
        await this.setState({district:'Reset district'})
        var districts = []
        districts = dist(this.state.stateName)
        await this.setState({districts:districts})
        await this.setState({searching: true})
        const state = val.toLowerCase().split(" ").join("")
        console.log(state);
        const result = await fetch(`https://datascraping001.herokuapp.com/api_covinet?placename=${state}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res) => res.json())
        console.log(result);
        // await this.setState({render:result})
        if(result){
          this.setState({notfound:false})
          this.setState({data:result})
          this.setState({render:result})
          // console.log(this.state.render)
          // console.log(this.state.data)
        }else if(result.status === 400) {
          this.setState({notfound:true})
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
        data.sort((a, b) => (a.oxygenBedAvailable > b.oxygenBedAvailable) ? 1 : -1)
      }
      if(val === 'normalBedAvailable'){
        data.sort((a, b) => (a.normalBedAvailable > b.normalBedAvailable) ? 1 : -1)
      }
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

    render(){
        return (
            <div>
              <div className="homepage">
                <div className="lt">
                  <div className={ (this.state.hidden)? "hidden" : null}>
                        <div className={(this.state.sidebar)?"show":"hide"} id="drawer" style={{zIndex: 10}}>
                            <div style={{height: '10vh'}} />
                              <div className='active' style={{padding: '3vh', textAlign: 'center'}} onClick={()=>{window.location.assign('./a')}} >
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
                            <div className='active' style={{padding: '3vh', textAlign: 'center'}} onClick={()=>{window.location.assign('./api')}} >
                              <font style={{fontSize: '4vh'}}>
                                API
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
                        {/* <select className="clear" name="Item" style={{background: 'rgba(158, 158, 158, 0.17)', borderRadius: '6px', width: '80%', display: 'block', margin: 'auto', padding: '1.5vh'}} >
                          <option value>Hospitals</option>
                        </select> */}
                        <div style={{height: '5vh'}} />
                        <select className="clear" name="stateName" value={this.state.stateName} onChange={this.handleState} style={{background: 'rgba(158, 158, 158, 0.17)', borderRadius: '6px', width: '80%', display: 'block', margin: 'auto', padding: '1.5vh'}}>
                                <option value="" disabled >Select state</option>
                                {states.map((state,index) => (<option className="options" key={index} name={state}>{state}</option>))}
                        </select>
                        <div style={{height: '5vh'}} />
                        <select  className="clear" value={this.state.district} style={{background: 'rgba(158, 158, 158, 0.17)', borderRadius: '6px', width: '80%', display: 'block', margin: 'auto', padding: '1.5vh'}} onChange={this.handleDistrict} name="district">
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
                      </form>
                    </div>
                    <div style={{height: '5vh'}} />
                  </div>
                </div>
                <div className="gt" style={{height:'200vh'}}>
                  <div className="" style={{zIndex:'10'}}>
                    {/* <div style={{height: '2vh'}} /> */}
                    <div className="navbar c33-67" style={{borderRadius: 0, padding:"2vh 0",boxShadow:'0px -13px 20px 0px'}}>
                        <div style={{color: 'white', fontWeight: 200, padding: '0 12vw'}}>
                        <font> COVINET </font>
                        </div>
                        <div style={{color: 'white', fontWeight: 200, display: 'flex', justifyContent: 'space-evenly'}}>
                        <font style={{cursor: 'pointer'}} onClick={()=>{window.location.assign('./')}} > HOME </font>
                        <font style={{cursor: 'pointer'}} onClick={()=>{window.location.assign('./about')}} >ABOUT US</font>
                        <font style={{cursor: 'pointer'}} onClick={()=>{window.location.assign('./team')}} >TEAM </font>
                        <font style={{cursor: 'pointer'}} onClick={()=>{window.location.assign('./api')}} > API </font>
                        </div>
                    </div>
                  </div>
                  <div className="c50-50"  style={{background:'white',justifyContent:'center'}}>
                        <div className="">
                            <div className="" style={{height:'2vh'}} />
                            <img className="" src={img2} alt="" style={{width: '100%', maxWidth: '85vh',position:"relative",top:'0.75vh'}} />
                        </div>
                        <div className="" style={{display:'block',margin:'auto',paddingLeft:'3vw'}}>
                            <div className="" style={{fontSize:'9.6vh',fontWeight:'600',lineHeight:'100%',color:'#7B60F7'}}>
                                THANK YOU
                            </div>
                            <div className="" style={{fontSize:'12vh',fontWeight:'600',lineHeight:'100%',color:'#7B60F7'}}>
                                DOCTORS
                            </div>
                            <div className="" style={{height:'3.5vh'}} />
                            <div className="" style={{height:'1px',background:'#CCCCCC',width:'65%'}} />
                            <div className="" style={{height:'3.5vh'}} />
                            <div className="" style={{width:'65%',color:'#7388FF',fontSize:'3vh',textAlign: 'justify'}}>
                              Oxynet bows a thank you to all the frontliners  who are constantly working to save lives without even thinking about their own. 
                            </div>
                        </div>
                  </div>
                  <div className="" style={{background:'inherit', height:'10vh',zIndex:'15'}}>
                        <div className=""  style={{fontSize:'7vh',fontWeight:'600',lineHeight:'100%',color:'#FFFFFF',textAlign:'center',padding:'6vh 0'}}>
                            ABOUT US
                        </div>
                        <div className="" style={{fontSize:'4vh',lineHeight:'150%',color:'#FFFFFF',textAlign:'left',padding:'0 8vw',textAlign: 'justify'}}>
                          We're a group of students from different Indian Institutes who have been observing the critical condition of the nation in this time of  pandemic. We all ardently wish to help and save lives.  The conditions around are severe and the Indian medical system is constantly trying to bring the country out of this swamp of trouble. Although it is not enough for a country of billions. So we are doing our  bit to help others and beat covid-19.
                        </div>
                        <div>0</div>
                  </div>
                </div>
              </div>
            </div>
          );
    }
}