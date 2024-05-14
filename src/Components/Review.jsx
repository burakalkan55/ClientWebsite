import React, { useState } from 'react';
import "../Styles/Review.scss";
import stars from "../images/RATING.png"
import reviewsData from "./data";
import { FaArrowsAltH } from "react-icons/fa";

function Review() {

    const[current,setCurrent]=useState(0)
    

    function handleClick(){
       if(current===0){
        setCurrent(4)
       }
       else{
        setCurrent(0)
       }
    }



  return (
    <div className='reviews'>

      <div className='r-title'>
        <h1>What Our Customer Says</h1>
      </div>

      <div className='r-people'>
      {reviewsData.slice(current, current+4).map((review, index) => ( // slice metodu kullanarak ilk dört veriyi seçiyoruz
          <div key={index} className='r-person'>

            <div className='stars'>
              <img src={stars} alt='stars' />
            </div>
            <p>{review.text}</p>

            <div className='profile'>
              <img className='pp' src={review.img} alt={review.name} />
              <h3>{review.name}</h3>
            </div>

          </div>
        ))}
      </div>

      <div className='r-buttons'>

        <button onClick={handleClick} > <FaArrowsAltH  className='icon' /></button>
      </div>

    </div>
  );
}

export default Review;
