import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Location from './components/location/Location';
import Services from './components/services/Services';

function App() {
  return (
    <div className="container">
      <Navbar/>
      <img src="./goldstopshoeshop.png" alt="" />
      <Services/>
      <Location/>
    </div>
  );
}

export default App;
