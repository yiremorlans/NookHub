import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import { faEarthAfrica } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faMap } from '@fortawesome/free-regular-svg-icons'
import React, { useState, useEffect } from 'react';

// const acLeaf = new URL('../assets/nook_leaf.png', import.meta.url).href



const Header = () => {

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
        <div className="header-container hidden md:flex">
            <header>
                <div className="heading">                    
                    <h1><FontAwesomeIcon icon={faMap} /> Daily Island Guide</h1>
                </div>
                <div className="visitor-tab">
                    <button onClick={() => setHemisphere(!hemisphere)}>
                        {hemisphere ? <FontAwesomeIcon icon={faEarthAmericas} /> : <FontAwesomeIcon icon={faEarthAfrica} />} 
                        {hemisphere ? ' North' : ' South'} hemisphere
                    </button>
                    <span><FontAwesomeIcon icon={faCalendarDays} /> {monthDate}</span>
                    <span><FontAwesomeIcon icon={faClock} /> {localTime}</span>
                </div>
            </header>
        </div>   
    )
}

export default Header