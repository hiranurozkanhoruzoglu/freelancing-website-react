import Category from "./category";
import average1 from '../images/graphic-design.png';
import average2 from '../images/cartoon-animation.png';
import average3 from '../images/illustration.png';
import average4 from '../images/flyers-vouchers.png';
import average5 from '../images/logo-design.png';
import average6 from '../images/social-graphics.png';
import average7 from '../images/article-writing.png';
import average8 from '../images/video-editing.png';


function Categorys(props) {
    return (
        <div className="container category">
            <div className='categories'>
                <h3>Choose Different<span className="active" > Category </span></h3>
                <div className="top">
                    <Category
                        image={average1}
                        alt="Graphic Design"
                        subTitle="Graphic & Design"
                    />
                    <Category
                        image={average2}
                        alt="Cartoon Animtion"
                        subTitle="Cartoon Animation"
                    />
                    <Category
                        image={average3}
                        alt="Illustration"
                        subTitle="Illustraion"
                    />
                    <Category
                        image={average4}
                        alt="Flyers Vouchers"
                        subTitle="Flyers & Vouchers"
                    />
                    <Category
                        image={average5}
                        alt="Logo Design"
                        subTitle="Logo Design"
                    />
                    <Category
                        image={average6}
                        alt="Social graphics"
                        subTitle="Social Graphics"
                    />
                    <Category
                        image={average7}
                        alt="Article writing"
                        subTitle="Article writing"
                    />
                    <Category
                        image={average8}
                        alt="Video Editing"
                        subTitle="Video Editing"
                    />
                </div>
                <button id="ajax" className="more-btn">More Categories</button>
            </div>
        </div>
    )
}

export default Categorys;