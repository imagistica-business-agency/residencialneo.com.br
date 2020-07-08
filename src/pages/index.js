import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Nav from "../components/Nav"
import Header from "../components/Header"
import SubHeader from "../components/SubHeader"
import Plantas from "../components/Plantas"
import Experience from "../components/Experience"
import Exclusivo from "../components/Exclusivo"
import Diferenciais from "../components/Diferenciais"
import Associados from "../components/Associados"
import Novidades from "../components/Novidades"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
    <Header />
    <SubHeader />
    <Plantas />
    <Experience />
    <Exclusivo />
    <Diferenciais />
    <Associados />
    <Novidades />
  </Layout>
)

export default IndexPage
