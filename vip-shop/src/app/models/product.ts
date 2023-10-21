import {Rating} from "./rating";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}


export class ProductSaveDto {
  title: string;
  description: string;
  price: number;
  item_category: number;
  image: number[];

  constructor(title: string, item_category: number, price: number, description: string, image: number[]) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.item_category = item_category;
    this.image = image;
  }
}
