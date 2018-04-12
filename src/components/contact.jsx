import React from "react";
import "./contact.css";

class Contact extends React.Component {
  render() {
    return (
      <div className="contact-container">
        <div className="email-contact-container">
          <h2>GET IN TOUCH</h2>
          <ul className="email-links-ul">
            <li>
              <a href="mailto:coreyladovsky@gmail.com">
                {" "}
                <i className="fa fa-reply" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="mailto:coreyladovsky@gmail.com">
                coreyladovsky@gmail.com
              </a>
            </li>
            <li>Brooklyn, New York</li>
          </ul>
        </div>

        <form
          autocomplete="off"
          className="email-form"
          method="post"
          action="https://formspree.io/coreyladovsky@gmail.com"
        >
          <div>
            <div className="name-email-input">
              <input type="text" name="name" placeholder="Name" />
              <input type="email" name="email" placeholder="Email" />
            </div>
          </div>
          <div className="textarea">
            <textarea name="message" placeholder="Message" rows="6" />
          </div>
          <div>
            <input type="submit" value="Send Message" />
          </div>
        </form>

        <div className="link-list">
          <li>
            <a
              className="githublink"
              href="https://github.com/coreyladovsky"
              target="_blank"
            >
              <i className="fa fa-github" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              className="linked-in-link"
              href="https://www.linkedin.com/in/corey-ladovsky/"
              target="_blank"
            >
              <i className="fa fa-linkedin" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              className="linked-in-link"
              href="https://angel.co/corey-ladovsky"
              target="_blank"
            >
              {" "}
              <i className="fa fa-angellist" aria-hidden="true" />
            </a>
          </li>
        </div>
      </div>
    );
  }
}

export default Contact;
