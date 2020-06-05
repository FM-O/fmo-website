import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import SectionTitle from '../components/SectionTitle'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        className="home__heading"
      >
        <h1
          className="home__heading__title"
        >
          {title}
        </h1>
        <h2
          className="home__heading__subtitle"
        >
          {subheading}
        </h2>
      </div>
    </div>
    <section className="home__section-intro">
      <SectionTitle className="home__section-intro__title" content={mainpitch.title} />
      <div className="home__section-intro__container">
        <div className="home__section-intro__container__description">
          <p>{mainpitch.description}</p>
        </div>
      </div>
    </section>
    <section className="home__section-products">
      <SectionTitle className="home__section-products__title" content="Mon savoir-faire" />
      <div className="home__section-products__container">
        <div className="home__section-products__container__slider">  
          {/* slider goes here */}
        </div>
      </div>
    </section>
    <section className="home__section-skills">
      <SectionTitle className="home__section-skills__title" content="Vous êtes recruteur ?" subtitle="Un éventail de compétences à votre disposition" />
      <div className="home__section-skills__container">
        <div className="home__section-skills__container__figure">  
          {/* hexagonal figures */}
        </div>
      </div>
    </section>
    <section className="home__section-projects">
      <SectionTitle className="home__section-projects__title" content="Mes réalisations" />
      <div className="home__section-projects__container">
        <div className="home__section-projects__container__slider">  
          {/* slider goes here */}
        </div>
      </div>
    </section>
    <section className="home__section-partners">
      <SectionTitle className="home__section-partners__title" content="Mes clients &amp; collaborateurs" />
      <div className="home__section-partners__container">
        <div className="home__section-partners__container__slider">  
          {/* slider goes here */}
        </div>
      </div>
    </section>
    <Features gridItems={intro.blurbs} />
    <BlogRoll />
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
