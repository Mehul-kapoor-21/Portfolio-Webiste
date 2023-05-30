import React from "react";
import "./Works.css";
import w1 from "../../assets/w1.png";
import w2 from "../../assets/w2.png";
import w3 from "../../assets/w3.png";
import w4 from "../../assets/w4.png";
import w5 from "../../assets/w5.png";

const Works = () => {
  return (
    <div className="works-container" id="works">
      <h1>
        My Recent <span>Works</span>
      </h1>
      <div className="works-list-container">
        <div className="works-item">
          <a
            href="https://ksclothingstore.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={w1} alt="work1"></img>
          </a>
          <h3 className="text">
            <a
              href="https://ksclothingstore.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Clothing Website
            </a>
          </h3>
        </div>
        <div className="works-item">
          <a
            href="https://newsalltime.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={w2} alt="work2" />
          </a>
          <h3 className="text">
            <a
              href="https://newsalltime.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              News Website
            </a>
          </h3>
        </div>
        <div className="works-item">
          <a
            href="https://weatheralltimes.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={w3} alt="work3" />
          </a>
          <h3 className="text">
            <a
              href="https://weatheralltimes.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Weather Website
            </a>
          </h3>
        </div>
        <div className="works-item">
          {/* <img src={w4}  alt='work4'/> */}
          <a
            href="https://mehulmoviesearch.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={w4} alt="work4" />
          </a>
          <h3 className="text">
            <a
              href="https://mehulmoviesearch.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Movie Search Website
            </a>
          </h3>
        </div>
        <div className="works-item">
        <a
            href="https://mehulkapoor.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={w5} alt="work5" />
          </a>
          <h3 className="text">
            <a
              href="https://mehulkapoor.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Portfolio Website
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Works;
