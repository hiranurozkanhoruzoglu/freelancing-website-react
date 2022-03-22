import Modal from 'react-modal';
import { useState } from "react";
import "../styles/navbar.css";
import logo from "../images/logo.png";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#root');

function Navbar(props) {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }

    function closeModal() {
      setIsOpen(false);
    }

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
            <button onClick={openModal}>Post a project</button>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className='submit-text'>Submit a form</h2>
                <form className='form'>
                    <input placeholder='Name' />
                    <input placeholder='Surname' />
                    <input type="email" placeholder='E-mail' name="" id="" />
                    <textarea name="Message" placeholder='Message' id="" cols="30" rows="10"></textarea>
                    <button className='submit' onClick={closeModal}>Submit</button>
                </form>
            </Modal>
        </nav>
    )
}

export default Navbar;
