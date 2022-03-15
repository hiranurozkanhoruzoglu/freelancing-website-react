import "../styles/portfolios.css";

function Portfolios(props) {
    return (
        <div className="container portfolios">
            <div className="title">
                <h4>Logos, websites, book covers & more!</h4>
                <h3>
                    Checkout The Best <span className="active">Portfolios</span> Here
                </h3>
            </div>
            <div className="cards">
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
            </div>
        </div>
    );
}

export default Portfolios;
