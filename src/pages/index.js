import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import BasicTextModule from "../components/BasicTextModule/BasicTextModule"
import PerksModule from "../components/PerksModule/PerksModule"
// import Perk from "../components/PerksModule/Perk"
import Features from "../components/Features/Features"
// import LatestPosts from "../components/Post/LatestPosts"

const Index = () => {
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <BannerModule
          title="Crypto Inversiones Brokerage"
          subTitle="Un puente seguro entre  inversores y brokers de criptomonedas, servicio integral y personalizado para nuestros clientes xon."
        />
        <BasicTextModule
          title="Conectamos criptoactivos construyendo el futuro."
          content="Un equipo de profesionales ofreciendo las mejores condiciones y herramientas."
          link="/products"
          linkText="Ver Productos"
        />
        <PerksModule>
          {/* <Perk
            title="Convierta su inversion en criptoactivos con los mejores."
            content="Nos encargamos de procesar sus inversiones con un trato unico y personal, trabajamos con los mejores brokers y condiciones de criptomonedas a nivel global."
          /> */}
        </PerksModule>
        <Features
          title="Genere su portfolio en confianza."
          introduction="A diferencia de otras casas de intercambio, Cryptoinver te asegura respuestas y atencion de calidad humana."
        />
        {/* <LatestPosts
          title="Comprar o vender grandes volumenes de Bitcoins"
          introduction="Trabajamos con los mejores brokers y una excelente liquidez del mercado actual mientras construimos un puente entre el hoy y el futuro de tus inversiones."
        /> */}
      </Layout>
    </>
  )
}

export default Index
