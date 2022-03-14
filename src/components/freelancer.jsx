import "../styles/freelancers.css";
import freelancers from "../images/freelancers.png"

function Freelancers(props) {
    return (
        <div className="container" id="text-episode">
        <div className="text-img">
            <img src={freelancers} alt="freelancers"/>
        </div>
        <div className="text-pragraf">
            <h3>Find The Best <span class="active">Freelancers</span> Here</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut erat bibendum ornare urna, cursus eget
                convallis. Feugiat imperdiet posuere justo, ultrices interdum sed orci nunc, mattis. Ipsum viverra
                viverra neque adipiscing arcu, quam dictum. Dui mi viverra dui, sit accumsan, tincidunt massa. Dui
                cras magnis.

            </p>
        </div>
    </div>
    )
}

export default Freelancers;