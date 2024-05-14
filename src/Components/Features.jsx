import React from "react";
import "../Styles/Features.scss";
import feature1 from "../images/feature-img1.png";
import feature2 from "../images/feature-img2.png";
import feature3 from "../images/feature-img3.png";

function Features() {
  return (
    <div className="features">
      <div className="first-feature">
        <div className="f-img">
          <img src={feature1} alt="feature img" />
        </div>

        <div className="f-text">
          <h1>
            Tuition Fee Around <span> </span> The World
          </h1>

          <p>
            We make payment of your foreign tuition fee stress free You can now
            make the payment at your finger tips with naira In any university
            around the world.
          </p>
        </div>
      </div>

      <div className="second-feature">
        <div className="f-text">
          <h1>Purchase Of Gift Card And Prepaid Card</h1>

          <p>
            You can now pay for all kind of gift card and prepaid debit card for
            international shopping with Naira , We can also assist for social
            media advert payment.
          </p>
        </div>

        <div className="f-img">
          <img src={feature2} alt="feature img" />
        </div>
      </div>

      <div className="thirt-feature">
        <div className="f-img">
          <img src={feature3} alt="feature img" />
        </div>

        <div className="f-text">
          <h1>Make Payment ToYour Vendors Or Merchant In USA, CANADA And UK</h1>

          <p>
            We can help you to make payment to your vendor and merchants in UK
            ,US , EUROPE & CAN by making payment with Naira.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
