import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Header from '../components/Header'
import Downloads from '../components/Downloads'
import Associados from '../components/Associados'
import Novidades from '../components/Novidades'

const DownloadsPage = () => (
  <Layout>
    <SEO title="Downloads" />
    <Header />
    <Downloads />
    <Associados />
    <Novidades />
  </Layout>
)

export default DownloadsPage
