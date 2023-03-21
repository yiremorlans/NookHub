import BdayTwin from './BdayTwin';

const logo = new URL('../assets/nook_hub.png', import.meta.url).href


const NookHub = () => {

    return (
        <div className="hub-container mt-14">
             <img className="w-9/12 sm:w-8/12 md:w-1/2 lg:w-4/12 inset-x-0 -top-20 -left-8 sm:-top-28" src={logo} alt="Animal Crossing New Horizons Logo" />
            {/* <BdayTwin /> */}
        </div>
    )
}
{/*-mt-28 sm:-mt-40 w-9/12 sm:8/12 md:w-1/2*/}
export default NookHub