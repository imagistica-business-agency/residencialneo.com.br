import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Novidades from "../components/Novidades"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Novidades />
  </Layout>
)

export default IndexPage
