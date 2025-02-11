import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { IonContent, IonList, IonItem, IonLabel, IonThumbnail, IonButton } from '@ionic/angular/standalone';
import { NgFor, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  imports: [IonContent, IonList, IonItem, IonLabel, IonThumbnail, NgFor, CurrencyPipe, IonButton],
  standalone: true,
})
export class CartComponent implements OnInit {
  cart: any[] = [];

  constructor(private alertController: AlertController) { }

  ngOnInit(): void {
    this.cart = this.fetchCartItems();
  }

  async placeOrder(): Promise<void> {
    localStorage.removeItem('cart');
    this.cart = [];

    const alert = await this.alertController.create({
      header: 'Zamówienie złożone',
      message: 'Dziękujemy za złożenie zamówienia!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  private fetchCartItems(): any[] {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  }
}
