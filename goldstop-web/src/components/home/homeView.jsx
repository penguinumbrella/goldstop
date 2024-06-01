import './homeView.css'
import Services from './services/Services'
import Location from './location/Location'

const HomeView = ({onTabClick}) => {
  return (
    <div className='homeView'>
        <img src="./goldstopshoeshop.png" alt="" />
        <Services onTabClick={onTabClick}/>
        <Location/>
    </div>
  )
}

export default HomeView