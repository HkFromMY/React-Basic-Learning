import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import './TravelCard.css';

export default function TravelCard({ item }) {
    return (
        <div className="travel-card">
            <div class="travel--img-container">
                <img src={item.travel_img} alt="tourism spot" className="travel--img" />
            </div>
            <div className="travel--info">
                <FontAwesomeIcon icon={solid('location-dot')} style={{color: "#F55A5A"}} />
                <span className="travel--country">{ item.country }</span>
                <span><a href={item.link} className="travel--map-link" target="_blank" rel="noreferrer noopener">View on Google Maps</a></span>
                <h1 className="travel--spot">{ item.tourism_spot }</h1>
                <p className="travel--date">{ item.start_date } - { item.end_date }</p>
                <p className="travel--description">{ item.travel_description }</p>
            </div>
        </div>
    );
}