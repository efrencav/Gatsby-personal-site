import React from "react";
import Service from "../Services/Service";
import { graphql, useStaticQuery, Link } from "gatsby";
import styles from "../../css/courses.module.css";
import Title from "../Title";

const query = graphql`
{
allStrapiService(sort: { fields: published, order: DESC }, limit:3) {
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
      <Title title="top" subtitle="services"></Title>
      <div className={styles.center}>
          {
              Services.map(item => {
                  return <Service key={item.id} {...item}></Service>
              })
          }
      </div>
<Link to='/courses' className="btn-primary">All Services</Link>
  </section>;
};

export default Services;
