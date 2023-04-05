import Navigation from './components/Navigation';
import NookCard from './components/NookCard';
import DailyBday from './components/DailyBday';

import { useState, useEffect } from 'react'
import { getEvents } from './api.js'
import { getBirthday } from './api.js'

import isabelle from "./assets/isabelle.png";
import nookling from "./assets/nookling.png";
import player from "./assets/player.png";

import './App.css'

function App() {
  
  const charIcons = [isabelle, nookling, player];
  const [eventData, setEventData] = useState([])
  const [bdayData, setBdayData] = useState({
    name: "Default",
    image: "",
  })

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
  }, [])
  return (
    <>
      <Navigation />
      <div className="card-container grid md:grid-cols-2 md:gap-7">
        <NookCard icon={charIcons[0]} props={eventData}/>
        <DailyBday villager={bdayData}/>
      </div>
      
    </>
  )
}

export default App
