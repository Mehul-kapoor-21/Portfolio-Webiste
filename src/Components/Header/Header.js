import React from "react";
import Typical from "react-typical";
import "./Header.css";
import profileImg from "../../assets/profile.png";
const Header = () => {
  return (
    <div className="header-container" id="about">
      {/* header content */}
      <div className="header-content">
        <h1>Hey! I Am</h1>
        <h2 className="fullname">Mehul Kapoor</h2>
        <h2>
          I'm a {""}
          <Typical
            steps={[
              "Frontend Developer ❤️",
              2000,
              "Full Stack Developer 🚀",
              2000,
              "Problem Solver 🧑‍💻",
              2000,
            ]}
            loop={Infinity}
            wrapper="b"
          />
        </h2>
        <p>
          A passionate Frontend Developer with a love for creating immersive and
          user-friendly web experiences.
        </p>
        {/* pament links */}
        <div className="header-payment-container">
          <a
            href="https://www.linkedin.com/in/mehul-kapoor-ba1956226/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/Mehul-kapoor-21"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-github"></i>
          </a>
          <a
            href="https://instagram.com/__mehulkapoor__?igshid=MzNlNGNkZWQ4Mg=="
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
      {/* Image container */}
      <div className="profile-img-container">
        <img src={profileImg} alt=""></img>
        <div className="circle-1"></div>
        <div className="circle-2"></div>
      </div>
    </div>
  );
};

export default Header;
