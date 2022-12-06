import Heading from '@/components/Heading';
import Page from '@/components/Page';
import Text from '@/components/Text';
import type { Product } from '@/hygraph/sdk';
import type { GetStaticPropsParamsWithSlug } from '@/types/pages';
import { getProduct, getProductPathsByCategory } from '@/utils/hygraph';

export default function Headphones({ seo, name, description }: Product) {
  return (
    <Page title={seo.title} description={seo.description}>
      <Heading tag="h2">{name}</Heading>
      <Text>{description}</Text>
    </Page>
  );
}

export async function getStaticPaths() {
  const paths = await getProductPathsByCategory('headphones');

  return { paths, fallback: false };
}

export async function getStaticProps({
  params: { slug }
}: GetStaticPropsParamsWithSlug) {
  const props = await getProduct(slug);

  return {
    props
  };
}
