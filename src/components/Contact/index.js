import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    // get key strokke for each input for name
    // setFormState({ ...formState, name: e.target.value });

    setFormState({ ...formState, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  //   console.log(formState);

  const { name, email, message } = formState;
  return (
    <section>
      <h1>Contact Me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        {/* name */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email Address: </label>
          <input
            name="email"
            type="email"
            defaultChecked={email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            row="5"
            defaultValue={message}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
