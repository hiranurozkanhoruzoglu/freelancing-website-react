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
    // let subtitle;
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

// import React, { useState } from "react";
// import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
// import Button from "./Button";
// import logo from "../images/logo.png";

// const Navbar = (props) => {
//   const {
//     title,
//     actionButtonText,
//     cancelButtonText,
//     children,
//     className,
//   } = props;

//   const [modal, setModal] = useState(false);

//   const toggle = () => setModal(!modal);
//   const alertshow = () => {
//     alert("button clicked");
//   };

//   const closeBtn = (
//     <button className="close" onClick={toggle}>
//       &times;
//     </button>
//   );

//   return (
//     <div>
//       <nav className="container navbar">
//         <img src={logo} alt="spacelance" />
//         <ul>
//           <li><a className="active" href="/">Home</a></li>
//           <li><a href="/find-work">Find work</a></li>
//           <li><a href="/find-freelancers">Find Freelancers</a></li>
//           <li><a href="/log-in">Log In</a></li>
//           <li><a href="/sign-up">Sign Up</a></li>
//         </ul>
//         <button onClick={setModal}>Post a project</button>

//         <form onSubmit={alertshow}>
//           <Modal isOpen={modal} toggle={toggle} className={className}>
//             <ModalHeader className=" border-0" toggle={toggle} close={closeBtn}>
//               {title}
//             </ModalHeader>
//             <ModalBody className="text-left border-0">
//               <p className="modal-label">Please enter your email address</p>
//               {children}
//             </ModalBody>
//             <ModalFooter className="modal-footer border-0">
//               <Button className="btn_secondary modal-btn" onClick={toggle}>
//                 {cancelButtonText}
//               </Button>{" "}
//               &nbsp;&nbsp;
//               <input
//                 className="btn btn_primary modal-btn"
//                 type="submit"
//                 value={actionButtonText}
//               />
//             </ModalFooter>
//           </Modal>
//         </form>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;


