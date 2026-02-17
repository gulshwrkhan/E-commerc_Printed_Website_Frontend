import { Component } from '@angular/core';
import { Header } from '../../core/layout/header/header';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-main-layout',
  imports: [Header, RouterOutlet,CommonModule],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {
  constructor(public router:Router){}


}
