import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    
    <h2>
      <Link to="/grid-layout-basic/">Gatsby Grid layout</Link> <br />
    </h2>
  </Layout>
)

export default IndexPage
