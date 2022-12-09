import type { ProductQuery } from '@/hygraph/sdk';

import Seo from './Seo';

export type ProductPageProps = ProductQuery['product'] & {};

export default function ProductPage({ seo }: ProductPageProps) {
  return <Seo seo={seo} />;
}
