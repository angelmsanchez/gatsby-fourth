import * as React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import Contact from "../components/Contact/Contact"
import Seo from "../components/SEO"
import SimpleBanner from "../components/SimpleBanner/SimpleBanner"

const contact = () => {
  return (
    <>
      <Seo title="Contact" />
      <Layout>
        <SimpleBanner title="Contacta con nosotros, le ofreceremos la mejor solución">
          <StaticImage
            className="banner__image"
            src="../../static/macbook-dark.jpg"
            alt="Apple Macbook Dark"
          />
        </SimpleBanner>
        <Contact />
      </Layout>
    </>
  )
}

export default contact
