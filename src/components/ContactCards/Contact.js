import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import './Contact.css';

export default function Contact({img_path, name, contact_no, email}) {
    return (
        <div className="contact-card">
            <img src={img_path} alt="cat" className="contact--image" />
            <h3 className="contact--name">{ name }</h3>
            <div className="info-group">
                <FontAwesomeIcon icon={solid('phone')} size="sm" />
                <p>{ contact_no }</p>
            </div>
            <div className="info-group">
                <FontAwesomeIcon icon={solid('envelope')} size="sm" />
                <p>{ email }</p>
            </div>
        </div>
    )
}