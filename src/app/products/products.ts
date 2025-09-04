import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [RouterModule,CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  products = [
    {id: 1, name: "Toyota Corolla", price: 850000, location: "SM Baguio", details: "Like New, 2020 Model"},
    {id: 2, name: "Honda Civic", price: 920000, location: "SM Rosales", details: "Excellent Condition, 2019 Model"},
    {id: 3, name: "Ford Ranger", price: 1250000, location: "SM Tarlac", details: "4x4, Diesel, Good Condition"},
    {id: 4, name: "Mitsubishi Montero", price: 1400000, location: "SM San Fernando", details: "Well Maintained, 2021"},
    {id: 5, name: "Hyundai Tucson", price: 1100000, location: "SM Davao", details: "Good Condition with Minor Scratches"},
    {id: 6, name: "Nissan Navara", price: 1180000, location: "SM Cebu", details: "Diesel, 2020 Model"},
    {id: 7, name: "Kia Sportage", price: 980000, location: "SM Manila", details: "Excellent Condition"},
    {id: 8, name: "Chevrolet Trailblazer", price: 1350000, location: "SM Pampanga", details: "Top of the Line"},
    {id: 9, name: "Toyota Fortuner", price: 1550000, location: "SM Iloilo", details: "Like Brand-New, 2022"},
    {id: 10, name: "Mazda CX-5", price: 1250000, location: "SM Bacolod", details: "Very Clean Interior"},
    {id: 11, name: "Suzuki Ertiga", price: 780000, location: "SM Baguio", details: "Family Car, Low Mileage"},
    {id: 12, name: "Honda CR-V", price: 1450000, location: "SM Rosales", details: "Excellent SUV"},
    {id: 13, name: "Ford Everest", price: 1500000, location: "SM Tarlac", details: "Diesel, Powerful Engine"},
    {id: 14, name: "Mitsubishi L300", price: 690000, location: "SM San Fernando", details: "Commercial Van, Good Running Condition"},
    {id: 15, name: "Toyota Innova", price: 1150000, location: "SM Davao", details: "Good for Families, Diesel"},
    {id: 16, name: "Hyundai Accent", price: 650000, location: "SM Cebu", details: "Affordable Sedan"},
    {id: 17, name: "Nissan Terra", price: 1480000, location: "SM Manila", details: "SUV, 7-Seater"},
    {id: 18, name: "Kia Picanto", price: 480000, location: "SM Pampanga", details: "Compact Car, Good Condition"},
    {id: 19, name: "Chevrolet Spark", price: 520000, location: "SM Iloilo", details: "Fuel Efficient, City Car"},
    {id: 20, name: "Toyota Hilux", price: 1300000, location: "SM Bacolod", details: "Pickup Truck, 4x4"},
    {id: 21, name: "Mazda 3", price: 980000, location: "SM Baguio", details: "Sleek Sedan"},
    {id: 22, name: "Suzuki Swift", price: 720000, location: "SM Rosales", details: "Sporty Hatchback"},
    {id: 23, name: "Honda Jazz", price: 750000, location: "SM Tarlac", details: "Compact and Reliable"},
    {id: 24, name: "Ford EcoSport", price: 880000, location: "SM San Fernando", details: "Compact SUV"},
    {id: 25, name: "Mitsubishi Mirage", price: 590000, location: "SM Davao", details: "Affordable and Fuel Efficient"},
    {id: 26, name: "Hyundai Santa Fe", price: 1550000, location: "SM Cebu", details: "Premium SUV"},
    {id: 27, name: "Nissan Almera", price: 680000, location: "SM Manila", details: "Reliable Sedan"},
    {id: 28, name: "Kia Rio", price: 710000, location: "SM Pampanga", details: "Stylish Hatchback"},
    {id: 29, name: "Chevrolet Colorado", price: 1400000, location: "SM Iloilo", details: "Pickup Truck"},
    {id: 30, name: "Toyota Vios", price: 650000, location: "SM Bacolod", details: "Best Seller, Excellent for Daily Use"}
  ];
}
