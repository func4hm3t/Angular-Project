import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product.model';
import { ProductRepository } from '../repository.model';
import { FormsModule} from '@angular/forms'

@Component({
  selector: 'app-admin-products',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent {
  products: Product[];
  model: ProductRepository;
  selectedProduct: Product | null = null;
  hoveredProduct: Product | null = null;

  constructor() {
    this.model = new ProductRepository();
    this.products = this.model.getProducts();
  }

  onMouseEnter(product: Product) {
    this.hoveredProduct = product;
  }

  onMouseLeave() {
    this.hoveredProduct = null;
  }

  getSelected(product: Product): boolean {
    return this.hoveredProduct === product || this.selectedProduct === product;
  }

  editProduct(product: Product) {
    this.selectedProduct = product;
  }

  SaveChanges() {
    if (!this.selectedProduct) return;

    const id = this.selectedProduct.id;
    const product = this.model.getProductById(id!);
    if (product) {
      product.name = this.selectedProduct.name;
      product.price = this.selectedProduct.price;
      product.imageurl = this.selectedProduct.imageurl;
      product.description = this.selectedProduct.description;
    }
  }
}
