const CritterCard = ({hemisphere, northFish, southFish}) => {
    return (        
        <div className="daily-critter">      
            <h4>Fish</h4>
            <ul>
            {hemisphere ? northFish.map((fish, index) => <li key={index}><img src={fish.image_url} alt={fish.name} /></li>) : southFish.map((fish, index) => <li key={index}><img src={fish.image_url} alt={fish.name} /></li>)}
            </ul>
        </div>
    )
}

export default CritterCard