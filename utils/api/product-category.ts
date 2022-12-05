import { gql } from 'graphql-request';

import type {
  ApiResponse,
  ProductCategory,
  ProductCategoryName
} from '@/types/api';

import { hygraph } from './client';

export async function getProductCategory(name: ProductCategoryName) {
  const query = gql`
    query ProductCategoryQuery {
      productCategory(where: { name: "${name}" }) {
        id
        seo {
          title
          description
        }
        name
        slug
        products {
          id
          featuredImage {
            url
          }
          label
          name
          description
          slug
        }
      }
    }
  `;
  const { productCategory }: ApiResponse<'productCategory', ProductCategory> =
    await hygraph.request(query);

  return productCategory;
}
