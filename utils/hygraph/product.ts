import hygraph from '@/hygraph';

import type { ProductCategorySlug } from './product-category';

export async function getProductPathsByCategory(
  categorySlug: ProductCategorySlug
) {
  const { products } = await hygraph.productsByCategory({ categorySlug });
  const slugs = products.map(p => p.slug);
  const paths = slugs.map(slug => ({ params: { slug } }));

  return paths;
}

export async function getProduct(slug: string) {
  const { product } = await hygraph.product({ slug });

  return product;
}
