import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { PerksModuleStyles } from "./PerksModuleStyles"
import { MdOutlineClose as Cross } from "react-icons/md"
import Perk from "./Perk"

const PerksModule = () => {
  return (
    <PerksModuleStyles className="section section__padding">
      <StaticImage
        className="perks__image--bg"
        src="../../../static/abstract-building.jpg"
        alt="Perks Module"
        layout="constrained"
        placeholder="tracedSVG"
      />
      <div className="perks__image--overlay"></div>
      <div className="container container__tight">
        <Perk
          title="Convierta su inversion en criptoactivos"
          content="Nos encargamos de procesar sus inversiones con un trato unico y personal, trabajamos con los mejores brokers y condiciones de criptomonedas."
        >
          <StaticImage
            src="../../../static/crypto-stock.png"
            alt="Perk Image"
            layout="constrained"
            placeholder="tracedSVG"
          />
        </Perk>
        <span className="perks__divider">
          <Cross />
        </span>
        <Perk
          title="Comprar o vender grandes volumenes de Bitcoins"
          content="Trabajamos con los mejores brokers y una excelente liquidez del mercado actual mientras construimos un puente entre el hoy y el futuro de tus inversiones."
        >
          <StaticImage
            src="../../../static/types.jpg"
            alt="Perk Image"
            layout="constrained"
            placeholder="tracedSVG"
          />
        </Perk>
      </div>
    </PerksModuleStyles>
  )
}

export default PerksModule
