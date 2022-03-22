import { useState } from "react";
import "../styles/subcription.css";

function Subcription(props) {
    const [email, setEmail] = useState("");

    function handleValidation() {
        if (!email) {
            return false;
        }

        if (typeof email !== "undefined") {
            let lastAtPos = email.lastIndexOf("@");
            let lastDotPos = email.lastIndexOf(".");

            if (
                !(
                    lastAtPos < lastDotPos &&
                    lastAtPos > 0 &&
                    email.indexOf("@@") === -1 &&
                    lastDotPos > 2 &&
                    email.length - lastDotPos > 2
                )
            ) {
                return false;
            }
        }
        return true;
    }
    function formSubmit(e) {

        e.preventDefault();
        
        if (handleValidation()) {
            alert("Form submitted");
        } else {
            alert("Form has errors.");
        }
    }
    return (
        <div className="subcription"> 
            <div className="container sub">
                <div className="title-sub">
                    <h2>Newsletter Subscription</h2>
                    <h3>Subscription to our newsletter to get new freelance work and projects</h3>
                </div>
                <div className="mail-sub">
                    <input refs="email" type="text" size="30" placeholder="Enter your email address" onChange={event => setEmail(event.target.value)}  />
                    <button onClick={formSubmit}>Subscribe</button>
                </div>
            </div>
        </div>
    )
}
export default Subcription;