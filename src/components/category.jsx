import "../styles/category.css";
import average1 from '../images/graphic-design.png';
import average2 from '../images/cartoon-animation.png';
import average3 from '../images/illustration.png';
import average4 from '../images/flyers-vouchers.png';
import average5 from '../images/logo-design.png';
import average6 from '../images/social-graphics.png';
import average7 from '../images/article-writing.png';
import average8 from '../images/video-editing.png';


function Category(props) {
    return (
        <div className="container category">
        <div className="categories">
            <h3>Choose Different <span className="active"> Category </span></h3>
            <div className="top">
                <div className="average">
                    <img src={average1} alt="Graphic Design"/>
                    <h4>Graphic & Design</h4>
                </div>
                <div className="average">
                    <img src={average2} alt="Cartoon Animtion"/>
                    <h4>Graphic & Design</h4>
                </div>
                <div className="average">
                    <img src={average3} alt="Illustration"/>
                    <h4>Graphic & Design</h4>
                </div>
                <div className="average">
                    <img src={average4} alt="Flyers Vouchers"/>
                    <h4>Graphic & Design</h4>
                </div>
                <div className="average">
                    <img src={average5} alt="Logo Design"/>
                    <h4>Graphic & Design</h4>
                </div>
                <div className="average">
                    <img src={average6} alt="Social graphics"/>
                    <h4>Graphic & Design</h4>
                </div>
                <div className="average">
                    <img src={average7} alt="Article writing"/>
                    <h4>Graphic & Design</h4>
                </div>
                <div className="average">
                    <img src={average8} alt="Video Editing"/>
                    <h4>Graphic & Design</h4>
                </div>
            </div>
            <button className="more-btn">More Categories</button>

        </div>
    </div>
    )
}

export default Category;