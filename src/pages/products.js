import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import BasicTextModule from "../components/BasicTextModule/BasicTextModule"

const Products = () => {
  return (
    <>
      <Seo title="Productos" />
      <Layout>
        <BannerModule
          title="Productos Crypto Inversiones Brokerage"
          subTitle="Un puente seguro entre  inversores y brokers de criptomonedas, servicio integral y personalizado para nuestros clientes xon."
        />
        <BasicTextModule
          title="Conectados a los mejores exchanges OTC."
          content="Para ofrecerte siempre los mejores precios y evitar fluctuaciones del momento."
          link="/contact"
          linkText="Contactanos"
        />
      </Layout>
    </>
  )
}

export default Products
