import Villager from "./Villager";

import { useRef } from "react";
import { useState } from "react";

const kkslider = new URL('/kkslider.png', import.meta.url).href

const BdayTwin = () => {

    const dateRef = useRef()
    // create a state object to hold villager data
    const [villager, setVillager] = useState({
        name: "K.K. Slider",
        personality: "",
        quote: "What's buzzin'?",
        phrase: "",
        species: "Dog",
        image_url: kkslider,
    })

    async function handleSubmit(){
        
        const selectedDate = (dateRef.current.value).split('-')
        
        const getMonth = selectedDate[1]
        const getDay = selectedDate[2]

        const apiUrl = `https://api.nookipedia.com/villagers?api_key=e4bd58d8-da13-4aa1-a208-dba6f628e4be&birthmonth=${getMonth}&birthday=${getDay}`

        const response = await fetch(apiUrl) 
        const data = await response.json()
        console.log(data)

        data.map(villager => {
            if (villager.appearances.includes("NH")) {
                setVillager({
                    name: villager.name,
                    personality: villager.personality,
                    quote: villager.quote,
                    phrase: villager.phrase,
                    species: villager.species,
                    image_url: villager.image_url,
                })
            }
        });        
    }

    return (
        <>
            <div className="b-twin">
                <h1>Your AC Birthday Twin</h1>
                <label htmlFor="birthday">Birthday:</label>

                <input type="date" name="birthday" ref={dateRef}></input>
                <button onClick={handleSubmit}>Submit</button>
            </div>
            <Villager villagerState={villager}/>
        </>

    )
}

export default BdayTwin