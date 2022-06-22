import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import "../ui/css/get.css";


 function Get({data}) {
    return <div className="grid-container"> 
    {data.map((data) => {
        console.log(data)
        return  <div className="card">
           
    
        <img src={`https://interns-new.herokuapp.com ${data.profile_imadge}`} className="circle-img"/>
        {/* <li  className="id">{data.id}</li> */}
        <ul>
        <li  className="name">{data.name}</li>
        </ul>
        <p  className="mobile">{data.mobile}</p>
        < p className="desig">{data.designation}</p>
        <p  className="email">{data.email}</p>
       
        </div>
        
        
    
     }    )}
    </div>
};

    export default Get;