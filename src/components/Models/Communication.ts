import type { IApi } from "../../types";
import type { ProductItem } from "../../types";
import type { ProductListResponse } from "../../types";
import type { PostOrderData } from "../../types";

export class Communication {
  
  constructor(private readonly api: IApi) {}

  getProducts(): Promise<ProductListResponse> { 
  return this.api.get<ProductListResponse>('/product/');
} 


  createOrder(payload: PostOrderData): Promise<ProductItem> { 
    return this.api.post<ProductItem>( 
      '/order/', 
      payload, 
      'POST' 
    );
  }
}