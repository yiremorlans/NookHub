import "./VisitorCard.css"

const VisitorCard = ({ icon }) => {
    return (
        <div className="visitor-card">
            <div className="visitor-wrapper">
                <img src={icon} alt="AC New Horizons character" />
                <div className="visitor-title">
                    <h1>Nook Hub</h1>
                    <h3>Visitor Guide</h3>
                </div>
                <hr />
                <div className="visitor-info">
                    
                </div>
            </div>
        </div>
    )
}

export default VisitorCard