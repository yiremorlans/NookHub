import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import { faEarthAfrica } from '@fortawesome/free-solid-svg-icons'
import CritterCard from './CritterCard'
import DateTime from './DateTime'

import "./VisitorCard.css"

const VisitorCard = ({ icon, getFish, getBugs }) => {

    const [hemisphere, setHemisphere] = useState(true)
    const getMonth = new Date().getMonth() + 1;


    return (
        <div className="visitor-card">
            <div className="visitor-wrapper">
                <img src={icon} alt="AC New Horizons character" />
                <div className="visitor-title">
                    <h1>Nook Hub</h1>
                    <h2>Visitor Guide</h2>
                </div>
                <hr />
                <div className="visitor-info">
                    <button onClick={() => setHemisphere(!hemisphere)}>
                        {hemisphere ? <FontAwesomeIcon icon={faEarthAmericas} /> : <FontAwesomeIcon icon={faEarthAfrica} />} 
                        {hemisphere ? ' north' : ' south'} hemisphere
                    </button>
                    <DateTime/>
                </div>
            </div>
            <div className="daily-update">
                <h3>Daily Update</h3>
                <CritterCard critterType="Fish" fauna={hemisphere ?
                    getFish.filter(fish => fish.north.months_array.includes(getMonth)) :
                    getFish.filter(fish => fish.south.months_array.includes(getMonth))}/>
                <CritterCard critterType="Bugs" fauna={hemisphere ? 
                    getBugs.filter(bug => bug.north.months_array.includes(getMonth)) : 
                    getBugs.filter(bug => bug.south.months_array.includes(getMonth))} />
            </div>
        </div>
    )
}

export default VisitorCard