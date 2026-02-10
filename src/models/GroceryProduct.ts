import { calculateDiscountPrice } from "../utils/discountCalculator.ts";
import { calculateTax } from "../utils/taxCalculator.ts";
import { Product } from "./Product.ts";

export class GroceryProduct extends Product {
    getPriceWithDiscount(): number {
        return calculateDiscountPrice(
            this.getPrice(),
            this.getDiscountPercentage()
        );
        
    }

    getPriceWithTax(): number {
        const groceryTax = calculateTax(
            this.getPrice(),
            this.getCategory()
        );
    
    return this.getPrice() + groceryTax;
    }
}