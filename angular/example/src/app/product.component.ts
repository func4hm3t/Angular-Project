import { Component } from "@angular/core";
import { ProductRepository } from "./repository.model";
import { Product } from "./product.model";
import { AdminProductsComponent } from "./admin-products/admin-products.component";
import { FormsModule, NgModel } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app",
  imports:[AdminProductsComponent,FormsModule,CommonModule],
  templateUrl: "product.component.html",
  styleUrls: ["product.component.css"]
})
export class ProductComponent {
    model: ProductRepository =new ProductRepository();

    newProduct: Product = new Product();

    get jsonProduct(){
      return JSON.stringify(this.newProduct);
    }

    addProduct(p: Product){
      console.log("New Product"+this.jsonProduct)
    }

  }
