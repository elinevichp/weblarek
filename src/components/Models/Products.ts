import { IProduct } from '../../types/index';

export class Products {
  private products: IProduct[] = [];
  private currentProduct: IProduct | null = null; 

  setItems(items: IProduct[]): void {
    this.products = items;
  }

  getItems(): IProduct[] {
    return this.products;
  }

  getProductById(id: string): IProduct | undefined {
    return this.products.find(product => product.id === id);
  }

  rememberProduct(product: IProduct): void {
    this.currentProduct = product;
  }

  getRememberedProduct(): IProduct | null {
    return this.currentProduct;
  }
}