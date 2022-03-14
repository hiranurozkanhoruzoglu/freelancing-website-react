import "../styles/design.css";

function Design(props) {
    return (
        <div className="card-design">
            <img src={props.image} alt={props.alt} />
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            <div className="card-bottom">
                <div className="price">
                    <span>Highest bid</span>
                    <span className="price-usd">{props.price}</span>
                </div>
                <div className="apply">
                    <a href="/">{props.link}</a>
                </div>
            </div>
        </div>
    );
}

export default Design;
