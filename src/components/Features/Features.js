import * as React from "react"
// import { Link } from "gatsby"
import { FeaturedProductsStyles } from "./FeaturesStyles"
import FeaturedProduct from "./FeaturedProduct"
// import Button from "../Button/Button"

const Features = ({ title, introduction }) => {
  const featuredProduct = [
    {
      image: "iphone",
      title: "Titulo 1",
      introduction: "Introducción 1",
      path: "/products",
    },
    {
      image: "coins",
      title: "Titulo 2",
      introduction: "Introducción 2",
      path: "/products",
    },
    {
      image: "crypto",
      title: "Titulo 3",
      introduction: "Introducción 3",
      path: "/products",
    },
  ]

  return (
    <FeaturedProductsStyles className="section">
      {title || introduction ? (
        <div className="container container__tight">
          <div className="intro__area">
            {title && <h2>{title}</h2>}
            {introduction && <p>{introduction}</p>}
          </div>
        </div>
      ) : null}

      <div className="container container__tight container__scroll">
        {featuredProduct.map((node, index) => {
          return <FeaturedProduct feature={node} key={index} />
        })}
      </div>
      {/* <div className="container container__tight learn__more">
        <Button as={Link} to="/products" text="Ir a Productos" arrow />
      </div> */}
    </FeaturedProductsStyles>
  )
}

export default Features
