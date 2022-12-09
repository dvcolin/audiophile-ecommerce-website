import ProductCategoryPage, {
  ProductCategoryPageProps
} from '@/components/ProductCategoryPage';
import type { ProductCategory } from '@/hygraph/sdk';
import { getProductCategory } from '@/utils/hygraph';

export default function HeadphonesCategory(props: ProductCategoryPageProps) {
  return <ProductCategoryPage {...props} />;
}

export async function getStaticProps() {
  const props = await getProductCategory('headphones');

  return {
    props
  };
}
