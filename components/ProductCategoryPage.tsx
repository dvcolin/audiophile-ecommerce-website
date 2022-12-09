import type { ProductCategoryQuery } from '@/hygraph/sdk';

import Seo from './Seo';

export type ProductCategoryPageProps =
  ProductCategoryQuery['productCategory'] & {};

export default function ProductCategoryPage({ seo }: ProductCategoryPageProps) {
  return <Seo seo={seo} />;
}
