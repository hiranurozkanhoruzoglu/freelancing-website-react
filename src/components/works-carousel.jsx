// import Carousel from "../components/Carousel";

function WorkCarousel(props) {
    return (
        <div className="header-design">
            <div className="hdr-design">
                <h2>The latest freelance work!</h2>
                <h3>Recently Posted <span className="active">Works</span></h3>
            </div>
            <div class="direction-btn">

                {/* <button onClick={sliderref?.slickPrev}>
                    <FaChevronLeft />
                </button>
                <button onClick={sliderRef?.slickNext}>
                    <FaChevronRight />
                </button>
                <Slider ref={setSliderRef} {...sliderSettings}>
                    {pricingCards.map((card, index) => (
                        <div key={index}>
                            <h2>{card.title}</h2>
                            <p>{card.description}</p>
                            <ul>
                                {card.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                            <button>Buy Now</button>
                        </div>
                    ))}

                </Slider> */}


            </div>
        </div>
    );
}

export default WorkCarousel;
