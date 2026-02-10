//src/utils/discountCalculator.ts
// Create a calculateDiscount() 
// function to handle discount 
// calculations for product

// if a product costs $100 and
//  has a 10% discount, 
// the function should return $10.
import {Product} from "../models/Product.ts"

function calculateDiscount(price : number, discountPercentage: number) {

    return (price * discountPercentage/100).toFixed(2);
}