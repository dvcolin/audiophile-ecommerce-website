import ProductPage, { ProductPageProps } from '@/components/ProductPage';
import type { GetStaticPropsParamsWithSlug } from '@/types/pages';
import { getProduct, getProductPathsByCategory } from '@/utils/hygraph';

export default function Earphones(props: ProductPageProps) {
  return <ProductPage {...props} />;
}

export async function getStaticPaths() {
  const paths = await getProductPathsByCategory('earphones');

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
