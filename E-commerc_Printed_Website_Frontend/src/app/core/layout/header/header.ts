import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink,NgFor],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  logoUrlPT: string = "/logo/PT_logo_header.png";
  iconUrlCar: string = "/icons/icon_car.png";
  selectedCategory: string = '';
  isOpen = false;

  categoryList = ['All categories',
  '"Do Not" Signs',
  '"Keep" Signs',
  '"No" Signs',
  '5 Aside Banners',
  '5-Colour DTF Transfer Printing (CMYK + White)',
  '9-Colour DTF Transfer Printing (CMYK + White + Fluorescents)',
  'A Frames',
  'A Frames Only']

  toggleDropDown(){
    this.isOpen = !this.isOpen;
  }

  selectCategory(category: string, event: Event) {
  event.stopPropagation();
  this.selectedCategory = category;
  this.isOpen = false;
  }

}
