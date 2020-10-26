import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  // <Layout>
  //   <SEO title="Projects" />
  //   <h1>Projects</h1>
  //   <p>Here are some things I've worked on.</p>
  //   <p>insert row-style component</p>
  // </Layout>
  <Layout>
  <SEO title="About Me" />
    <h1 className="no-margin">Geng Sng</h1>
    <p className="gpg-key-id-block"><a href="/geng-sng.public.asc" className="gpg-key-id-text" download>86C6 0CDE 0CDE 2E3A C367 F53D 4F7F 285C 3B21 D3CF</a></p>
    <p>Software developer based in SF.</p>
    <p>Full-time coffee mug ☕ and aspiring gardener 🌱.</p>
    <p>@snggeng on <a href="https://github.com/snggeng" className="stylized-anchor-tag">Github</a> and <a href="https://twitter.com/snggeng" className="stylized-anchor-tag">Twitter</a>.</p>
  </Layout>
)

export default IndexPage
