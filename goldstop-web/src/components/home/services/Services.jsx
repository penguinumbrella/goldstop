import React, { forwardRef } from 'react';
import './services.css';
import ServiceBubble from './serviceBubble/serviceBubble'; // Adjust the import path as needed
import GoldLeaf from "./../../../assets/goldleaf.png"
import GoldLeaf2 from "./../../../assets/goldleaf2.png" // Import the second gold leaf image

// Import your service images
import rockClimbingShoesImg from '../../../assets/services/rockclimb.png'
import SeeMoreServicesPng from '../../../assets/seemoreservicesblack.png'; // Adjust the import path as needed
import arrow from "../../../assets/arrow.svg"

const Services = forwardRef((props, ref) => {
  return (
    <div ref={ref} className='services'>
      <img src={GoldLeaf} alt="Gold Leaf" className="gold-leaf" />
      <img src={GoldLeaf2} alt="Gold Leaf" className="gold-leaf-bottom" /> {/* Add the second gold leaf image */}
      <div className='clearfix'>
        <div className='service-intro'>
          <div className="service-heading">
            <img src={arrow} alt="Arrow" className="arrow-icon" />
            <h2>OUR SERVICES</h2>
          </div>
          <p>We pride ourselves on providing expert shoe repair services. Our skilled craftsmen use high-quality materials and techniques to restore your favorite footwear to its original glory.</p>
        </div>
      </div>
      <div className="service-table">
        <ServiceBubble
          title="ROCK CLIMBING SHOES"
          description="Expert repair and resole services to maintain the performance and durability of your climbing shoes."
          image={rockClimbingShoesImg}
        />
        <ServiceBubble
          title="Full Soles"
          description="Get new soles for your work boots, hiking boots, Birkenstock, or sandals"
          image={rockClimbingShoesImg}
        />
        <ServiceBubble
          title="Half Soles"
          description="Protect your leather soles with rubber, replace worn down soles, or add soles with more tread"
          image={rockClimbingShoesImg}
        />
        <ServiceBubble
          title="Heels"
          description="Replace your worn down heels"
          image={rockClimbingShoesImg}
        />
        <ServiceBubble
          title="Zipper Repair"
          description="We can fix the zippers on your boots, coats, bags, and luggage"
          image={rockClimbingShoesImg}
        />
        <ServiceBubble
          title="Shoe Cleaning & Shining"
          description="We can clean your sneakers and shine your dress shoes"
          image={rockClimbingShoesImg}
        />
        <ServiceBubble
          title="Shoe Stretching"
          description="Bunion punching, instep, and width stretching"
          image={rockClimbingShoesImg}
        />
        <ServiceBubble
          title="Sharpening"
          description="Knives and scissors"
          image={rockClimbingShoesImg}
        />
      </div>
      <div className="see-more">
        <img src={SeeMoreServicesPng} alt="See More Services" className="see-more-button" />
      </div>
    </div>
  );
});

export default Services;
