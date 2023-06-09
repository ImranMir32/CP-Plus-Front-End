import React, { useEffect, useState, useContext } from "react";
import "../styles/style.css";
import "../styles/userProfile.css";
import axios from "axios";

import demo from "../assets/demo Image.jpg";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { GlobalStateContext } from "../Context/Global_Context";
// import { GlobalMethodsContext } from "../Context/GlobalMethodsContext";

const UserProfile = () => {
  const [imageURL, setImageURL] = useState(demo);
  // const [data,setData]=useState(demo)
  useEffect(() => {
    window.scrollTo(0, 0); // scroll to the top of the page
  }, []);
  const { user } = useContext(GlobalStateContext);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/image/${user.email}`)
      .then((res) => {
        console.log("data--->", res.data);
        const base64String = btoa(
          String.fromCharCode(...new Uint8Array(res.data.img.data.data))
        );
        console.log(res.data.img.data.data);

        setImageURL(`data:image/png;base64,${base64String}`);
      })
      .catch((err) => console.log(err, "it has an error"));
  }, [user.email]);

  // const { imgUpload } = useContext(GlobalMethodsContext);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setImageURL(e.target.result);
    };

    // const selectedFile=event.target.value;

    if (imageURL === demo) {
      const email = user.email;
      const formData = new FormData();
      formData.append("testImage", file);
      formData.append("email", email);
      try {
        const response = await axios.post(
          "http://localhost:4000/api/image/upload",
          formData
        );
        console.log(response.data);
        // setUploadStatus("Image uploaded successfully");
      } catch (error) {
        console.error(error);
        // setUploadStatus("Error uploading image");
      }
    } else {
      const email = user.email;
      const formData = new FormData();
      formData.append("testImage", file);
      try {
        const response = await axios.put(
          `http://localhost:4000/api/image/${email}`,
          formData
        );
        console.log(response.data);
        // setUploadStatus("Image uploaded successfully");
      } catch (error) {
        console.error(error);
        // setUploadStatus("Error uploading image");
      }
    }

    reader.readAsDataURL(file);
  };

  return (
    <>
      <Navbar />
      <main class="main">
        <div class="container">
          <div class="user_profile_box">
            <div className="user_profile_box_2">
              {console.log(user)}
              <h1>{user.name}</h1>
              <div className="profile-image-container">
                <img className="profile-image" src={imageURL} alt="Profile" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="image-upload"
                />
              </div>
            </div>
            <div className="user_profile_box_3">
              <div className="user_profile_box_3_info">
                <p>Name : {user.name}</p>
                <p>Hackerrank Id : {user.hackerrankId}</p>
                <p>Mobile number : {user.phone}</p>
                <p>Email : {user.email}</p>
                <p>
                  Total Quiz Point : {user.earn_score}/
                  {user.total_attempted_score}
                </p>
              </div>
              <div className="user_profile_button_div">
                <div className="user_profile_button">
                  <Link to="/update-profile">
                    {" "}
                    <button className="buttonD">Update Info</button>
                  </Link>
                </div>
                <div className="user_profile_button">
                  <Link to="/reset-password">
                    {" "}
                    <button className="buttonD">Reset Password</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default UserProfile;
