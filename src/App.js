import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
// import {Router, Link} from "react-router-dom" ;
import Post from "./Post";
import Get from "./Get";
import { BrowserRouter as Router , Routes, Route, Link } from 'react-router-dom';

export default function App() {

  const [data, setData] = useState([]);
    const [loading,setLoading]=useState(false);

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

  
return (
    <div className="App">
      <h1>Hello !!!</h1>
      <h2>GET-POST-API!</h2>
    {/* <Post/> */}
      {/* <Link to="/post">Click here!!</Link>
      <br/>
       <Link to="/">Click here!!</Link>
      <Routes>
        <Route path='/post' element={<Post/>}/>  */}
        {/* <Route path='/Get' element={<Get/>}/> */}
        {/* </Routes> */}
        <Get data={data}/>
       
       
      </div>

      
      );
     
    
  
}