import "../styles/footer.css";
import footer1 from '../images/logo.png';
import footer2 from '../images/instagram.png';
import footer3 from '../images/Vector.png';
import footer4 from '../images/bxl_facebook.png';
import footer5 from '../images/carbon_location.png';
import footer6 from '../images/carbon_phone-voice.png';
import footer7 from '../images/clarity_email-line.png';

function Footer(props) {
    return (
        <div className="container footer">
            <div className="spacelange">
                <img width="315" height="65" src={footer1} alt="spacelange" />
                    <p>
                        Powerful Freelance Marketplace System with ability to change the Users( Freelancers & Clients)
                    </p>
                    <div className="communication">
                        <img src= {footer2} alt="footer2" />
                            <img src={footer3} alt="footer" />
                                <img src={footer4} alt="footer" />
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
                                    <li> <img src={footer5} alt="footer" />
                                        Kenya
                                    </li>
                                    <li> <img src={footer6} alt="footer6" />
                                        +2547000000000
                                    </li>
                                    <li>
                                        <img src={footer7} alt="footer7" />
                                            bluelance@gmail.com
                                    </li>
                                </ul>
                            </div>

                    </div>
                    )
}

                    export default Footer;