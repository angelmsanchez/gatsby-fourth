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
          title="Productos Crypto Bank Services"
          subTitle="Un puente seguro entre  inversores y brokers de criptomonedas, servicio integral y personalizado para nuestros clientes"
        />
        <BasicTextModule
          title="Conectados a los mejores exchanges OTC"
          content="Para ofrecerte siempre los mejores precios y evitar fluctuaciones del momento"
          link="/contact"
          linkText="Contactanos"
        />
        <BasicTextModule
          title="Otros Servicios:"
          content="Bots de inversión, Apertura de cuentas, estructuras de ahorro fiscal para su empresa, pasarelas de pago..etc
          Servicios de consultoría para ofrecerles la mejor solución"
          link="/contact"
          linkText="Contactanos"
        />
      </Layout>
    </>
  )
}

export default Products
