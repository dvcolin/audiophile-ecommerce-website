import Page from '@/components/Page';
import type { ProductCategory } from '@/types/api';
import { getProductsByCategory } from '@/utils/api';

export default function Speakers({ seo, name }: ProductCategory) {
  return (
    <Page title={seo.title} description={seo.description}>
      <div>{name}</div>
    </Page>
  );
}

export async function getStaticProps() {
  const props = await getProductsByCategory('Speakers');

  return {
    props
  };
}
