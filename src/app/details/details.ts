import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [CommonModule,RouterModule],
  templateUrl: './details.html',
  styleUrl: './details.css'
})
export class Details implements OnInit {
  productId: number | null = null;
  product: any = null;

  products = [
  {id: 1, name: "CAR", price: 10000, location: "SM Baguio", details: "Excellent Condition"},
  {id: 2, name: "CAR", price: 11000, location: "SM Rosales", details: "Excellent Condition"},
  {id: 3, name: "CAR", price: 8000, location: "SM Tarlac", details: "Good Condition"},
  {id: 4, name: "CAR", price: 12000, location: "SM San Fernando", details: "Like Brand-New"},
  {id: 5, name: "CAR", price: 7000, location: "SM Davao", details: "Good Condition with Minimal Issues"},
  {id: 6, name: "CAR", price: 9500, location: "SM Cebu", details: "Well Maintained"},
  {id: 7, name: "CAR", price: 10500, location: "SM Manila", details: "Excellent Condition"},
  {id: 8, name: "CAR", price: 11500, location: "SM Pampanga", details: "Top of the Line"},
  {id: 9, name: "CAR", price: 13000, location: "SM Iloilo", details: "Like Brand-New"},
  {id: 10, name: "CAR", price: 9000, location: "SM Bacolod", details: "Very Clean Interior"},
  {id: 11, name: "CAR", price: 8700, location: "SM Baguio", details: "Family Car, Low Mileage"},
  {id: 12, name: "CAR", price: 12500, location: "SM Rosales", details: "Excellent SUV"},
  {id: 13, name: "CAR", price: 12800, location: "SM Tarlac", details: "Diesel, Powerful Engine"},
  {id: 14, name: "CAR", price: 6900, location: "SM San Fernando", details: "Commercial Use"},
  {id: 15, name: "CAR", price: 11000, location: "SM Davao", details: "Good for Families"},
  {id: 16, name: "CAR", price: 6500, location: "SM Cebu", details: "Affordable Sedan"},
  {id: 17, name: "CAR", price: 12000, location: "SM Manila", details: "SUV, 7-Seater"},
  {id: 18, name: "CAR", price: 4800, location: "SM Pampanga", details: "Compact Car, Good Condition"},
  {id: 19, name: "CAR", price: 5200, location: "SM Iloilo", details: "Fuel Efficient"},
  {id: 20, name: "CAR", price: 12500, location: "SM Bacolod", details: "Pickup Truck"},
  {id: 21, name: "CAR", price: 9800, location: "SM Baguio", details: "Sleek Sedan"},
  {id: 22, name: "CAR", price: 7200, location: "SM Rosales", details: "Sporty Hatchback"},
  {id: 23, name: "CAR", price: 7500, location: "SM Tarlac", details: "Compact and Reliable"},
  {id: 24, name: "CAR", price: 8800, location: "SM San Fernando", details: "Compact SUV"},
  {id: 25, name: "CAR", price: 5900, location: "SM Davao", details: "Affordable and Fuel Efficient"},
  {id: 26, name: "CAR", price: 13500, location: "SM Cebu", details: "Premium SUV"},
  {id: 27, name: "CAR", price: 6800, location: "SM Manila", details: "Reliable Sedan"},
  {id: 28, name: "CAR", price: 7100, location: "SM Pampanga", details: "Stylish Hatchback"},
  {id: 29, name: "CAR", price: 14000, location: "SM Iloilo", details: "Pickup Truck"},
  {id: 30, name: "CAR", price: 6500, location: "SM Bacolod", details: "Best Seller, Excellent for Daily Use"},
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.products.find(p => p.id === this.productId);
  }
}

