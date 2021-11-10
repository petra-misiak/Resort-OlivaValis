import React, { useState } from 'react';
import './_ContactForm.scss';
import { db } from "../../firebase/config";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [loader, setLoader] = useState(false);

    const handleName = (e) => {
        setName(e.target.value);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleMessage = (e) => {
        setMessage(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        db.collection("contacts").add({
            name: name,
            email: email,
            message: message,
        })
            .then(() => {
                alert('Message has been successfully submitted');
            })
            .catch((error) => {
                alert(error.message);
            });

        setName('');
        setEmail('');
        setMessage('');
    };


    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2 className="form-h2">Contact Us</h2>
            <label className="form-label">Name</label>
            <input className="form-input" placeholder="" value={name} onChange={handleName} />
            <label className="form-label">Email</label>
            <input className="form-input" placeholder="" value={email} onChange={handleEmail} />
            <label className="form-label">Message</label>
            <textarea className="form-textarea" placeholder="" value={message} onChange={handleMessage}></textarea>
            <button className="form-button" type="submit" style={{ background: loader ? "#ccc" : " rgb(96 96 96)" }}>Send message</button>


        </form>
    )
}

export default ContactForm;