import * as React from "react"

import Button from "../Button/Button"
import { ContactStyles } from "./ContactStyles"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const Contact = () => {
  const [state, setState] = React.useState({});

  const handleChange = (e) => {
    setState({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log('form', form);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state
      })
    })
      .then(() => {
        console.log('then');
      })
      .catch(error => alert(error));
  };

  return (
    <ContactStyles className="section">
      <form
        name="contact"
        method="post"
        action="/success"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input placeholder="Nombre" type="text" name="name" onChange={handleChange} />
        <input placeholder="Teléfono" type="phone" name="phone" onChange={handleChange} />
        <input placeholder="Email" type="email" name="email" onChange={handleChange} />
        <textarea
          placeholder="Mensaje"
          name="message"
          rows="5"
          onChange={handleChange}
        ></textarea>
        <Button text="Enviar" arrow />
      </form>
    </ContactStyles >
  )
}

export default Contact
