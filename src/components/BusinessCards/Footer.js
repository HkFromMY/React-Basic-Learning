import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function SocialIcons() {
    return (
        <div className="social-icons-bg">
            <div className="social-icons">
                <FontAwesomeIcon icon={brands('twitter-square')} size="3x" />
                <FontAwesomeIcon icon={brands('facebook-square')} size="3x" />
                <FontAwesomeIcon icon={brands('instagram-square')} size="3x" />
                <FontAwesomeIcon icon={brands('github-square')} size="3x" />
            </div>
        </div>
    );
}