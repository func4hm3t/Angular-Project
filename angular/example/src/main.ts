import { bootstrapApplication } from '@angular/platform-browser';
import { ProductComponent } from './app/product.component';

bootstrapApplication(ProductComponent)
  .catch((err) => console.error(err));
