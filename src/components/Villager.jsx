const Villager = ({ villagerState }) => {

    console.log(villagerState)
    return (
        <div className="bday-card">
            <h2>{villagerState.name}, the <span>{villagerState.personality}</span> <span>{villagerState.species}</span></h2>
            <p>"{villagerState.quote} {villagerState.phrase}"</p>
            <img src={villagerState.image_url} alt={villagerState.name} />
        </div>
    )
}

export default Villager