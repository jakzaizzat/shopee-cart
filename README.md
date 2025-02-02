# Shopee Cart


<br>
<p align="center">
 <img src="https://i.imgur.com/OESQ8sq.gif"></img>
</p>

<br>

## Requirements
* NodeJS 14.x or higher
* Angular 11.x or higher / Latest AngularJS, VueJS or React
* Github account

## Getting Started
* fork the repository
* create a feature branch `git checkout -b feature/<any-feature-you-want>`
* update this `README` file to include the installation guide
* create a Pull Request to this repository

## Installation
### Install Dependency
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run unit testing
```
npm run test
```

### Run e2e testing
```
npm run cypress:open
```

## Create Simple Shopping Cart
Please see the Attached `gif` for the Design
* List all the Products
    * Product Name,
    * Description
    * Price of the Product
* On Each Product it should have "Add to Cart" button
* When i click the "Add to Cart" button it should
    * Add to Cart List
    * Increment the quantity of each Product in the Cart List
    * Increment the number of quantity in the header
* List all the Products that you added to the Carts
    * Product Name
    * Description
    * Price of the Product
    * Quantity
* On Each Product in the Cart it should have "Remove from Cart" button
* When I click the "Remove from Cart" button it should
    * Decrement number of quantity of the Product
    * Decrement the total number of quantity in the header
    * When the quantity of each Product become "0" zero it will remove from list


## Notes
* If you have questions and concerns you can create discussion, Go to "Discussion" tab then create New
* Data should only in the client side you can use `localStorage`, `Singleton variable`, or `state management` library
* Don't over Architect it
