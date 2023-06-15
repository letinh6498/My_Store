import { Component, Input, OnInit } from "@angular/core";
import { CartListService } from "src/app/services/cart-list.service";
import { Product } from "src/app/models/product";

@Component({
  selector: "app-add-to-cart",
  templateUrl: "./add-to-cart.component.html",
  styleUrls: ["./add-to-cart.component.css"]
})
export class AddToCartComponent implements OnInit {
  @Input() productItem: Product;
  selectedAmount = 0;
  availableAmounts: number[] = [];

  constructor(private cartService: CartListService) {
    this.productItem = {
      name: "",
      price: 0,
      url: "",
      description: "",
      availableAmount: 0,
      selectedAmount: 0
    };
  }

  ngOnInit(): void {
    this.availableAmounts = [
      ...Array(this.productItem.availableAmount).keys()
    ].map(i => i + 1);
  }

  ngDoCheck(): void {
    if (this.availableAmounts.length !== this.productItem.availableAmount) {
      this.availableAmounts = [
        ...Array(this.productItem.availableAmount).keys()
      ].map(i => i + 1);
    }
  }

  addToCart(productItem: Product): void {
    if (this.selectedAmount < 1) {
      alert("Please select an amount before adding to the cart.");
      return;
    }

    if (
      (productItem.selectedAmount ?? 0) + this.selectedAmount >
      productItem.availableAmount
    ) {
      alert("Cannot add more than the available quantity to the cart.");
      return;
    }

    this.productItem.selectedAmount = this.selectedAmount;
    this.cartService.addToCart(productItem, this.selectedAmount);

    // productItem.availableAmount = this.selectedAmount;
  }
}
