import Page from '@/components/Page';
import type { ProductCategory } from '@/types/api';
import { getProductCategory } from '@/utils/api';

export default function HeadphonesCategory({ seo, name }: ProductCategory) {
  return (
    <Page title={seo.title} description={seo.description}>
      <div>{name}</div>
    </Page>
  );
}

export async function getStaticProps() {
  const props = await getProductCategory('Headphones');

  return {
    props
  };
}
