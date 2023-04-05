import Navigation from './components/Navigation';
import NookCard from './components/NookCard';

import { useState, useEffect } from 'react'
import { getEvents } from './api.js'

import isabelle from "./assets/isabelle.png";
import nookling from "./assets/nookling.png";
import player from "./assets/player.png";

import './App.css'

function App() {
  
  const charIcons = [isabelle, nookling, player];

  const [eventData, setEventData] = useState([])

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await getEvents()
      setEventData(response)
    }
    fetchEvents()
  }, [])

  return (
    <>
      <Navigation />
      <div className="card-container grid md:grid-cols-2 md:gap-7">
        <NookCard icon={charIcons[0]} props={eventData}/>
      </div>
      
    </>
  )
}

export default App
