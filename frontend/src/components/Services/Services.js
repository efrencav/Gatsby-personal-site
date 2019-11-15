import React from "react";
import Service from "./Service";
import { graphql, useStaticQuery } from "gatsby";
import styles from "../../css/courses.module.css";
import Title from "../Title";

const query = graphql`
{
allStrapiService(sort: { fields: published, order: DESC }) {
    nodes {
    title
    size
    published
    link
    image {
        childImageSharp {
        fluid (maxWidth:600) {
            ...GatsbyImageSharpFluid_withWebp
        }
        }
    }
    id
    }
}
}
`
const Services = () => {
  const {allStrapiService:{nodes:Services}} = useStaticQuery(query);

  return <section className={styles.courses}>
      <Title title="all" subtitle="services"></Title>
      <div className={styles.center}>
          {
              Services.map(item => {
                  return <Service key={item.id} {...item}></Service>
              })
          }
      </div>

  </section>;
};

export default Services;
