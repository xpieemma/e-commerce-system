//src/models/Products.ts

// https://dummyjson.com/docs/products

// API request 
// handle errors
// display production information 


// thorougly read through the requirements for the 
// project before planing it 

// Define a "Product class" that includes the appropriate properties 
// based on data provided in the API response.
// displayDetails() and getPriceWithDiscount()

 export abstract class Product {
   private id: number;
   private description: string;
    private rating : string;
    private price: number;
    private category : string;
    private title : string;
    private discountedPrice: number;
    private discountPercentage: number;
    
    constructor(id: number, price:number, category: string, title : string, discountedPrice: number, discountPercentage: number, description: string, rating: string){

        this.id = id,
        this.price = price,
        this.category =category,
        this.title = title,
        this.discountedPrice = discountedPrice,
        this.discountPercentage = discountPercentage,
        this.description = description,
        this.rating = rating

    }

    
 public displayDetails(): string {
    return `Id: ${this.id}, Description :${this.description}, Rating : ${this.rating}, Price: ${this.price.toFixed(2)}, category: ${this.category}, Discount Percentage : ${this.discountPercentage}`;
  }
  abstract getPriceWithTax(): number;
}
 
