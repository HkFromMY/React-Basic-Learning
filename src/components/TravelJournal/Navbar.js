import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <FontAwesomeIcon icon={solid('earth-americas')} size="2x" style={{color: "white"}} />
            <span>my travel journal.</span>
        </nav>
    );
}