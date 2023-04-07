import {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'

const DateTime = () => {
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
        <>
            <span><FontAwesomeIcon icon={faCalendarDays} /> {monthDate}</span>
            <span><FontAwesomeIcon icon={faClock} /> {localTime}</span>
        </>
    )
}

export default DateTime