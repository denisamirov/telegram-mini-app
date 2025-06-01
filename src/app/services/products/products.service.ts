import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Product[] = [
    { id: 1, name: 'Электроника: программирование и пайка', price: 450, imageUrl: 'images/electronics.jpg', description: `🔹Cделаем основу для робота на лазерном станке и создадим плату управления`, age: `📌Дети 10-16 лет, которые хотят научиться основам электроники и создавать свои устройства` },
    { id: 2, name: 'Mini Apps: создаём ботов в Telegram', price: 470, imageUrl: 'images/tg.webp', description: '🔹Cоздадим полезный mini app для онлайн магазина', age: '📌Дети 10-16 лет, у которых есть опыт в программировании на Python или в веб-разработке' },
  ];

  getProducts(): Product[] {
    return this.products;
  }
}
