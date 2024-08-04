import React, { forwardRef } from 'react';
import './services.css';
import ServiceBubble from './serviceBubble/serviceBubble'; // Adjust the import path as needed
import GoldLeaf from "./../../../assets/goldleaf.png";
import GoldLeaf2 from "./../../../assets/goldleaf2.png"; // Import the second gold leaf image
import rose1 from './../../../assets/rose1.png'; // Import the rose image
import rose2 from './../../../assets/rose2.png'; // Import the rose image
import rose3 from './../../../assets/rose3.png'; // Import the rose image

// Import your service images
import rockClimbingShoesImg from '../../../assets/services/rockclimb.png';
import bag from '../../../assets/services/bag.svg';
import fullsole from '../../../assets/services/fullsole.svg';
import knife from '../../../assets/services/knifesharpen.svg';
import shoepolish from '../../../assets/services/shoepolish.svg';
import stitch from '../../../assets/services/stitch.svg';
import zipper from '../../../assets/services/zipper.svg';
import SeeMoreServicesPng from '../../../assets/seemoreservicesblack.png'; // Adjust the import path as needed
import arrow from "../../../assets/arrow.svg";

const Services = forwardRef((props, ref) => {
  return (
    <div ref={ref} className='services'>
      {/* Add rose images */}
      <img src={rose1} alt="Rose" className="rose-top-left" />
      <img src={rose2} alt="Rose" className="rose-middle-right" />
      <img src={rose3} alt="Rose" className="rose-bottom-left" />
      
      <div className='wave'>
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
            title="FULL SOLES"
            description="Get new soles for your work boots, hiking boots, Birkenstock, or sandals"
            image={fullsole}
          />
          <ServiceBubble
            title="HALF SOLES"
            description="Protect your leather soles with rubber, replace worn down soles, or add soles with more tread"
            image={fullsole}
          />
          <ServiceBubble
            title="HEELS"
            description="Replace your worn down heels"
            image={fullsole}
          />
          
          <ServiceBubble
            title="ZIPPER REPAIR"
            description="We can fix the zippers on your boots, coats, bags, and luggage"
            image={zipper}
          />
          <ServiceBubble
            title="STITCHING"
            description="High-quality stitch repair services to mend and reinforce your items."
            image={stitch}
          />
          <ServiceBubble
            title="SHOE CLEANING & POLISHING"
            description="We can clean your sneakers and shine your dress shoes"
            image={shoepolish}
          />
          <ServiceBubble
            title="SHOE STRETCHING"
            description="Bunion punching, instep, and width stretching"
            image={fullsole}
          />
          <ServiceBubble
            title="KNIFE SHARPENING"
            description="Knives and scissors"
            image={knife}
          />
          
        </div>
        <div className="see-more">
          <img src={SeeMoreServicesPng} alt="See More Services" className="see-more-button" />
        </div>
      </div>
    </div>
  );
});

export default Services;
