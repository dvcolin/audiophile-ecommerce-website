import Page from '@/components/Page';
import type { ProductCategory } from '@/hygraph/sdk';
import { getProductCategory } from '@/utils/hygraph';

export default function HeadphonesCategory({ seo, name }: ProductCategory) {
  return (
    <Page title={seo.title} description={seo.description}>
      <div>{name}</div>
    </Page>
  );
}

export async function getStaticProps() {
  const props = await getProductCategory('headphones');

  return {
    props
  };
}
