import axios from '@/lib/axios';
import { ApiResponse } from '../types/ApiResponse';
import { Produit } from '../types/models/Produit';

class ProductService {
  async getDailyProduct(): Promise<ApiResponse<Produit>> {
    const response = await axios.get<ApiResponse<Produit>>('/daily-products');
    return response.data;
  }
}

export const productService = new ProductService();
