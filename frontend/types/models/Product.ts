import { Category } from '@/types/models/Category';

export interface Product {
  id: number;
  categoryId: number;
  reference: string;
  label: string;
  imageUrl: string;
  price: number;
  quantity: number;
  category: Category;
}
