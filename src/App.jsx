import Navigation from './components/Navigation';
import NookCard from './components/NookCard';
import { useState } from 'react'
import './App.css'


function App() {

  return (
    <>
      <Navigation />
      <div className="card-container">
        <NookCard />
      </div>
    </>
  )
}

export default App
