import React, { useState } from 'react';
import { Divider, Icon } from '@chakra-ui/react';
import { FaHome, FaMap, FaChartPie, FaChartLine, FaCog, FaUserCircle } from 'react-icons/fa';
import './searchBar.css';

const SearchBar = ({ onIconClick }) => {
  const [activeIcon, setActiveIcon] = useState(null); // State to keep track of the active icon

  const handleIconClick = (view, event) => {
    console.log("Icon clicked");
    onIconClick(view);
    const iconRect = event.target.getBoundingClientRect();
    console.log(iconRect);
    setActiveIcon(view); // Update the active icon
  };

  const isIconActive = (icon) => activeIcon === icon; // Function to check if the icon is active

  return (
    <div className='searchBar'>
      <div className='blurredCircle1'></div> {/* Blurred Circle */}
      <div className='blurredCircle2'></div> {/* Blurred Circle */}
      {/* Your other content here */}

      <div className='topIcon'>
        <img src="./ubcdark.png" alt="" />
      </div>

      <Divider className='separator' />

      <div className='navIcons'>
        <div className='navicon-container'>
        <Icon
             as={FaHome}
             onClick={(event) => handleIconClick('dashboard', event)}
             color={isIconActive('dashboard') ? 'black' : '#9C9FBB'} // Change color based on active state
              className={isIconActive('dashboard') ? 'icon' : ''}
            />
          <div className="circle" style={isIconActive('dashboard') ? {} : { display: 'none' }}></div>
        </div>
        
        <div className='navicon-container'>
        <Icon
             as={FaMap}
             onClick={(event) => handleIconClick('map', event)}
             color={isIconActive('inventory') ? 'black' : '#9C9FBB'} // Change color based on active state
              className={isIconActive('inventory') ? 'icon' : ''}
            />
          <div className="circle" style={isIconActive('inventory') ? {} : { display: 'none' }}></div>
        </div>
        
        <div className='navicon-container'>
            <Icon
              as={FaChartPie}
              onClick={(event) => handleIconClick('live', event)}
              color={isIconActive('sales') ? 'black' : '#9C9FBB'} // Change color based on active state
              className={isIconActive('sales') ? 'icon' : ''}
            />
          <div className="circle" style={isIconActive('sales') ? {} : { display: 'none' }}></div>
        </div>
        <div className='navicon-container'>
          <Icon
            as={FaChartLine}
            onClick={(event) => handleIconClick('analytics', event)}
            color={isIconActive('placeholder') ? 'black' : '#9C9FBB'}
            className={isIconActive('placeholder') ? 'icon' : ''}
          />
          <div className="circle" style={isIconActive('placeholder') ? {} : { display: 'none' }}></div>
        </div>



      </div>

      <div className='bottomIcons'>
        <Icon as={FaCog} />
        <Icon as={FaUserCircle} />
      </div>
    </div>
  );
};

export default SearchBar;
