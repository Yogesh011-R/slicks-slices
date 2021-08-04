import { useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

const query = graphql`
  {
    site {
      siteMetadata {
        description
        siteUrl
        title
      }
    }
  }
`;

const SEO = ({ children, location, description, title, image }) => {
  const data = useStaticQuery(query);
  const { siteMetadata } = data.site;
  return (
    <Helmet titleTemplate={`%s - ${siteMetadata.title}`}>
      <html lang='en' />
      <title>{title}</title>
      {/* Favicon */}
      <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
      <link rel='alternate icon' href='/favicon.ico' />
      {/* Meta tags */}
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta http-equiv='Content-Type' content='text/html;charset=UTF-8' />
      <meta charSet='utf-8' />
      <meta name='description' content={siteMetadata.description} />
      {/* Open Graph */}
      {location && <meta property='og:url' content={location.href} />}
      <meta property='og:image' content={image || '/logo.svg'} />
      <meta property='og:title' content={title} key='ogtitle' />
      <meta
        property='og:site_name'
        content={siteMetadata.title}
        key='ogsitename'
      />
      <meta property='og:description' content={description} key='ogdesc' />
      {children}
    </Helmet>
  );
};

export default SEO;
