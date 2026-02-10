// src/main.ts

import { ElectronicsProduct } from "./models/ElectronicsProduct.ts";
import { GroceryProduct } from "./models/GroceryProduct.ts";
import { fetchProducts } from "./services/apiService.ts";
import { handleError } from "./utils/errorHandler.ts";

// Import the product classes, 
// tax calculator, and API service.
//  instances of Product by fetching 
// product data from the API

// ------

// asynchronous functions 
// to fetch product data and display it.

// ----

// Demonstrate error handling and 
// OOP principles in action.


async function getDisplayProducts() {
    try {
const product = await fetchProducts();

const products : (GroceryProduct | ElectronicsProduct) [] = product.map((prod: any) => {
    if (prod.category.toLocaleLowerCase() === "groceries"){
        return new GroceryProduct(
        prod.id,
        prod.price,
        prod.category,
        prod.title,
        prod.discountedPrice,
        prod.discountPercentage, prod.description,
        prod.rating

        );
    }


return new ElectronicsProduct (
        prod.id,
        prod.price,
        prod.category,
        prod.title,
        prod.discountedPrice,
        prod.discountPercentage, prod.description,
        prod.rating
    );
});
products.forEach((p) => {
    console.log(p.displayDetails());
    console.log(`You save: $${(p.getPrice()- p.getPriceWithDiscount()).toFixed(2)}` )
    console.log(`$${p.getPriceWithDiscount()} after discount`);
    console.log(`$${(p.getPriceWithTax() - p.getPriceWithDiscount()).toFixed(2)} tax`)
    console.log(`$${p.getPriceWithTax()} with tax`)
    console.log("\n");
})
    } catch (err){
        handleError(err)
    }
}

getDisplayProducts();