import Heading from '@/components/Heading';
import Page from '@/components/Page';
import Text from '@/components/Text';
import { Product, ProductPathsParams } from '@/types/api';
import { getProductBySlug, getProductSlugsByCategory } from '@/utils/api';

export default function Speakers({ seo, name, description }: Product) {
  return (
    <Page title={seo.title} description={seo.description}>
      <Heading tag="h2">{name}</Heading>
      <Text>{description}</Text>
    </Page>
  );
}

export async function getStaticPaths() {
  const products = await getProductSlugsByCategory('Speakers');

  const paths = products.map(product => ({
    params: { slug: product.slug }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params: { slug } }: ProductPathsParams) {
  const props = await getProductBySlug(slug);

  return {
    props
  };
}
