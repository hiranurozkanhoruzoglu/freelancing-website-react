import "../styles/subcription.css";

function Subcription(props) {
    return (
        <div className="subcription">
        <div className="container sub">
            <div className="title-sub">
                <h2>Newsletter Subscription</h2>
                <h3>Subscription to our newsletter to get new freelance work and projects</h3>
            </div>
            <div className="container mail-sub">
                <input type="email" placeholder="Enter your email address" name="" id="" />
                <button>Subscribe</button>
            </div>
        </div>
    </div>
    )
}

export default Subcription;