import "./VisitorCard.css"

const VisitorCard = ({ icon }) => {
    return (
        <div className="visitor-card">
            <div className="visitor-info">
                <img src={icon} alt="AC New Horizons character" />
                <h3>Nook Hub Daily Update</h3>
            </div>
        </div>
    )
}

export default VisitorCard