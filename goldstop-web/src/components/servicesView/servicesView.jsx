import './servicesView.css'
import BeforeAfterSlider from './beforeAfterSlider/beforeAfterSlider';
import beforeImage from '../../assets/beforeImages/beforedefault.png';
import afterImage from '../../assets/afterImages/afterImage.png';

import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

import ReactCompareImage from 'react-compare-image';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel CSS
import { Carousel } from 'react-responsive-carousel';

import img1 from "../../assets/services_images/IMG_8972.png"
import img2 from "../../assets/services_images/IMG_8974.png"
import img3 from "../../assets/services_images/IMG_8975.png"

const ServicesView = () => {

  const inmain = false;

  return (
    <div className='servicesView'>
      {inmain ? 
      (
        <h2>Coming soon!</h2>
      ) : (
        <>
        <h2>Half-Sole Repair</h2>
         <Carousel>
            <div>
                <img src={img1} alt="Image 1" />
                <p className="legend">Image 1</p>
            </div>
            <div>
                <img src={img2} alt="Image 2" />
                <p className="legend">Image 2</p>
            </div>
            <div>
                <img src={img3} alt="Image 3" />
                <p className="legend">Image 3</p>
            </div>
        </Carousel>
        <h2>Full-sole Repair</h2>
         <Carousel>
            <div>
                <img src={img1} alt="Image 1" />
                <p className="legend">Image 1</p>
            </div>
            <div>
                <img src={img2} alt="Image 2" />
                <p className="legend">Image 2</p>
            </div>
            <div>
                <img src={img3} alt="Image 3" />
                <p className="legend">Image 3</p>
            </div>
        </Carousel>
        </>
      )}
    </div>
  )
}

export default ServicesView