import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavButton = ({ icon, text }) => {
    return (
        <button className="nav-button text-base md:text-lg xl:text-xl">
            <FontAwesomeIcon icon={icon} />{text}
        </button>
    )
}

export default NavButton