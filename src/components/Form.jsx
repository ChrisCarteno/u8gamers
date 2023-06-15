//write contact form here
import React from 'react';
import './form.css';

class Form extends React.Component {
    render() {
        return (
        <div className="form">
            <form action="https://formspree.io/f/xvovjvqy" method="POST">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="_replyto" placeholder="Enter your email" />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Enter your message"></textarea>
            </div>
            <button type="submit">Submit</button>
            </form>
        </div>
        )
    }
    }

export default Form