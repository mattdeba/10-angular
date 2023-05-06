import { Component } from "@angular/core";
import { Model } from "./repository.model";
import { Product } from "./product.model";
@Component({
  selector: "app",
  templateUrl: "template.html"
})
export class ProductComponent {
  model: Model = new Model();
  newProduct: Product = new Product();

  getProduct(key: number): Product | undefined {
    return this.model.getProduct(key);
  }
  getProducts(): Product[] {
    return this.model.getProducts();
  }
  get jsonProduct() {
    return JSON.stringify(this.newProduct);
  }
  addProduct(p: Product) {
    console.log("New Product: " + this.jsonProduct);
  }
}
