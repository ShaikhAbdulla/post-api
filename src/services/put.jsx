import React, { useEffect, useState } from "react";
import Axios from "axios";


function Put({ fields }) {
    console.log(fields);
    const[header,setHeader]=useState("Profile Update")
    const [name, setName] = useState(fields.name);
    const [mobile, setMobile] = useState(fields.mobile);
    const [designation, setDesignation] = useState(fields.designation);
    const [email, setEmail] = useState(fields.email);
    const [profile_image, setProfile_Image] = useState(fields.profile_image);
    const [loading, setLoading] = useState(false);

    const id = fields.id;
    

    function handleUpdate(id, name, mobile, designation, email, profile_image) {
        const formData = new FormData();
        //         // setHeadingText("Your form got submitted!!");
        formData.append("id", id);
        formData.append("name", name);

        formData.append("mobile", mobile);
        formData.append("email", email);
        formData.append("designation", designation);
        formData.append("profile_image", profile_image);
        setHeader("Your Profile Got Updated!!")
        setLoading(false);

        Axios.put("https://interns-new.herokuapp.com/list/" + id, formData)
            .then(res => {

                console.log("posting data", res);
            })
            setLoading(true)
            .catch((err) => console.log(err));

    }

    return <form className="form " >
        <div className="flex">
        <h1>{header}</h1>

            <div className="imgf flex">


                <label>Add your image here:</label>
                <input className="textf" type="file" onChange={(e) => setProfile_Image(e.target.files[0])} placeholder="Confirm your image!" />
            </div>

            <div className="flex align" >
                {/* <label className="entry">Name : </label> */}
                <input className="textf" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" />
            </div>
            <div className="flex align">
                {/* <label className="entry">Mobile : </label> */}
                <input className="textf" type="number" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Your Contact No" />
            </div>
            <div className="flex align">
                {/* <label className="entry">Designation : </label> */}
                <input className="textf" type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} placeholder="Your Position" />
            </div>
            <div className="flex align">
                {/* <label className="entry">Email : </label> */}
                <input className="textf" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your EmailID" />
            </div>

            <button className="btn"
                onClick={() => handleUpdate(id, name, mobile, designation, email, profile_image)}
            >UPDATE</button>
        </div>
    </form>


}









export default Put;