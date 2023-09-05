import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import { Seo } from "../../components/seo";
import { linkTitle } from "../../styles/content.module.scss";

const ArtworkPage = ({ data }) => {
  return (
    <Layout pageTitle="My Artwork">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>
            <Link
              to={`/artwork/${node.frontmatter.slug}`}
              className={linkTitle}
            >
              {node.frontmatter.title}
            </Link>
          </h2>
          <p>Posted: {node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title="My Artwork" />;

export default ArtworkPage;
