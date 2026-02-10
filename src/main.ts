// src/main.ts

import { ProductFactory } from "./factory/ProductFactory.ts";
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

const DOM = { grid : document.getElementById("grid"), 
    searchBtn : document.getElementById("searchBtn"),
    input : document.getElementById("searchingInput");

};

function renderFn (products :(GroceryProduct| ElectronicsProduct)[]){
     if (!DOM.grid) return;
     DOM.grid.innerHTML = "";

     products.forEach((p) => {
        const c = document.createElement("div");
        c.className = "product-card";

        c.innerHTML = `
        <h2> <h2>
        <p> <p>
         <p> <p>
         <p> <p>
         <p> <p>`;
         DOM.grid.appendChild(c);
     });

     DOM.searchBtn ?.addEventListener("click", ()  => {(DOM.input as HTMLInputElement)
        .value.toLowerCase();

        const f = products.filter((p) => 
        p.getTitle().toLowerCase().includes(input));
        renderFn(f);
});



async function getDisplayProducts() {
    try {
const product = await fetchProducts();

// const products : (GroceryProduct | ElectronicsProduct) [] = product.map((prod: any) => {
//     return ProductFactory.create(prod)
//     });
const products = product.map((prod: any) => ProductFactory.create(prod));
renderFn(products);

// products.forEach((p) => {
//     console.log(p.displayDetails());
//     console.log(`You save: $${(p.getPrice()- p.getPriceWithDiscount()).toFixed(2)}` )
//     console.log(`$${p.getPriceWithDiscount()} after discount`);
//     console.log(`$${(p.getPriceWithTax() - p.getPriceWithDiscount()).toFixed(2)} tax`)
//     console.log(`$${p.getPriceWithTax()} with tax`)
//     console.log("\n");
// })
    } catch (err){
        handleError(err)
    }
}

getDisplayProducts();