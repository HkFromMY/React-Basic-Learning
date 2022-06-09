import './TravelJournal.css';
import travelData from './travelData';
import Navbar from './Navbar';
import TravelCard from './TravelCard';

export default function TravelJournal() {
    return (
        <div className="travel-journal-page">
            <Navbar />
            <div className="cards-list">
                {
                    travelData.map((travel_data) => <TravelCard item={travel_data}/>)
                }
            </div>
        </div>
    );
}