import React from "react";
import { ReactTyped } from 'react-typed';
import avatar from "../assets/avatar.jpeg";
import "./Home.css";

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-text">
        <h1>Hi There,<br /> I'm <span>Lakshya Garg</span></h1>
        <p>I am into <ReactTyped
  strings={["Web Development", "UI/UX Design", "Open Source"]}
  typeSpeed={60}
  backSpeed={40}
  loop
/>
</p>
        <button className="about-btn">About Me</button>
        <div className="social-icons">
          {["linkedin", "github", "twitter", "telegram", "instagram", "dev"].map((icon) => (
            <a href="#" key={icon}><i className={`fab fa-${icon}`}></i></a>
          ))}
        </div>
      </div>
      <div className="home-img">
        <img src={avatar} alt="avatar" />
      </div>
    </section>
  );
}

export default Home;
