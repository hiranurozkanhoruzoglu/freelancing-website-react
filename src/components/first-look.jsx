import "../styles/first-look.css";
import searchIcon from '../images/search.png';
import bannerHomePage from '../images/banner-home-page.png';

function FirstLook(props) {
    return (
        <div className="container" id="first-look">
            <div className="left-col">
                <h2>Are you looking for Freelancers?</h2>
                <p>
                    Hire Great Freelancers, Fast. Spacelance helps you hire elite freelancers at a moment's notice
                </p>
                <button className="primary-btn">Hire a freelancer</button>
                <div className="search-bar">
                    <input placeholder="search freelance work" name="search" />
                    <button className="btn-img"><img src={searchIcon} alt="search icon" /></button>
                </div>

            </div>
            <div className="right-col"><img src={bannerHomePage} alt="banner" /></div>
        </div>
    )
}

export default FirstLook;