import { Component } from "@angular/core";
import { ProductRepository } from "./repository.model";
import { Product } from "./product.model";
import { AdminProductsComponent } from "./admin-products/admin-products.component";
import { FormsModule, NgForm, NgModel } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app",
  imports: [AdminProductsComponent, FormsModule, CommonModule],
  templateUrl: "product.component.html",
  styleUrls: ["product.component.css"]
})
export class ProductComponent {
  model: ProductRepository = new ProductRepository();

  newProduct: Product = new Product();

  get jsonProduct() {
    return JSON.stringify(this.newProduct);
  }

  addProduct(p: Product) {
    console.log("New Product" + this.jsonProduct)
  }

  log(x: string) {
    console.log(x);
  }

  formSubmitted: boolean = false;

  submitForm(form: NgForm) {
    this.formSubmitted = true;
    if (form.valid) {
      this.addProduct(this.newProduct);
      this.newProduct = new Product();
      form.reset();
      this.formSubmitted = false;
    }
  }

  getValidationErrors(state: any,key: string): string[] {
    let ctrlName: string = state.name || key;
    let messages: string[] = [];

    if (state.errors) {
      for (let errorName in state.errors) {
        switch (errorName) {
          case "required":
            messages.push(`You must enter a ${ctrlName}`);
            break;
          case "minlength":
            messages.push(`Min. 3 characters for ${ctrlName}`);
            break;
          case "pattern":
            messages.push(`${ctrlName} contains illegal characters`);
            break;
        }
      }
    }

    return messages;
  }


  getFormValidationErrors(form: NgForm): string[] {
  let messages: string[] = [];

  Object.keys(form.controls).forEach(k => {
    const control = form.controls[k];

    this.getValidationErrors(control, k)
      .forEach(message => messages.push(message));
  });

  return messages;
}

}
