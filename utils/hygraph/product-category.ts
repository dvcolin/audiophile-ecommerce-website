import hygraph from '@/hygraph';

export type ProductCategorySlug = 'headphones' | 'speakers' | 'earphones';

export async function getProductCategory(slug: string) {
  const { productCategory } = await hygraph.productCategory({ slug });

  return productCategory;
}
