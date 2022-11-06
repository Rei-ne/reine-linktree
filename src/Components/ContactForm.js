import React, { useState } from "react";
import "../Styles/Styles.css";


function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [textarea, setTextarea] = useState(
    "Send me a message and I'll reply you as soon as possible..."
  );
  const [checked, setChecked] = useState(false);

  const name = "Reine"


  const handleSubmit = (event) => {
    event.preventDefault();

    setFirstName("");
    setLastName("");
    setEmail("");
    setTextarea("Send me a message and I'll reply you as soon as possible...");
    setChecked(!checked);

    alert(`Thank you ${firstName}, ${name} will be in touch `)

  }
  const handleChange = (event) => {


    setTextarea(event.target.value)
  }

  const resetTextArea = () => {
    setTextarea("");
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className="nameDiv">
        <div className="innerNameDiv">
          <label>First Name</label>
          <input
            id="first_name"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            placeholder="Enter your first name"
            type="text"
            name="firstName"
            required
          />
        </div>

        <div className="innerNameDiv">
          <label >Last Name

          </label>
          <input
            id="last_name"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            placeholder="Enter your last name"
            type="text"
            name="lastName"
            required
          />
        </div>
      </div>



      <div className="innerEmailDiv">
        <label >Email
        </label>
        <input
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="yourname@email.com"
          type="email"
          name="email"
          required
        />
      </div>


      <div className="innerEmailDiv">
        <label>Message

        </label>
        <textarea id="message" value={textarea} onChange={handleChange}
          onClick={resetTextArea} required
        />
      </div>


      <div className="checkbox">
        <input type="checkbox"
          checked={checked}
          onChange={e => setChecked(e.target.checked)}

        />
        You agree to providing your data to {name} who may contact you.

      </div>





      <button id="btn__submit" type="submit">Send message</button>
    </form>
  );
}
export default ContactForm;