import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reuseable/HeroSection"
import { graphql, useStaticQuery } from 'gatsby'
import Infoblock from "../components/Reuseable/Infoblock"
import Dualinfoblock from "../components/Reuseable/Dualinfoblock"



const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection 
    img={data.img.childImageSharp.fluid}
    title="I write Code" 
    subtitle="LearnCodeOnline.in"
     heroclass="hero-background"/>
     <Infoblock heading="About us" />
     <Dualinfoblock heading="Our Team" />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "heromain.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default IndexPage
