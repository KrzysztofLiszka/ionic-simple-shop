import { Component, OnInit } from '@angular/core';
import { IonContent, IonList, IonItem, IonLabel, IonThumbnail, IonButton } from '@ionic/angular/standalone';
import { NgFor, CurrencyPipe } from '@angular/common';
import { Product } from 'src/app/models';
import { ProductsService } from 'src/app/services';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  imports: [IonContent, IonList, IonItem, IonLabel, IonThumbnail, NgFor, CurrencyPipe, IonButton],
  standalone: true,
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  cart: any[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.subscribeProducts();
  }

  increaseQuantity(product: Product): void {
    product.quantity = (product.quantity || 1) + 1;
  }

  decreaseQuantity(product: any): void {
    if (product.quantity && product.quantity > 1) {
      product.quantity -= 1;
    }
  }

  addToCart(product: any): void {
    const existingProduct = this.cart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += product.quantity;
    } else {
      this.cart.push({
        ...product,
        quantity: product.quantity,
      });
    }

    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  private subscribeProducts(): void {
    this.productsService.getProducts().subscribe({
      next: (data) => {
        this.products = data.map((product) => ({
          ...product,
          quantity: 1,
        }));
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      }
    });
  }
}
