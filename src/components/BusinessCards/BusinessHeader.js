import PeopleImage from '../people.jpg';

export default function BusinessHeader() {
    return (
        <div>
            <img src={ PeopleImage } alt="Profile" className="business-img" />
            <div className="business-basic-info">
                <h2 className="business-name">Laura Smith</h2>
                <h4 className="business-job-title">Frontend Developer</h4>
                <p className="business-website">laurasmith.website</p>
            </div>
        </div>
    );
}