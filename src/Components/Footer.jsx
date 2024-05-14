import React from "react";
import brand from "../images/Logo.png";
import stores from "../images/storess.png"
import "../Styles/Footer.scss"




function Footer() {
  return (
    <div className="footer">
      <div className="brand">
        <img src={brand} alt="brand" />

        <p>Save, spend, send and invest moneyacross borders.</p>

        <p>@2022 gpay.com all right reserved .</p>
      </div>

     

    
    </div>
  );
}

export default Footer;
