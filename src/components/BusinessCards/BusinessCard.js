import './BusinessCard.css';
import Footer from './Footer';
import BusinessBackground from './BusinessBackground';

export default function BusinessCard() {
    return (
        <div className="business-card">
            <BusinessBackground />
            <Footer />
        </div>
    );
}