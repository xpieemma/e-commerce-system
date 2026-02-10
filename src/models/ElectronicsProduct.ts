import { calculateDiscountPrice } from "../utils/discountCalculator.ts";
import { calculateTax } from "../utils/taxCalculator.ts";
import { Product } from "./Product.ts";


export class ElectronicsProduct extends Product {
    getPriceWithDiscount(): number {
        return calculateDiscountPrice(this.getPrice(), this.getDiscountPercentage());
    }
    getPriceWithTax(): number {
        const tax = calculateTax(
            this.getPrice(),
            this.getCategory()
        );
        return this.getPrice() + tax;
    }
}