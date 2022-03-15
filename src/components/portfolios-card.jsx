import Portfolio from './portfolios';
import card1 from "../images/Rectangle.png";
import card2 from "../images/bi_arrow-right.png";
import card3 from "../images/unsplash_505eectW54k.png";
import card4 from "../images/bi_arrow-right.png";
import card5 from "../images/unsplash_505eectW54k.png";
import card6 from "../images/bi_arrow-right.png";

function Cards(props) {
    return (
        <div>
                <Portfolio
                    image={card1}
                    alt="card 1"
                    title="Bunny Design"
                    text="UI/UX Designer"
                    images={card2}
                />
                <Portfolio
                    image={card3}
                    alt="card 2"
                    title="Bhaskar Riwari"
                    text="Graphic Designer"
                    images={card4}
                />
                <Portfolio
                    image={card5}
                    alt="card 3"
                    title="Aksara Joshi"
                    text="Graphic Designer"
                    images={card6}
                />
        </div>
    )
}

export default Cards;