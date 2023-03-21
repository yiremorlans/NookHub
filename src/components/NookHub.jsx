import BdayTwin from './BdayTwin';

const logo = new URL('../assets/nook_hub.png', import.meta.url).href


const NookHub = () => {

    return (
        <div className="hub-container">
             <img className="welcome-logo" src={logo} alt="Animal Crossing New Horizons Logo" />
            {/* <BdayTwin /> */}
        </div>
    )
}

export default NookHub