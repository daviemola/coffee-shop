import React from "react"
import Title from "../Global/Title"
import Product from "./Product"
import { StaticQuery, graphql } from "gatsby"

const getProducts = graphql`
  {
    product: allContentfulCoffeeProduct(
      filter: { node_locale: { eq: "en-US" } }
    ) {
      edges {
        node {
          id
          title
          description
          price
          photo {
            fluid(maxWidth: 180, maxHeight: 140, quality: 90) {
              src
              ...GatsbyContentfulFluid_noBase64
            }
          }
        }
      }
    }
  }
`

const Products = () => {
  return (
    <StaticQuery
      query={getProducts}
      render={data => {
        return (
          <section className="py-5">
            <div className="container">
              <Title title="Our Products" />
              <div className="row">
                {data.product.edges.map(({ node: product }) => {
                  return <Product key={product.id} product={product} />
                })}
              </div>
            </div>
          </section>
        )
      }}
    />
  )
}

export default Products
