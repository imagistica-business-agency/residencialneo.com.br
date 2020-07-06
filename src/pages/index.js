import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Associados from "../components/Associados"
import Novidades from "../components/Novidades"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Associados />
    <Novidades />
  </Layout>
)

export default IndexPage
