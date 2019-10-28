/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main className="row left-lg">
          <div className="col-xs-4 col-sm-4 col-md-4col-lg-2">
              <ul className="sidebar">
                <li>
                  <Link to="/page-2/" className="page-link">
                    <b>💻 Projects</b>
                  </Link> 
                </li>
                <li><b>📌 Posts</b></li>
                <li><b>👋 About Me</b></li>
                <li><b>⚡️ Besides Work</b></li>
              </ul>
          </div>
          <div className="col-xs-16
                col-sm-12
                col-md-8
                col-lg-6">
            <div className="box">{children}</div>
          </div>
        </main>
        <div className="row bottom-center">
          <div className="col-xs-6">
              <footer>
                © {new Date().getFullYear()} All rights reserved.
                {` `}
                <a href="https://geng.io">Geng Sng</a>
              </footer>
          </div>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
