import { Component, Input } from '@angular/core';
import { Product } from '../../services/products/product.model';

@Component({
  selector: 'product-card-component',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product;

  onButtonClick() {
    window.location.href = 'https://t.me/Denis_goto';
  }
}
