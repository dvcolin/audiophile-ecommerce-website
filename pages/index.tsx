import Head from 'next/head';

import Heading from '@components/Heading';
import Text from '@components/Text';

export default function Home() {
  return (
    <>
      <Head>
        <title>Audiophile Ecommerce Website</title>
        <link rel="icon" type="image/png" href="/images/favicon-32x32.png" />
      </Head>
      <Heading tag="h1">Home Page</Heading>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo accusantium
        amet iure dolores eius ducimus excepturi aliquam qui quam accusamus
        vitae eum dignissimos ipsum nobis ea, reiciendis id. Placeat, fugiat!
      </Text>
    </>
  );
}
