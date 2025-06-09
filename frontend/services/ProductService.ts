import axios from '@/lib/axios';
import { ApiResponse } from '../types/ApiResponse';
import { DailyProduct } from '../types/models/DailyProduct';

class ProductService {
  async getDailyProducts(): Promise<ApiResponse<DailyProduct[]>> {
    const response = await axios.get<ApiResponse<DailyProduct[]>>('/daily-products');
    return response.data;
  }
}

export const productService = new ProductService();
