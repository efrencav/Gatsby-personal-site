import React from "react"
import Layout from "../components/layout"
import HomeBanner from "../components/Home/HomeBanner"
import Services from '../components/Home/LatestService'

const IndexPage = () => (
  <Layout>
    <HomeBanner></HomeBanner>
    <Services></Services>
  </Layout>
)

export default IndexPage
