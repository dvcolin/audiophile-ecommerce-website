import type { ProductCategory } from './products';
import type { Seo } from './shared';

type ProductLabel = 'New_Product' | 'Best_Seller';

export interface Product extends Seo {
  id: string;
  category: ProductCategory;
  name: string;
  slug: string;
  featuredImage: {
    url: string;
  };
  label: ProductLabel | null;
  description: string;
}
