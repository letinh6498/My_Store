import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { CartComponent } from "./components/cart/cart.component";
import { CartItemComponent } from "./components/cart/cart-item/cart-item.component";
import { CheckoutComponent } from "./components/cart/checkout/checkout.component";
import { ConfirmationComponent } from "./components/confirmation/confirmation.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { AddToCartComponent } from "./components/product-list/add-to-cart/add-to-cart.component";
import { ProductDetailsComponent } from "./components/product-list/product-details/product-details.component";
import { ProductItemComponent } from "./components/product-list/product-item/product-item.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CartItemComponent,
    CheckoutComponent,
    ConfirmationComponent,
    ProductListComponent,
    AddToCartComponent,
    ProductDetailsComponent,
    ProductItemComponent,
    NavbarComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
