import NavButton from "./NavButton"
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons"
import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons"
import { faGlasses } from "@fortawesome/free-solid-svg-icons"
import { faFish } from "@fortawesome/free-solid-svg-icons"
import { faTree} from "@fortawesome/free-solid-svg-icons"
import { faCakeCandles } from "@fortawesome/free-solid-svg-icons"
import { faHammer } from "@fortawesome/free-solid-svg-icons"

const logo = new URL('../assets/nookhub.png', import.meta.url).href


const Navigation = () => {

    return (
        <nav className="relative">
            <div className="hub-nav bottom-0 sm:top-0">
                <img className="hidden sm:flex" src={logo} alt="Animal Crossing New Horizons Logo" />
                <ul className="flex-row sm:flex-col">
                    <li className="hidden sm:flex"><NavButton icon={faHouseChimney} text="Home" /></li>
                    <li><NavButton icon={faCalendarCheck} text="Events" /></li>
                    <li><NavButton icon={faCakeCandles}  text="Birthday" /></li>
                    <li><NavButton icon={faGlasses} text="Fashion" /></li>
                    <li><NavButton icon={faFish} text="Critters" /></li>
                    <li><NavButton icon={faHammer} text="Recipes" /></li>
                    <li><NavButton icon={faTree}  text="Materials" /></li>
                </ul>
            </div>
        </nav>

    )
}
export default Navigation