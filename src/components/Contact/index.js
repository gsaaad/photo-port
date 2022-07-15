import React from "react";

function ContactForm() {
  return (
    <section>
      <h1>Contact Me</h1>
      <form id="contact-form">
        {/* name */}
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email Address: </label>
          <input name="email" type="email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" row="5" />
        </div>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;