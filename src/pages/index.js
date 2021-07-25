import * as React from "react"
import { graphql } from "gatsby"

//Components
import Layout from "components/Layout"
import Seo from "components/Seo"
import HomeBanner from "components/HomeBanner"
import BlogPostCard from "components/BlogPostCard"

const IndexPage = ({ data }) => {
  console.info(data)
  return (
    <Layout>
      <Seo title="Home" />
      <HomeBanner />
      <main>
        <BlogPostCard />
      </main>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query blogListQuery {
  allMarkdownRemark(
    filter: {frontmatter: {type: {eq: "post"}}}
    sort: {fields: frontmatter___date, order: DESC}
  ) {
    edges {
      node {
        fields {
          readingTime {
            text
          }
        }
        frontmatter {
          date
          title
          image{
            childImageSharp{
              fluid(maxWidth:200, maxHeight:200){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        excerpt
      }
    }
  }
}
`