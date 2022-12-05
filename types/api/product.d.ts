import type { ProductCategory } from './products';
import type { Seo } from './shared';

type ProductLabel = 'New_Product' | 'Best_Seller';

export interface ProductPathsParams {
  params: {
    slug: string;
  };
}

export interface Product extends Seo {
  id: string;
  category: ProductCategory;
  label: ProductLabel | null;
  name: string;
  slug: string;
  featuredImage: {
    url: string;
  };
  description: string;
  price: number;
  featuresDescription: string[];
  includedItems: {
    id: string;
    quantity: number;
    name: string;
  }[];
  galleryImages: {
    id: string;
    url: string;
  }[];
  productSuggestions: Product[] | never[];
}
