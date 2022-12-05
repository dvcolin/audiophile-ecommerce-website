import { Product } from './product';
import { Seo } from './shared';

export type ProductCategoryName = 'Headphones' | 'Speakers' | 'Earphones';

export interface ProductCategory extends Seo {
  id: string;
  name: string;
  slug: string;
  products: Product[] | never[];
}
