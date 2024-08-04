import React, { forwardRef } from 'react';
import './products.css';
import Slider from 'react-slick'; // Import react-slick

import shopNowButton from '../../../assets/products/shopnow.svg'; // Adjust the import path as needed
import image1 from '../../../assets/products/naotshoe.png'; // Adjust the import path as needed
import image2 from '../../../assets/products/naotshoe.png';
import image3 from '../../../assets/products/naotshoe.png';
import image4 from '../../../assets/products/naotshoe.png';
import image5 from '../../../assets/products/naotshoe.png';
import redPaintSplash from '../../../assets/products/redpaint.png';
import borderImage from '../../../assets/products/border.png'; // Adjust the import path as needed
import sparkleTopLeft from '../../../assets/products/sparkle-top-left.png'; // Adjust the import path as needed
import sparkleBottomRight from '../../../assets/products/sparkle-bottom-right.png'; // Adjust the import path as needed

const images = [image1, image2, image3, image4, image5];

const Products = forwardRef((props, ref) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div ref={ref} className='products'>
      <img src={borderImage} alt="Border" className='border-image' />
      <div className='contentbrand'>
        <div className='content'>
          <div className='left'>
            <h1 className='title'>Step into Style and Comfort</h1>
            <p className='description'>
              Discover our curated collection of top-brand shoes, sturdy laces, shoe care products, supportive insoles, and guaranteed for life socks. Whether you're looking for the latest trends or everyday essentials, we've got you covered. Shop now and elevate your footwear game!
            </p>
            <img src={shopNowButton} alt="Shop Now" className='shop-now-button' />
          </div>
          <div className='right'>
            <img src={redPaintSplash} alt="Red Paint Splash" className='red-paint-splash' />
            <div className='image-scroller'>
              <Slider {...settings}>
                {images.map((image, index) => (
                  <div key={index} className='image-slide'>
                    <img src={image} alt={`Shoe ${index + 1}`} className='scroller-image' />
                  </div>
                ))}
              </Slider>
              
              <img src={sparkleTopLeft} alt="Top Right Sparkle" className='sparkle sparkle-top-left' />
              <img src={sparkleBottomRight} alt="Bottom Left Sparkle" className='sparkle sparkle-bottom-left' />
                
            </div>
          </div>
        </div>
        
        
        <div className='brand-section'>
          <div className='brands-title'>Sporting brands from</div>
          <div className='brand-logos-container'>
            <div className='brand-logos'></div> 
          </div>
          <div className='more-text'>And more!</div>
          
        </div>
        
        
      </div>
    </div>
  );
});

export default Products;
