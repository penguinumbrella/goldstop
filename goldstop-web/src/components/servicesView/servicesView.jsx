import './servicesView.css'
import BeforeAfterSlider from './beforeAfterSlider/beforeAfterSlider';
import beforeImage from '../../assets/beforeImages/beforedefault.png';
import afterImage from '../../assets/afterImages/afterImage.png';

import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

import ReactCompareImage from 'react-compare-image';

const ServicesView = () => {

  return (
    <div className='servicesView'>
        <h1>Before and After Slider</h1>
        <ReactCompareImage leftImage={beforeImage} rightImage={afterImage} />
        /</div>
  )
}

export default ServicesView