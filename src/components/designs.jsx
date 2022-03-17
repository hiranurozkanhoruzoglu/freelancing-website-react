import { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Design from './design';
import design1 from "../images/Material.png";
import design2 from "../images/Account.png";
import design3 from "../images/CanvaApp.png";
import design4 from "../images/designLogo5.png";
import design5 from "../images/designLogo-6.png";
import design6 from "../images/webes.png";


function Designs(props) {
    const [sliderRef, setSliderRef] = useState(null)

    const sliderSettings = {
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
    }

    return (
        <div className='container' id='design'>
            <div className="header-design">
                <div className="hdr-design">
                    <h2>The latest freelance work!</h2>
                    <h3>Recently Posted <span className="active">Works</span></h3>
                </div>
                <div className="direction-btn">
                    <button className='btn-white' onClick={sliderRef?.slickPrev}>
                        <FaChevronLeft className='left-btn' />
                    </button>
                    <button className='btn-blue' onClick={sliderRef?.slickNext}>
                        <FaChevronRight className='right-btn' />
                    </button>
                </div>
            </div>
            <div className="cards-design">
                <Slider ref={setSliderRef} {...sliderSettings}>
                    <Design
                        image={design1}
                        alt="design 1"
                        title="Logo Design"
                        text="Need a professional logo with wriying underneath for our jewellery company"
                        price="$ 500"
                        link="Apply now"

                    />
                    <Design
                        image={design2}
                        alt="design 2"
                        title="Graphic Design"
                        text="We need a graphic designer with UI/UX skills for our Furniture company"
                        price="$ 500"
                        link="Apply now"

                    />
                    <Design
                        image={design3}
                        alt="design 3"
                        title="Need a SEO"
                        text="Need a SEO for our company who will let our company to a higher level"
                        price="$ 300"
                        link="Apply now"

                    />
                    <Design
                        image={design4}
                        alt="design 4"
                        title="Category Class"
                        text="Need a SEO for our company who will let our company to a higher level"
                        price="$ 200"
                        link="Apply now"

                    />
                    <Design
                        image={design5}
                        alt="design 5"
                        title="Office Design"
                        text="Need a SEO for our company who will let our company to a higher level"
                        price="$ 700"
                        link="Apply now"

                    />
                    <Design
                        image={design6}
                        alt="design 6"
                        title="Hardware"
                        text="Need a SEO for our company who will let our company to a higher level"
                        price="$ 300"
                        link="Apply now"

                    />
                </Slider>
            </div>

        </div>
    )
}

export default Designs;