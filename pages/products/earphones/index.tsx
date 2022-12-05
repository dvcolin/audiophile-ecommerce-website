import Page from '@/components/Page';
import type { ProductCategory } from '@/types/api';
import { getProductsByCategory } from '@/utils/api';

export default function Earphones({ seo, name }: ProductCategory) {
  return (
    <Page title={seo.title} description={seo.description}>
      <div>{name}</div>
    </Page>
  );
}

export async function getStaticProps() {
  const props = await getProductsByCategory('Earphones');

  return {
    props
  };
}
