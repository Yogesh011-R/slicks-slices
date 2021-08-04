import { useEffect, useState } from 'react';

export default function useLatestData() {
  const [hostSlices, setHotSlices] = useState();
  const [sliceMasters, setSliceMasters] = useState();

  const gql = String.raw;
  const deets = gql`
    
      name
      _id
      image {
        asset {
          url
          metadata {
            lqip
          }
        }
      }
    
  `;

  useEffect(() => {
    fetch(process.env.GATSBY_GRAPHQL_END_POINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: gql`
          query {
            allStoreSettings {
              name
              slicemaster {
               ${deets}
              }
              hotSlices {
              ${deets}
              }
            }
          }
        `,
      }),
    })
      .then(res => res.json())
      .then(data => {
        setHotSlices(data.data.allStoreSettings[0].hotSlices);
        setSliceMasters(data.data.allStoreSettings[0].slicemaster);
      })
      .catch(err => console.log(err));
  }, []);

  return {
    hostSlices,
    sliceMasters,
  };
}
