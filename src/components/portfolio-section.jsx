import Portfolio from './portfolios';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from "react-slick";

import card1 from "../images/Design-8.png";
import card2 from "../images/bi_arrow-right.png";
import card3 from "../images/unsplash_505eectW54k.png";
import card4 from "../images/Design-1.png";
import card5 from "../images/Design-2.png";
import card6 from "../images/Design-3.png";
import card7 from "../images/Design-4.png";
import card8 from "../images/Design-5.png";
import card9 from "../images/Design-6.png";
import card10 from "../images/Design-7.png";

function PortfolioSection(props) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (
        <div className="container portfolios">
            <div className="title">
                <h4>Logos, websites, book covers & more!</h4>
                <h3>
                    Checkout The Best <span className="active">Portfolios</span> Here
                </h3>
            </div>
            <div className="cards-portfolio">
                <Slider {...settings}>
                    <Portfolio
                        image={card1}
                        alt="card 1"
                        title="Giorgio Armani"
                        text="UI/UX Designer"
                        images={card2}
                    />
                    <Portfolio
                        image={card3}
                        alt="card 2"
                        title="Bhaskar Riwari"
                        text="Design Thinking"
                        images={card2}
                    />
                    <Portfolio
                        image={card4}
                        alt="card 3"
                        title="Aksara Joshi"
                        text="Modern Art"
                        images={card2}
                    />
                    <Portfolio
                        image={card5}
                        alt="card 4"
                        title="Ralph Lauren"
                        text="Creativity Designer"
                        images={card2}
                    />
                    <Portfolio
                        image={card6}
                        alt="card 5"
                        title="Calvin Klein"
                        text="Freedom to Create"
                        images={card2}
                    />
                    <Portfolio
                        image={card7}
                        alt="card 6"
                        title="Coco Chanel"
                        text="Graphic Designer"
                        images={card2}
                    />
                    <Portfolio
                        image={card8}
                        alt="card 7"
                        title="Virgil Abloh"
                        text="Revolutionary Design"
                        images={card2}
                    />
                    <Portfolio
                        image={card9}
                        alt="card 8"
                        title="Virgil Abloh"
                        text="Off-White Designer"
                        images={card2}
                    />
                    <Portfolio
                        image={card10}
                        alt="card 9"
                        title="Donna Karan"
                        text="Color Designer"
                        images={card2}
                    />
                </Slider>
            </div>
        </div>
    )
}

export default PortfolioSection;