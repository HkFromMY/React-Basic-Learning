import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function CardButtons() {
    return (
        <>
            <div className="business-buttons">
                <button id="email-button">
                    <FontAwesomeIcon icon={solid('envelope')} size="lg" />
                    Email
                </button>
                <button id="linkedin-button">
                    <FontAwesomeIcon icon={brands('linkedin')} size="lg" /> 
                    LinkedIn
                </button>
            </div>
        </>
    );
}