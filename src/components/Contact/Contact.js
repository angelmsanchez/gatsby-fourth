import * as React from "react"
import { navigate } from "gatsby"

import Button from "../Button/Button"
import { ContactStyles } from "./ContactStyles"

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    let myForm = document.getElementById("contact")
    let formData = new FormData(myForm)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => navigate(myForm.getAttribute("action")))
      .catch((error) => alert(error))
  }

  return (
    <ContactStyles className="section">
      <form
        id="contact"
        name="contact"
        method="post"
        action="/success"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <input placeholder="Nombre" type="text" name="name" />
        <input placeholder="Teléfono" type="phone" name="phone" />
        <input placeholder="Email" type="email" name="email" />
        <textarea placeholder="Mensaje" name="message" rows="5"></textarea>
        <Button text="Enviar" arrow />
      </form>
    </ContactStyles>
  )
}

export default Contact
