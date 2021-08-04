import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Slicks Slices`,
    siteUrl: 'https://gatsby.pizza',
    description: 'The best pizza in Hamilton',
    twitter: '@slicks Slices',
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'zh92h6sz',
        dataset: 'production',
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
