import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";


 function Get({data}) {
    return <div> 
    {data.map((data) => {
        console.log(data)
        return  <ol>
        <li>{data.profile_image}</li>
        <li>{data.id}</li>
        <li>{data.name}</li>
        <li>{data.mobile}</li>
        <li>{data.designation}</li>
        <li>{data.email}</li>
        </ol>
        
        
    
     }    )}
    </div>
};

    export default Get;