import React from "react"
import { Link } from "gatsby"
import Title from "../Global/Title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 col-sm=8 mx-auto text-center">
            <Title title="Our Story" />
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              reiciendis illo, autem distinctio velit praesentium eos molestiae
              quasi mollitia atque tempore minus natus nam eligendi sequi
              temporibus est sint adipisci, quis impedit tempora fugit. Natus
              quasi esse temporibus expedita, veniam nesciunt debitis at fuga.
              Necessitatibus, iste sit? Minima, sequi vero.
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
