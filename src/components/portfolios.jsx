import "../styles/portfolios.css";

function Portfolios(props) {
    return (
        <div className="card-portfolios">
            <img src={props.image} alt={props.alt} />
            <div className="portfolio-wrapper">
                <div className="portfolio-text">
                    <span className="dsn">{props.title}</span>
                    <span>{props.text}</span>
                </div>
                <div className="portfolio-ok">
                    <img src={props.images} alt={props.alt} />
                </div>
            </div>
        </div>
    );
}

export default Portfolios;
