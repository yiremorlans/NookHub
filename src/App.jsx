import Navigation from './components/Navigation';
import NookCard from './components/NookCard';
import DailyBday from './components/DailyBday';
import VisitorCard from './components/VisitorCard';

import { useState, useEffect } from 'react'
import { getEvents } from './api.js'
import { getBirthday } from './api.js'
import { getFish } from './api.js'
import { getBugs } from './api.js'
import { getSeaCritters } from './api.js'


import isabelle from "./assets/isabelle.png";
import nookling from "./assets/nookling.png";
import player from "./assets/player.png";

function App() {
  
  const charIcons = [isabelle, nookling, player];
  const [eventData, setEventData] = useState([])
  const [bdayData, setBdayData] = useState({
    name: "Default",
    image: "",
  })
  const [currentFish, setCurrentFish] = useState([])
  const [currentBugs, setCurrentBugs] = useState([])
  const [currentSeaCritters, setCurrentSeaCritters] = useState([])

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await getEvents()
      setEventData(response)
    }
    fetchEvents()

    const fetchBday = async () => {
      const response = await getBirthday()
      response.map(villager => {
        if (villager.appearances.includes("NH")){
          setBdayData({
            name: villager.name,
            image: villager.image_url
         })
        }
     })
    }
    fetchBday()

    const fetchFish = async () => {
      const response = await getFish()
      setCurrentFish(response)
    }
    fetchFish()

    const fetchBugs = async () => {
      const response = await getBugs()
      setCurrentBugs(response)
    }
    fetchBugs()

    const fetchSeaCritters = async () => {
      const response = await getSeaCritters()
      setCurrentSeaCritters(response)
    }
    fetchSeaCritters()
  }, [])

  return (
    <>
      <Navigation />
      <div className="card-container flex flex-wrap h-full">
        <div className="flex flex-col w-full md:w-1/2 gap-7 p-4">
          <NookCard className="w-96" icon={charIcons[0]} props={eventData}/>
          <DailyBday villager={bdayData}/>
        </div>
        <div className="flex flex-col w-full md:w-1/2 gap-7 p-4">
          <VisitorCard icon={charIcons[2]} getFish={currentFish} getBugs={currentBugs} getSeaCritters={currentSeaCritters}/>
        </div>
      </div>
    </>
  )
}

export default App