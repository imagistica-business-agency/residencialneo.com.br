import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const NovidadesList = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        limit: 4
        sort: { order: DESC, fields: frontmatter___date }
        filter: { frontmatter: { templateKey: { eq: "blogPost" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              title
              description
              image {
                childImageSharp {
                  fluid(maxWidth: 580, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            timeToRead
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const blogItens = allMarkdownRemark.edges

  return (
    <S.NovidadesListWrapper>
      <S.BlogList>
        {blogItens.map(({ node: blogItem }) => (
          <S.BlogItem key={blogItem.fields.slug}>
            {blogItem.frontmatter.image && (
              <S.BlogItemImage
                fluid={blogItem.frontmatter.image.childImageSharp.fluid}
              />
            )}
            <S.BlogItemLink to={blogItem.fields.slug}>
              <S.BlogItemTitle>{blogItem.frontmatter.title}</S.BlogItemTitle>
            </S.BlogItemLink>

            <S.BlogItemDescription>
              {/* {blogItem.frontmatter.description}{" "} */}
              <S.BlogItemLink to={blogItem.fields.slug}>
                Saiba mais <S.ArrowIcon />
              </S.BlogItemLink>
            </S.BlogItemDescription>
          </S.BlogItem>
        ))}
      </S.BlogList>
    </S.NovidadesListWrapper>
  )
}

export default NovidadesList
