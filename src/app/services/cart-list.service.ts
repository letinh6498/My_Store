import { Injectable } from "@angular/core";
import { Product } from "../models/product";

@Injectable({
  providedIn: "root"
})
export class CartListService {
  cartList: Product[] = [];

  constructor() {}

  getCart(): Product[] {
    return this.cartList;
  }

  addToCart(product: Product, amount: number): void {
    const existingProduct = this.cartList.find(p => p.id === product.id);

    if (!existingProduct) {
      this.cartList.push(product);
      alert(`${product.name} added to the cart!\nAmount: ${amount}`);
    } else {
      alert(`${product.name} is already in the cart.`);
    }
  }

  removeFromCart(product: Product): Product[] {
    const index = this.cartList.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.cartList.splice(index, 1);
    }
    return this.cartList;
  }

  clearCart(): Product[] {
    this.cartList = [];
    return this.cartList;
  }

  updateAmount(product: Product, amount: number | undefined): void {
    const existingProduct = this.cartList.find(p => p.id === product.id);

    if (existingProduct) {
      existingProduct.selectedAmount = amount !== undefined ? amount : 1;
    }
  }

  getTotalPrice(): number {
    return this.cartList.reduce((acc, product) => {
      return acc + product.price * (product.selectedAmount || 1);
    }, 0);
  }
}
