import React from 'react';

class Contact extends React.Component {
  render () {
    return(
      <div>

					<form method="post" action="https://formspree.io/coreyladovsky@gmail.com">
						<div className="row">
							<div >
								<input type="text" name="name" placeholder="Name" />
							</div>
							<div>
								<input type="email" name="email" placeholder="Email" />
							</div>
						</div>
						<div >
							<div >
								<textarea name="message" placeholder="Message" rows="6"></textarea>
							</div>
						</div>
						<div >
							<div>
								<ul className="actions">
									<li><input type="submit" value="Send Message" /></li>
								</ul>
							</div>
						</div>
					</form>

      </div>
    );
  }
}

export default Contact;
