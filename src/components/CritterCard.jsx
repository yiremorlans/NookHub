const CritterCard = ({critterType, hemisphere, northFauna, southFauna}) => {
    return (        
        <div className="daily-critter">      
            <h4>{critterType}</h4>
            <ul>
                {hemisphere ? northFauna.map((critter, index) => <li key={index}><img src={critter.image_url} alt={critter.name} /></li>) : 
                southFauna.map((critter, index) => <li key={index}><img src={critter.image_url} alt={critter.name} /></li>)}
            </ul>
        </div>
    )
}

export default CritterCard