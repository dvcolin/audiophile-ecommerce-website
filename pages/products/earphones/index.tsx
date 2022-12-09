import ProductCategoryPage, {
  ProductCategoryPageProps
} from '@/components/ProductCategoryPage';
import { getProductCategory } from '@/utils/hygraph';

export default function EarphonesCategory(props: ProductCategoryPageProps) {
  return <ProductCategoryPage {...props} />;
}

export async function getStaticProps() {
  const props = await getProductCategory('earphones');

  return {
    props
  };
}
