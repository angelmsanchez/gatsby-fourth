import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Button from "../Button/Button"
import { FeaturedProductStyles } from "./FeaturesStyles"

const FeaturedProduct = ({ feature }) => {
  const { path, title, introduction, image } = feature

  return (
    <FeaturedProductStyles>
      <Link to={path}>
        {image === "iphone" && (
          <StaticImage
            src="../../../static/iphone.jpg"
            className="features__item--img"
            alt="Producto Imagen"
          />
        )}
        {image === "coins" && (
          <StaticImage
            src="../../../static/coins.jpg"
            className="features__item--img"
            alt="Producto Imagen"
          />
        )}
        {image === "crypto" && (
          <StaticImage
            src="../../../static/crypto-stock.png"
            className="features__item--img"
            alt="Producto Imagen"
          />
        )}
        {title && introduction && (
          <div className="features__item--content">
            {title && <h4>{title}</h4>}
            {introduction && <p>{introduction}</p>}
            <Button text="Leer Más" as="span" arrow={true} />
          </div>
        )}
      </Link>
    </FeaturedProductStyles>
  )
}

export default FeaturedProduct
