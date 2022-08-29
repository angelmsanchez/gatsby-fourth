import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Button from "../Button/Button"
import { FeaturedProductStyles } from "./FeaturesStyles"

const FeaturedProduct = ({ feature }) => {
  const { path, title, introduction, image } = feature
  console.log('image', image);
  return (
    <FeaturedProductStyles>
      <Link to={path}>
        <StaticImage
          // src={image}
          // src="../../../static/coins.jpg"
          src="../../../static/iphone.jpg"
          className="features__item--img"
          alt="Producto Imagen"
        />
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
