import "../styles/footer.css";
import footer1 from '../images/logo.png';
import footer2 from '../images/instagram.png';
import footer3 from '../images/twitter.png';
import footer4 from '../images/facebook.png';
import footer5 from '../images/placeholder.png';
import footer6 from '../images/phone-call.png';
import footer7 from '../images/email.png';

function Footer(props) {
    return (
        <div className="container footer">
            <div className="spacelange">
                <img className="spacelange-img" width="315" height="65" src={footer1} alt="spacelange" />
                <p>
                    Powerful Freelance Marketplace System with ability to change the Users( Freelancers & Clients)
                </p>
                <div className="communication">
                    <button > <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><img src={footer2} alt="instagram" /></a></button>
                    <button> <a href="https://twitter.com/?lang=tr" target="_blank" rel="noreferrer"><img src={footer3} alt="twitter" /></a></button>
                    <button> <a href="https://tr-tr.facebook.com/" target="_blank" rel="noreferrer"><img src={footer4} alt="facebook" /></a></button>
                </div>
            </div>
            <div className="clients">
                <h4> For Clients</h4>
                <ul>
                    <li>Find Freelancers</li>
                    <li>Post Project</li>
                    <li>Refund Policy</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="freelancers">
                <h4>For Freelancers</h4>
                <ul>
                    <li>Find Work</li>
                    <li>Create Account</li>
                </ul>
            </div>
            <div className="call">
                <h4>Call Us</h4>
                <ul>
                    <li> <img src={footer5} alt="location" />
                        Kenya
                    </li>
                    <li> <img src={footer6} alt="phone" />
                        +2547000000000
                    </li>
                    <li>
                        <img src={footer7} alt="email" />
                        bluelance@gmail.com
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Footer;