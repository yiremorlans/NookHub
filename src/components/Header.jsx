const logo = new URL('/ac_logo.png', import.meta.url).href


const Header = () => {
    return (
        <div>
            <img className="welcome-logo" src={logo} alt="Animal Crossing New Horizons Logo" />
        </div>    
    )
}

export default Header