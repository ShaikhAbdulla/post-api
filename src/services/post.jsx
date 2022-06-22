import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import "../ui/css/post.css";



// const refreshPage = ()=>{
//   window.location.reload();
// }

export default function Post() {

    const [loading, setLoading] = useState(false);
    const [profile_image, setProfileImage] = useState(null);
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [designation, setDesignation] = useState("");
    const [email, setEmail] = useState("");



    const postData = (e) => {
        const formData = new FormData()
        formData.append("name", name);
        formData.append("email", email);
        formData.append("mobile", mobile);
        formData.append("designation", designation);
        formData.append("profile_image", profile_image);

        e.preventDefault();
        setLoading(true);

        axios.post("https://interns-new.herokuapp.com/list", formData)
            .then(res => {
                setLoading(false);
                console.log("posting data", res);
            })
            .catch((err) => console.log(err));
    }






    // const arr = data.map((data, index) => {
    //   console.log(data)
    //   return (
    //     <ol>
    //       <li>{data.profile_image}</li>
    //       <li>{data.id}</li>
    //       <li>{data.name}</li>
    //       <li>{data.mobile}</li>
    //       <li>{data.designation}</li>
    //       <li>{data.email}</li>
    //       </ol>

    //   );
    // });

    return (
        <div className="App">




            <form className="form" >
                <div className="flex">

                    <div className="imgf flex">
                        <label className="entry">Add your image here : </label>
                        <input className="textf" type="file" onChange={(e) => setProfileImage(e.target.files[0])} />
                    </div>

                    <div className="flex align" >
                        <label className="entry">Name : </label>
                        <input className="textf" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="flex align">
                        <label className="entry">Mobile : </label>
                        <input className="textf" type="number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                    </div>
                    <div className="flex align">
                        <label className="entry">Designation : </label>
                        <input className="textf" type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} />
                    </div>
                    <div className="flex align">
                        <label className="entry">Email : </label>
                        <input className="textf" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <button className="btn" onClick={postData}>POST</button>
                </div>
            </form>



            {/* {arr} */}
            {/* <table>
        <th>id</th>
        <th>name</th>
        <th>mobile</th>
        <th>designation</th>
        <th>email</th>
        {arr}
      </table> */}

        </div>
    );
}