import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Novidades from '../components/Novidades'

import * as S from '../components/Post/styled'

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <S.Header fluid={post.frontmatter.image.childImageSharp.fluid}>
        <S.Title>{post.frontmatter.title}</S.Title>
      </S.Header>
      <S.PostWrapper
        dangerouslySetInnerHTML={{
          __html: post.html
        }}
      />
      <Novidades />
    </Layout>
  )
}

export const query = graphql`
  query Post($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        image {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      id
      html
      timeToRead
    }
  }
`

export default BlogPost
