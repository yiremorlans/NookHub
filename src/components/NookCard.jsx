import "./NookCard.css"

const NookCard = ({icon, props }) => {

    console.log(icon, props)
    return (
        <div className="nook-card">
            <div className="feat-title">
                <img src={icon} alt="AC New Horizons character" />
                {props.length === 0 ? <h3>No Events today</h3> : 
                // map through props to display each event
                props.map((event, index) => {
                    return (
                    <>
                        <h3 key={index}>{event.event}</h3>
                        <a href={event.url}>Check Event Details</a>
                    </>
                    )
                })}
            </div>
        </div>
    )
}

export default NookCard