import BusinessHeader from './BusinessHeader';
import CardButtons from './CardButtons';
import BusinessDescription from './BusinessDescription';

export default function BusinessBackground() {
    return (
        <div className="business-bg">
            <BusinessHeader />
            <CardButtons />
            <BusinessDescription />
        </div>
    );
}