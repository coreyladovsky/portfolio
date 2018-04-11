import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h2>GET IN TOUCH</h2>
          <ul>
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
          </ul>
        </div>

        <form
          method="post"
          action="https://formspree.io/coreyladovsky@gmail.com"
        >
          <div className="row">
            <div>
              <input type="text" name="name" placeholder="Name" />
            </div>
            <div>
              <input type="email" name="email" placeholder="Email" />
            </div>
          </div>
          <div>
            <div>
              <textarea name="message" placeholder="Message" rows="6" />
            </div>
          </div>
          <div>
            <div>
              <ul className="actions">
                <li>
                  <input type="submit" value="Send Message" />
                </li>
              </ul>
            </div>
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
