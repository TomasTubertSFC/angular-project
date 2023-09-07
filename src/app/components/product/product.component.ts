import { Component,Input } from '@angular/core';
import { Product } from './../../models/product.model';
import { NgOptimizedImage, CommonModule } from '@angular/common';

@Component({
  standalone:true, //This means is not comming from any module.
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  imports: [ //Normaly this have to be at app module and you can use them wherever but if you use standalone you have to imported at component level
    NgOptimizedImage,
    CommonModule
  ]
})

export class ProductComponent {

  @Input() product!: Product
}
