import React, { forwardRef, useEffect, useRef } from 'react';
import Masonry from 'masonry-layout';
import './reviews.css';
import fullStar from '../../../assets/reviews/full-star.png'; // Full star image
import emptyStar from '../../../assets/reviews/empty-star.png'; // Empty star image
import ReviewBubble from './reviewBubble/reviewBubble';

import pfp1 from '../../../assets/reviews/profilepics/pfp1.png'; // Ensure the correct path
import pfp2 from '../../../assets/reviews/profilepics/pfp2.png'; // Ensure the correct path
import pfp3 from '../../../assets/reviews/profilepics/pfp3.png'; // Ensure the correct path
import pfp4 from '../../../assets/reviews/profilepics/pfp4.png'; // Ensure the correct path
import pfp5 from '../../../assets/reviews/profilepics/pfp5.png'; // Ensure the correct path
import pfp6 from '../../../assets/reviews/profilepics/pfp6.png'; // Ensure the correct path
import pfp7 from '../../../assets/reviews/profilepics/pfp7.png'; // Ensure the correct path
import pfp8 from '../../../assets/reviews/profilepics/pfp8.png'; // Ensure the correct path

import reviewbutton from "../../../assets/reviews/writereviewbutton.svg";

const Reviews = forwardRef((props, ref) => {
  const masonryRef = useRef(null);

  const rating = 4.5;
  const fullStars = Math.floor(rating);
  const partialStar = rating % 1;
  const totalStars = 5;

  useEffect(() => {
    if (masonryRef.current) {
      new Masonry(masonryRef.current, {
        itemSelector: '.review-bubble',
        columnWidth: '.review-bubble',
        percentPosition: true
      });
    }
  }, []);

  return (
    <div ref={ref} className='reviews-container'>
      <div className='border-wrapper'>
        <div className='rating-container'>
          <h2>Testimonials</h2>
          <h3>Customer Reviews</h3>
          <div className='rating'>
            <div className='stars'>
              {Array(fullStars).fill(null).map((_, index) => (
                <img key={index} src={fullStar} alt='Full Star' className='star' />
              ))}
              {partialStar > 0 && (
                <div className='star-container'>
                  <img src={emptyStar} alt='Empty Star' className='star' />
                  <img src={fullStar} alt='Partial Star' className='star' style={{ clipPath: `inset(0 ${100 - partialStar * 100}% 0 0)` }} />
                </div>
              )}
              {Array(totalStars - fullStars - (partialStar > 0 ? 1 : 0)).fill(null).map((_, index) => (
                <img key={index} src={emptyStar} alt='Empty Star' className='star' />
              ))}
            </div>
            <div className='rating-details'>
              <span className='rating-score'>{rating}</span>
              <div className='rating-text'>
                <span>out of 5 stars</span>
                <span>on Google Reviews</span>
              </div>
              <a href="https://www.google.com/search?q=gold+stop+shoes+and+repair&rlz=1C1VDKB_enUS1021US1021&oq=gold+stop&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIGCAEQRRg7MgYIAhBFGDkyBggDEEUYQDIVCAQQLhgnGK8BGMcBGIAEGIoFGI4FMgcIBRAAGIAEMgYIBhBFGD0yBggHEEUYPKgCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x548673038c93a477:0xa685fd3f380a4479,3,,,," className='write-review-button' target="_blank" rel="noopener noreferrer">
                Write a Review
              </a>
            </div>
          </div>
        </div>
      </div>

      <div ref={masonryRef} className='masonry'>
        <ReviewBubble 
          profilePicture={pfp1}
          customerName="Simon Krol"
          rating={5}
          reviewText="Excellent, super nice people, high quality workmanship. Will keep coming back!"
        />
        <ReviewBubble 
          profilePicture={pfp2}
          customerName="ALSCHWAYZ SCHWAYZ"
          rating={5}
          reviewText="These wonderful people fixed my Supra Skytop sneakers (the best sneaker company that was ahead of the times and are not making shoes anymore). They gave my Supras a second life! Fantastic job and excellent customer service. Would def recommend! 10/10. Top shelf business. Thank you very much!"
        />
        <ReviewBubble 
          profilePicture={pfp3}
          customerName="Raquel Hirsch"
          rating={5}
          reviewText="I brought in an expensive purse that I had not taken good care of and they were able to bring it back to its original glorious form. Thank you!!"
        />
        <ReviewBubble 
          profilePicture={pfp4}
          customerName="Deanna Richardson"
          rating={5}
          reviewText="Highly recommend. Not only did they beautifully restore some vintage shoes and boots like new, they went out of their way to source some leather that they didn’t carry in store to repair a keepsake piece of jewelry / necklace for me and it’s brand new again. Speedy, fair priced and very good quality by Geraldine and team. Thank you!"
        />
        <ReviewBubble 
          profilePicture={pfp5}
          customerName="C Dickson"
          rating={5}
          reviewText="I cannot get over how great my shoes look! This place is an absolute gem! I have a pair of leather Frye boots that I have worn to death because they are my favorites! I was literally going to toss them in the bin as they had 4 holes in the leather and were pulling apart from the sole after years of wear. As a last resort I thought I would give these guys a try! I'm so glad I did. The service was exceptional, the leather work amazing and the price reasonable. I highly recommend!"
        />
        <ReviewBubble 
          profilePicture={pfp6}
          customerName="Sarah Howard"
          rating={5}
          reviewText="Amazing service! Fixed my favorite boots which I thought were a lost cause but good as new. Couldn’t be happier with the results."
        />
        <ReviewBubble 
          profilePicture={pfp7}
          customerName="James Kirwin"
          rating={5}
          reviewText="Wonderful people and fine craftsmanship!"
        />
        <ReviewBubble 
          profilePicture={pfp8}
          customerName="Matt Fentiman"
          rating={5}
          reviewText="I had a soft leather briefcase with sentimental value refurbished here. The work was done with care, creativity and thoughtfulness. The staff were friendly and professional. I would come back in a heartbeat."
        />
        {/* Add more ReviewBubble components as needed */}
      </div>
    </div>
  );
});

export default Reviews;
