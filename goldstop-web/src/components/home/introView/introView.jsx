import './introView.css';
import { Box, Icon } from "@chakra-ui/react";
import { HiSparkles } from "react-icons/hi2";

import findusIcon from '../../../assets/findus.svg';
import seeOurServicesIcon from '../../../assets/seeourservices.svg';

const IntroView = ({ servicesRef }) => {
  const handleFindUsClick = () => {
    window.open('https://maps.google.com?q=Gold+Stop+Shoes+and+Repair', '_blank');
  };

  const handleServicesClick = () => {
    if (servicesRef && servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='introView'>
      <div className='icon' onClick={handleFindUsClick} style={{ cursor: 'pointer' }}>
        <img src={findusIcon} alt='Findus Icon' />
      </div>

      <div className='flavor-text'>
        <div className='left-text'>
          <p>WALK THE</p>
        </div>
        <div className='right-text'>
          <Box position="relative" display="inline-block">
            <Icon as={HiSparkles} color="#F3E2C6" position="absolute" top="-2vh" left="-9vh" />
            <Icon as={HiSparkles} color="#F3E2C6" position="absolute" bottom="-2vh" right="-8vh" />
            <p>GOLD STANDARD</p>
          </Box>
          <p className='paragraph'>
            We specialize in providing top-notch shoe repair services, ensuring your favorite pairs last longer and stay in pristine condition. Our extensive collection of footwear and accessories combines style, comfort, and durability, offering something for everyone.
          </p>
          <button className="services-button" onClick={handleServicesClick}>
            <img src={seeOurServicesIcon} alt="See our Services" style={{ cursor: 'pointer' }}  />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroView;
