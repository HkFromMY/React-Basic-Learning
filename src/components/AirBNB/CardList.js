import Card from './Card';
import './CardList.css';

export default function CardList() {
    // if ur images is in src folder then you might need to use the following method:
    /*
        parameter of require function is the file path to the image location
        {
            id: 1,
            card_img: require('../../images/swimmer.png'),
            status: 'sold out',
            rating: '5.0',
            rating_count: 6,
            origin: 'USA',
            description: 'Life lessons with Katie Zaferes',
            price: 136
        }
    */
    const items = [
        {
            id: 1,
            card_img: './images/swimmer.png',
            status: 'sold out',
            rating: '5.0',
            rating_count: 6,
            origin: 'USA',
            description: 'Life lessons with Katie Zaferes',
            location: 'Online',
            price: 136,
            openSpots: 0
        }, 
        {
            id: 2,
            card_img: './images/wedding-photo.png',
            status: 'online',
            rating: '5.0',
            rating_count: 30,
            origin: 'USA',
            description: 'Learn wedding photography',
            location: 'Somewhere in earth',
            price: 125,
            openSpots: 12
        }, 
        {
            id: 3,
            card_img: './images/mountain-bike.png',
            status: 'sold out',
            rating: '4.8',
            rating_count: 2,
            origin: 'USA',
            description: 'Group Mountain Biking',
            location: 'Somewhere in earth',
            price: 50,
            openSpots: 24
        },
    ];

    // if arrow function don't have curly braces (which indicates not a block body) then return keyword will be added implicitly
    // otherwise the developer must explicitly add return keyword
    return (
        <div className="card-list" style={{paddingLeft: "20px"}}>
            {
                items.map((item) => <Card item={item} key={item.id}/> )
            }
        </div>
    );
}