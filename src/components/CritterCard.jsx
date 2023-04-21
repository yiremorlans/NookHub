const CritterCard = ({critterType, fauna}) => {
    return (        
        <div className="daily-critter">      
            <h4>{critterType}</h4>
            <ul>
                {fauna.map((critter, index) => <li key={index}><img src={critter.image_url} alt={critter.name} /></li>)}
            </ul>
        </div>
    )
}

export default CritterCard