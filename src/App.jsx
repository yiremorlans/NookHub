import Navigation from './components/Navigation';
import NookCard from './components/NookCard';
import DailyBday from './components/DailyBday';
import VisitorCard from './components/VisitorCard';

import { useState, useEffect } from 'react'
import { getEvents } from './api.js'
import { getBirthday } from './api.js'
import { getFish } from './api.js'
import { getBugs } from './api.js'


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
  const [northFish, setNorthFish] = useState([])
  const [southFish, setSouthFish] = useState([])
  const [northBugs, setNorthBugs] = useState([])
  const [southBugs, setSouthBugs] = useState([])

  const getMonth = new Date().getMonth() + 1;

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

    const fetchNorthFish = async () => {
      const response = await getFish()
      const fishArr = response.filter(fish => fish.north.months_array.includes(getMonth));
      setNorthFish(fishArr)
    }

    fetchNorthFish()
    const fetchSouthFish = async () => {
      const response = await getFish()
      const fishArr = response.filter(fish => fish.south.months_array.includes(getMonth));
      setSouthFish(fishArr)
    }
    fetchSouthFish()

    const fetchNorthBugs = async () => {
      const response = await getBugs()
      const bugsArr = response.filter(bug => bug.north.months_array.includes(getMonth));
      setNorthBugs(bugsArr)
    }
    fetchNorthBugs()

    const fetchSouthBugs = async () => {
      const response = await getBugs()
      const bugsArr = response.filter(bug => bug.south.months_array.includes(getMonth));
      setSouthBugs(bugsArr)
    }
    fetchSouthBugs()
  }, [])

  return (
    <>
      <Navigation />
      <div className="card-container grid md:grid-cols-2 md:gap-7">
        <NookCard icon={charIcons[0]} props={eventData}/>
        <VisitorCard icon={charIcons[2]} northFish={northFish} southFish={southFish} northBugs={northBugs} southBugs={southBugs}/>
        <DailyBday villager={bdayData}/>
      </div>
      
    </>
  )
}

export default App
