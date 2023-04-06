import "./DailyBday.css"

const DailyBday = ({ villager }) => {
    return (
        <div className="bday-card">
            <img src={villager.image} alt={villager.name} />
            <h3>{villager.name}'s Birthday</h3>
        </div>
    )
}

export default DailyBday