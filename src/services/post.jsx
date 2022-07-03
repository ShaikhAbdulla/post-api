import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import "../ui/css/post.css";
import { render } from "@testing-library/react";



// const refreshPage = ()=>{
//   window.location.reload();

// }


export default function Post() {
    //    PREVIEW IMAGE IN THE FORM 
    const ImageUploader = () => { }
    const [files, setFiles] = useState([]);
    const [images, setImages] = useState([]);
    

    

    const handleImageChange = e => {
        console.log("handleImageChange");
        // FileList to Array
        let fileList = Array.from(e.target.files);
        console.log("fileList", fileList);
        // File Reader for Each file and and update state arrays
        fileList.forEach((files, i) => {
            let reader = new FileReader();

            reader.onloadend = () => {
                setFiles(prevFiles => [...prevFiles, files]);
                setImages(prevImages => [...prevImages, reader.result]);
            };

            reader.readAsDataURL(files);
        });
    }


    const [headingText, setHeadingText] = useState("Welcome to the registration form!")
    // AXIOS.POST METHOD STARTED
    const [loading, setLoading] = useState(false);
    const [profile_image, setProfile_Image] = useState(null);
    // const [img,setImg]=useState(setProfileImage)

    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [designation, setDesignation] = useState("");
    const [email, setEmail] = useState("");
    const [vname, setVName] = useState("");
    const [vmobile, setVMobile] = useState("");
    const [vdesignation, setVDesignation] = useState("");
    const [vemail, setVEmail] = useState("");
    



    const postData = (e) => {
        const formData = new FormData()
        setHeadingText("Your Profile has been created!!");
        setVName("Name required")
        setVMobile("Name required")
        setVDesignation("Name required")
        setVEmail("Name required")
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
            setLoading(true)
            .catch((err) => console.log(err));
}
if(loading){
    return  <div><div class="gif"><img src="https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif"/></div>
    <p class="load">Please wait....your profile is being Created!!</p></div>
   }


   const validate= {name}===""? vname: "" ;
   const validate1= {mobile}===""? vmobile: "" ;
   const validate2= {designation}===""? vdesignation: "";
   const validate3= {email}===""? vemail:"";


    // function onClick(){
    //     setHeadingText("Your form got submitted!!");
    // }

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


    // const {profileImg}=this.state;
    return (

        <div className="App">
            <p className="submitted">{headingText}</p>




            <form className="form " >
                {/* <div className="flex"> */}

                    <div className="imgf flex">


                        {/* <label className="entry">Add your image here : </label> */}
                         <input
                            className="upload"
                            type="file"
                            onChange={handleImageChange}
                            multiple
                        /> 
                        <div className="img-holder">


                            {images.map((images, i) => {
                                return (
                                    <div key={i}>
                                        <img type="url" style={{ width: "80%" }} src={images} alt="a" />
                                    </div>
                                );
                            })}



                        </div>
                        <p>Confirm your image!</p>
                        <input className="textf upload" type="file" onChange={(e) => setProfile_Image(e.target.files[0])
                         } placeholder="Confirm your image!" />
                        {/* <div className="img-holder"> */}


                            {/* {images.map((images, i) => {
                                return (
                                    <div key={i}>
                                        <img type="url" style={{ width: "80%" }} src={images} alt="a" />
                                    </div>
                                );
                            })} */}



                        {/* </div> */}
                    </div>

                    <div className="flex align" >
                        {/* <label className="entry">Name : </label> */}
                        <input className="textf" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" />
                        {/* <p>{validate}</p> */}

                       
                    </div>
                    <div className="flex align">
                        {/* <label className="entry">Mobile : </label> */}
                        <input className="textf" type="number" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Your Contact No" />
                        {/* <p>{validate1}</p> */}
                    </div>
                    <div className="flex align">
                        {/* <label className="entry">Designation : </label> */}
                        <input className="textf" type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} placeholder="Your Position" />
                        {/* <p>{validate2}</p> */}
                    </div>
                    <div className="flex align">
                        {/* <label className="entry">Email : </label> */}
                        <input className="textf" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your EmailID" />
                        {/* <p>{validate3}</p> */}
                    </div>

                    <button className="btn" onClick= {postData}>SUBMIT</button>
                {/* </div> */}
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