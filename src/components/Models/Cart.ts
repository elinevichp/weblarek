import { IProduct } from '../../types/index';

export class Cart {
  private productsInCart: IProduct[] = [];

  getProducts(): IProduct[] {
  return [...this.productsInCart];
}

  addProduct(product: IProduct): void {
    this.productsInCart.push(product);
  }

  removeProduct(product: IProduct): void {
    const index = this.productsInCart.findIndex(
      (item) => item.id === product.id
    );
    if (index !== -1) {
      this.productsInCart.splice(index, 1);
    }
  }

  clear(): void {
    this.productsInCart = [];
  }

  getTotalPrice(): number {
    return this.productsInCart.reduce((total, product) => {
      return total + (product.price ?? 0);
    }, 0);
  }

  getCount(): number {
    return this.productsInCart.length;
  }

  hasProductById(id: string): boolean {
    return this.productsInCart.some((product) => product.id === id);
  }
}
