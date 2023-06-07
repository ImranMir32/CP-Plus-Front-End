import React, { useEffect, useState } from "react";
import "../styles/style.css";
import "../styles/userProfile.css";

import olin from "../assets/olin.jpeg";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserProfile = () => {
  const [imageURL, setImageURL] = useState(olin);
  useEffect(() => {
    window.scrollTo(0, 0); // scroll to the top of the page
  }, []);
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setImageURL(e.target.result);
    };

    reader.readAsDataURL(file);
  };
  return (
    <>
      <Navbar />
      <main class="main">
        <div class="container">
          <div class="user_profile_box">
            <div className="user_profile_box_2">
              <h1>Olin</h1>
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
                <p>Name: Olin Akon Chumky</p>
                <p>Hackerrank Id : Olin32</p>
                <p>Mobile number : 01912345678</p>
                <p>Email : Olin32@gmail.com</p>
                <p>Total Quiz Point : 4/5</p>
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
