import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
// import {Router, Link} from "react-router-dom" ;
import Post from "./services/post";
import Get from "./services/get";
import { BrowserRouter as Router , Routes, Route, Link, Button } from 'react-router-dom';

const year=new Date().getFullYear();

export default function App() {

  

  
  const [data, setData] = useState([]);
  const[loading,setLoading]=useState(true);
    

    useEffect(() => {
       
      setLoading(true);
        axios
          .get("https://interns-new.herokuapp.com/list")
          .then((res) => {
            // return console.log(res.data.result);
            const data=res.data.result;
            setLoading(false);
            console.log(data)
            setData(data);
          })
          .catch((err) => console.log(err));
      }, []);
 if(loading){
  return  <div><div class="gif"><img src="https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif"/></div>
  <p class="load">Please wait...While we load!!</p></div>
 }

  
return ( 
    <div className="App">
      <nav className="Nav">
      <header className="head">Entries of the Employees</header>
      
    {/* <Post/>  */}
    
    <div className='link'>
       <Link to="/post"><button className="pink">® Register yourself</button></Link>
      
       <Link to="/get"><button className="pink">☞ Employee List</button></Link>
       <Link to="/"><button className="pink">⌫ Back</button></Link>
       
      
       </div> 
    
       </nav>
       {/* <button className="reg" onClick={<Post/>}>Register yourself</button> */}
      
       <Routes>
        <Route path='/post' element={<Post/>}/>  
        <Route path='/Get'  element={<Get  data={data}   />}/>
        <Route path='/post' element={<App  />}/>
       </Routes>

       <div className="day-night-container">
        <div className="sun"></div>
        <div className="moon">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="stars">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>

        </div>
        <div className="water"></div>
       </div>
         
        
        
       


      
       <footer>Copyright©{year}</footer>
     
       
      </div>

      
      );
     
    
  
}   