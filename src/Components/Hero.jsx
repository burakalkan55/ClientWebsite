import React from "react";
import "../Styles/Hero.scss";
import heroimg from "../images/heroimg1.png";
import stores from "../images/playstore.png";
import stores1 from "../images/appstore.png";


function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>
          Tution Fee Around <span></span> The World
        </h1>
        <p>
          We can help you to pay for all kind of foreign conference fee,
          consular fee and admission fee at moderate rate.
        </p>

        <div className="hero-t-img">
            <a href=".." > <img   src={stores} alt="playstore"/></a>
            <a href=".." > <img src={stores1} alt="appstore" /></a> 
        </div>
      </div>

      <div className="hero-img">
        <img src={heroimg} alt="hero-img" />
      </div>
    </div>
  );
}

export default Hero;
