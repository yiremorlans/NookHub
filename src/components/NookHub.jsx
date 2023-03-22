import Header from './Header';
import BdayTwin from './BdayTwin';

const logo = new URL('../assets/nook_hub.png', import.meta.url).href


const NookHub = () => {

    return (
        <>
            <Header />
        </>
        <div className="hub-container mt-14">
             <img className="w-5/12 md:w-4/12 inset-x-0 -top-12 -left-12 sm:-top-16 md:-top-18 lg:-top-20 xl:-top-22" src={logo} alt="Animal Crossing New Horizons Logo" />
            {/* <BdayTwin /> */}
        </div>
    )
}
{/*-mt-28 sm:-mt-40 w-9/12 sm:8/12 md:w-1/2*/}
export default NookHub