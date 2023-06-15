#### My Store Project

This project was initially generated with [Angular CLI](https://github.com/angular/angular-cli)

## Installing dependencies ##

```
npm install
```


## App Components
- Product list (`product-list`): list of all product items on the homepage
- Product item (`product-item`): single component that makes up the product list
- Product detail (`product-detail`): detail of the product when users navigate to a single product with a specific ID
- Add-to-cart (`add-to-cart`): add a product to the cart
- Nav bar (`nav-bar`): navigation bar that stays on top of every route
- Cart (`cart`): checkout form with form validation and cart list
- Confirmation (`confirmation`): confirmation page after successful checkout

### App specifics
### Model
- Product

### Services
- Product
- Cart

### Routing
- `/products`: product homepage 
- `products/:id`: product item detail page 
- `/cart`: cart checkout page 
- `/confirmation`: confirmation page after successful checkout

### Run the project

Run `ng serve`. Navigate to `http://localhost:4200/`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Prettier ###

```
npm run prettier
```

### Linting ###

```
npm run lint
```
