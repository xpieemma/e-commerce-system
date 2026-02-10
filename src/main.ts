// src/main.ts

import { ElectronicsProduct } from "./models/ElectronicsProduct.ts";
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

const products : ElectronicsProduct[] = product.map((prod : any) => {
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
    console.log(p.getPriceWithDiscount(), "after discount");
    console.log(p.getPriceWithTax(), "after tax")
    console.log("\n");
})
    } catch (err){
        handleError(err)
    }
}

getDisplayProducts();