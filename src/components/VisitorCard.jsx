import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import { faEarthAfrica } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import React, { useState, useEffect } from 'react';

import "./VisitorCard.css"

const VisitorCard = ({ icon }) => {

    const [hemisphere, setHemisphere] = useState(true)
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000);
        return () => clearInterval(timer);
    }, [date]);

  const options = {
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  };

  const formattedDate = date.toLocaleString(undefined, options);
  const monthDate = formattedDate.split(' ').slice(0, 2).join(' ');
  const localTime = formattedDate.split(' ').slice(3).join(' ');
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
                        {hemisphere ? ' North' : ' South'} hemisphere
                    </button>
                    <span><FontAwesomeIcon icon={faCalendarDays} /> {monthDate}</span>
                </div>
            </div>
            <div className="daily-update">
                <h3>Daily Update</h3>
                <span><FontAwesomeIcon icon={faClock} /> {localTime}</span>
            </div>
        </div>
    )
}

export default VisitorCard