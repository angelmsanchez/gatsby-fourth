import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Button from "../components/Button/Button"

const success = () => {
  return (
    <>
      <Seo title="Success" />
      <Layout>
        <div className="section">
          <div className="container container__tight">
            <h1>Success Page</h1>
            <Button text="Volver a la home" to="/" as={Link} arrow />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default success
