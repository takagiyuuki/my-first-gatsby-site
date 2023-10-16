import * as React from "react";
// import { graphql } from "gatsby";
// import { MDXRenderer } from "gatsby-plugin-mdx";

import { Layout } from "../../components/layout";
import { Seo } from "../../components/seo";
// import { TOC } from "../../components/TOC"

// const AboutPage = ({ data }) => {
//   const { body, frontmatter } = data.mdx;
//   return (
//     <Layout pageTitle={data.mdx.frontmatter.title}>
//       <TOC html={data.markdownRemark.tableOfContents} />
//       <p>{data.mdx.frontmatter.date}</p>
//       <p>{frontmatter.description}</p>
//       <MDXRenderer>{body}</MDXRenderer>
//     </Layout>
//   );
// };

// export const query = graphql`
//   query {
//     mdx(frontmatter: { slug: { eq: "/about" } }) {
//       tableOfContents(
//         absolute: false
//       )
//       frontmatter {
//         title
//         date(formatString: "MMMM D, YYYY")
//         description
//       }
//       body
//     }
//   }
// `;

// export const Head = () => <Seo title={data.mdx.frontmatter.title} />;

import AboutMe from "../../content/aboutme.mdx";

const AboutPage = () => {
  return (
    <Layout pageTitle="AboutPage">
      <AboutMe />
    </Layout>
  );
};

export const Head = () => <Seo title="About Me" />;
export default AboutPage;
