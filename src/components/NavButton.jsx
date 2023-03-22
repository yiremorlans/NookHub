import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavButton = ({ icon, text }) => {
    return (
        <button className="nav-button text-lg">
            <FontAwesomeIcon icon={icon} />{text}
        </button>
    )
}

export default NavButton