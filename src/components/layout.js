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
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div
        style={{
          margin: `0 auto`,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>
            {/* <input type="checkbox" id="menu-icon"/>
            <aside className="aside-bar">
              <ul className="sidebar">
                <li>
                  <Link to="/" className="page-link">
                    <b>💻 Projects</b>
                  </Link> 
                </li>
                <li>
                  <Link to="/posts" className="page-link">
                    <b>📌 Posts</b>
                  </Link>
                </li>
                <li>
                  <Link to="/about-me" className="page-link">
                    <b>👋 About Me</b>
                  </Link>
                </li>
                <li>
                  <Link to="/besides-work" className="page-link">
                    <b>⚡️ Besides Work</b>
                  </Link>
                </li>
              </ul>
            </aside>
            <label htmlFor="menu-icon">
              <span className="bar top"></span>
              <span className="bar middle"></span>
              <span className="bar bottom"></span>
            </label> */}
            <div className="content">
              <div className="inner">{children}</div>
            </div>
        </main>
        <div className="row bottom-center">
          <footer>
            © All rights reserved.
            {` `}
          </footer>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
