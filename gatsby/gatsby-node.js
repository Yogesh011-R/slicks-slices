import fetch from 'isomorphic-fetch';
import path from 'path';

const fetchBeers = async ({ actions, createNodeId, createContentDigest }) => {
  const res = await fetch('https://api.sampleapis.com/beers/ale');
  const beers = await res.json();

  for (const beer of beers) {
    const nodeMeta = {
      id: createNodeId(`beer-${beer.name}`),
      parent: null,
      children: [],
      internal: {
        type: 'Beer',
        mediaType: 'application/json',
        contentDigest: createContentDigest(beer),
      },
    };

    actions.createNode({
      ...beer,
      ...nodeMeta,
    });
  }
};

export async function sourceNodes(prams) {
  await Promise.all([fetchBeers(prams)]);
}

const turnSliceMastersIntoPage = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query {
      allSanityPerson {
        totalCount
        sliceMasters: nodes {
          name
          id
          description
          slug {
            current
          }
        }
      }
    }
  `);

  const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE);
  const pageCount = Math.ceil(data.allSanityPerson.totalCount / pageSize) - 1;
  console.log(
    '🚀 ~ file: gatsby-node.js ~ line 50 ~ turnSliceMastersIntoPage ~ pageCount',
    pageCount
  );

  Array.from({ length: pageCount }).forEach((_, i) => {
    actions.createPage({
      path: `/slicemasters/${i + 1}`,
      component: path.resolve('./src/pages/slicemasters.js'),
      context: {
        skip: i * pageSize,
        current: i + 1,
        pageSize,
      },
    });
  });
};

export async function createPages(params) {
  await turnSliceMastersIntoPage(params);
}
