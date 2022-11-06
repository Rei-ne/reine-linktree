import React from 'react'
import ContactForm from "../Components/ContactForm"
import "../Styles/Styles.css";


const Contactpage = () => {
    return (
        <div className="contactPage">
            <div className="contactContainer">
                <h1>Contact Me</h1>
                <p>Hi there, contact me to ask me about anything you have in mind.</p>
                <ContactForm />
            </div>

        </div>
    )
}

export default Contactpage