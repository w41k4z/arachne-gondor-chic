// types/DailyProduct.ts
import { Product } from '@/types/models/Product';

export interface DailyProduct {
  id: number;
  date: string;
  productId: number;
  product: Product;
}
