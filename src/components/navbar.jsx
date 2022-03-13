import "../styles/navbar.css";
import logo from "../images/logo.png";

function Navbar(props) {
    return (
        <nav className="container navbar">
            <img src={logo} alt="spacelance" />
            <ul>
                <li><a className="active" href="/">Home</a></li>
                <li><a href="/find-work">Find work</a></li>
                <li><a href="/find-freelancers">Find Freelancers</a></li>
                <li><a href="/log-in">Log In</a></li>
                <li><a href="/sign-up">Sign Up</a></li>
            </ul>
            <button>Post a project</button>
        </nav>
    )
}

export default Navbar;