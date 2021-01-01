import React from "react"
import Title from "../Global/Title"
import Product from "./Product"
import { StaticQuery, graphql } from "gatsby"

const getProducts = graphql`
  {
    product: allContentfulCoffeeProduct {
      edges {
        node {
          id
          title
          description
          price
          photo {
            fluid(maxHeight: 426) {
              src
              ...GatsbyContentfulFluid
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
