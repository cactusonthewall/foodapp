import { Component, OnInit } from '@angular/core';

interface Product {
  productName: string;
  productDate: Date;
  productPrice: number;
  productQuantity: number;
  productTotalAmount?: number;
  
}

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: false
})
export class ListPage implements OnInit {
  
  currentDate = new Date();
  bulans = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  haris = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
  is5daysago = false;
  numberclicked = 0;
  isclicked = false;
  couponcode:string="0000";
  strvalid:string="Invalid";
  discount:number=0;
  textcolor:string="red";
  fontsize:string="12px";

  books = [
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      publishedDate: new Date('1960-07-11'),
      price: 7.99,
      discount: 10,
      cover: 'https://m.media-amazon.com/images/M/MV5BZTlkYWU4MGEtZmQyYi00OWEzLTgzY2EtYzVjOTEzYzAyNTk1XkEyXkFqcGc@._V1_.jpg'
    },
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      publishedDate: new Date('1925-04-10'),
      price: 10.99,
      discount:20,
      cover:'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1738790966i/4671.jpg'
    },
    {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      publishedDate: new Date('1813-01-28'),
      price: 12.75,
      discount:15,
      cover:'https://m.media-amazon.com/images/I/61Quo8Y4rSL.jpg'
    }
  ]

  p: Product = {
    productName: 'Iphone 14',
    productDate: new Date(),
    productPrice: 14000000,
    productQuantity: 1,
  };

  updateTotalAmount(): void {
    this.p.productTotalAmount = this.p.productPrice * this.p.productQuantity;
  }
  increaseQuantity() {
    if (this.p.productQuantity < 10) {
      this.p.productQuantity++;  
      this.updateTotalAmount(); 
    }
  }

  decreaseQuantity() {
    if (this.p.productQuantity > 0) {
      this.p.productQuantity--;
      this.updateTotalAmount(); 
    }
  }

  today_ind(): string {
    const h = this.haris[this.currentDate.getDay()];
    const d = this.currentDate.getDate();
    const m = this.bulans[this.currentDate.getMonth()];
    const y = this.currentDate.getFullYear();
    return h + ', ' + d + '-' + m + '-' + y;
  }

  goYesterday() {
    this.currentDate.setDate(this.currentDate.getDate() - 1);
    this.numberclicked++;
    if (this.numberclicked == 5) this.is5daysago = true;
  }

  goReset() {
    this.currentDate = new Date();
    this.isclicked = true;
    this.is5daysago = false;
  }

  goTomorrow() {
    this.currentDate.setDate(this.currentDate.getDate() + 1);
    this.numberclicked++;
    if (this.numberclicked == 5) this.is5daysago = true;
  }

  constructor() { }


  checkValid() {
    if (this.couponcode === '1234') {
      this.strvalid = "valid"
      this.discount = 5
      this.textcolor="green"
      this.fontsize ='16px'
    } else if (this.couponcode === '6789') {
      this.strvalid = "valid"
      this.discount = 10
      this.textcolor="green"
      this.fontsize ='16px'
    } else {
      this.strvalid = "Invalid"
      this.discount = 0
      this.textcolor="red"
      this.fontsize ='12px'
    }
  }

  ngOnInit() {
    this.updateTotalAmount();
  }
}
