import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

//This will show when a site request is not found
const Error = () => {
  return (
    <Layout>
      <main className="error-page">
        <div className="error-container">
          <h1>Oj, Något gick fel</h1>
          <Link to="/" className="btn">
            Tillbaka Hem
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error