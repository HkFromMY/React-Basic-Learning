// import star from '../../images/star.png';
import './Card.css';

export default function Card({item}) {
    let badgeText;
    if (item.openSpots === 0)
        badgeText = "sold out";
    else if (item.location === 'Online')
        badgeText = "online";
    
    return (
        <div className="card">
            { badgeText && <div className="card--badge">{ badgeText }</div>}
            <img src={item.card_img} alt="" className="card--img" />
            <div className="card--stats">
                <div className="card--rating">
                    <img src="./images/star.png" alt="star" className="card--star" />
                    <span>{ item.rating }</span>
                    <span>({ item.rating_count })</span>
                    <span> - { item.origin }</span>
                </div>
                <div className="card--description">
                    <p className="item--description">{ item.description }</p>
                    <p className="item--price"><strong>From ${ item.price } </strong>/ person</p>
                </div>
            </div>
        </div>
  )
}