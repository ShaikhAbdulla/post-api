import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import "../ui/css/get.css";
import Put from "./put.jsx"




function Get({ data, setLoading }) {
// const [loading,setLoading]=useState({imageStatus:"loading", error: true})
// const [loading1,setLoading1]=useState(true)
const [fields,setFields]=useState([])
const [isEdit,setIsEdit]=useState(false)


function Edit(id){
const id2 =data.find((item) => item.id === id)
console.log(id2);
 setFields(id2)




}
const postDelete=(id,e)=>{
    e.preventDefault();
    // setLoading(true);
    axios.delete("https://interns-new.herokuapp.com/list/"+id
    // , formData
    )
            .then(res => {
                // setLoading(true);
                console.log("Deleted", res);
            })
            .catch((err) =>{
                // setLoading(false);
                console.log(err)}) ;
            





}
return isEdit ? <Put fields={fields}/> :
   <div className="grid-container">
        {data.map((data) => {
            {/* {console.log(data)}   */}


            const imgUrl = `https://interns-new.herokuapp.com${data.profile_image}`;
            const altImg = "https://assets-global.website-files.com/5ec7dad2e6f6295a9e2a23dd/6222481c0ad8761618b18e7e_profile-picture.jpg";
            const img = data.profile_image == null ? altImg : imgUrl;
        



            return <div className="card"
                key={data.id}>

                <img src={img} className="circle-img"
                    onError={(e) => e.target.src = altImg}
                />
                {/* <li  className="id">{data.id}</li> */}
                <ul>
                    <li className="name">{data.name}</li>
                </ul>
                <p className="mobile">{data.mobile}</p>
                <p className="desig">{data.designation}</p>
                <p className="email">{data.email}</p>
                <button className="del" onClick={(e) =>postDelete(data.id,e)}>Delete</button>
                <button className="del" onClick={()=>{
                    Edit(data.id)
                    console.log(data.id);
                    setIsEdit(true);
                }}>Edit</button>

            </div>



        })}
    </div>
};

export default Get;