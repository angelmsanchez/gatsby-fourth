import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Button from "../components/Button/Button"

const error = () => {
  return (
    <>
      <Seo title="Error" />
      <Layout>
        <div className="section">
          <div className="container container__tight">
            <h1>Perdonanos</h1>
            <h3>Esta página ha sido eliminada o no exite.</h3>
            <p>
              Por favor elige otra opcion desde el menu o vuelve a la pantalla
              inicial presieonando el siquiente boton.
            </p>
            <Button text="Volver a la Home" to="/" as={Link} />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default error
