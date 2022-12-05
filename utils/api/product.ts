import { gql } from 'graphql-request';

import { ApiResponse, Product, ProductCategoryName } from '@/types/api';

import { hygraph } from './client';

export async function getProductSlugsByCategory(name: ProductCategoryName) {
  const query = gql`
    query ProductsByCategoryQuery {
      products(where: { category: { name: "${name}" } }) {
        slug
      }
    }
  `;
  const { products }: ApiResponse<'products', Product[]> =
    await hygraph.request(query);

  return products;
}

export async function getProductBySlug(slug: string) {
  const query = gql`
    query ProductsBySlugQuery {
      product(where: { slug: "${slug}" }) {
        id
        seo {
          title
          description
        }
        slug
        featuredImage {
          url
        }
        label
        name
        description
        price
        featuresDescription
        includedItems {
          id
          quantity
          name
        }
        galleryImages {
          id
          url
        }
        productSuggestions {
          id
          name
          slug
        }
      }
    }
  `;
  const { product }: ApiResponse<'product', Product> = await hygraph.request(
    query
  );

  return product;
}
