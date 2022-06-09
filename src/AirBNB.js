import './AirBNBMain.css';
import Navbar from './components/AirBNB/Navbar';
import Hero from './components/AirBNB/Hero';
import CardList from './components/AirBNB/CardList';

export default function AirBNB() {
  return (
    <div className="main-page">
        <Navbar></Navbar>
        <Hero></Hero>
        <CardList></CardList>
    </div>
  )
}