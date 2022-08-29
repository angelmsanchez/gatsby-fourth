import * as React from "react"
import { Link } from "gatsby"
import { menuItems } from "../../constants/links"
import { FooterStyles, FooterMenuStyles, CopyrightStyles } from "./FooterStyles"
import {
  FaFacebookSquare as Facebook,
  FaTwitterSquare as Twitter,
  FaInstagram as Instagram,
} from "react-icons/fa"

const Footer = () => {
  return (
    <FooterStyles style={{ marginBottom: 0 }} className="section">
      <div className="container container__tight">
        <FooterMenuStyles className="footer__menu">
          <h5>Links</h5>
          <ul>
            {menuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.path} activeClassName="menu__item--active">
                    {item.text}
                    <span>.</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </FooterMenuStyles>
        {/* {allProduct.length > 0 && (
          <FooterMenuStyles className="footer__menu products__menu">
            <h5>
              <Link to="/products">
                All Products<span>.</span>
              </Link>
            </h5>
            <ul>
              {allProduct.map((item, index) => {
                const { gatsbyPath, title } = item

                return (
                  <li key={index}>
                    <Link to={gatsbyPath}>
                      {title}
                      <span>.</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </FooterMenuStyles>
        )} */}
        <FooterMenuStyles className="footer__menu social__menu">
          <h5>
            Siguenos<span>.</span>
          </h5>
          <ul>
            <li>
              <a
                href={`https://www.twitter.com/`}
                target="_blank"
                rel="nofollow noreferrer noopener"
              >
                <Twitter />
              </a>
            </li>
            <li>
              <a
                href={`https://www.facebook.com/`}
                target="_blank"
                rel="nofollow noreferrer noopener"
              >
                <Facebook />
              </a>
            </li>
            <li>
              <a
                href={`https://www.instagram.com/`}
                target="_blank"
                rel="nofollow noreferrer noopener"
              >
                <Instagram />
              </a>
            </li>
          </ul>
        </FooterMenuStyles>
      </div>
      <CopyrightStyles>
        <div className="container container__tight">
          <p>
            Crypto Inversiones Brokerage 2022.
          </p>
        </div>
      </CopyrightStyles>
    </FooterStyles>
  )
}

export default Footer
