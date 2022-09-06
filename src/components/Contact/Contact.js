import * as React from "react"
import Button from "../Button/Button"
import { ContactStyles } from "./ContactStyles"

const Contact = () => {
  return (
    <ContactStyles className="section">
      <form name="contact" action="https://getform.io/f/6f880f84-8f6c-4bd2-9a42-400a85cc6449" method="POST">
        <input placeholder="Nombre" type="text" name="name" />
        <input placeholder="Teléfono" type="phone" name="phone" />
        <input placeholder="Email" type="email" name="email" />
        <textarea
          placeholder="Mensaje"
          name="message"
          rows="5"
        ></textarea>
        <Button text="Enviar" arrow />
      </form>
    </ContactStyles>
  )
}

export default Contact
