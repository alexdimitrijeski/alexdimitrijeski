import { style } from '@angular/animations';
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements AfterViewInit {

  @ViewChild('mySidebar', {static: false})  mySidebar!: ElementRef;
  @ViewChild('myOverlay', {static: false})  myOverlay!: ElementRef;

  ngAfterViewInit(): void {
  }

  w3_open(): void {
    this.mySidebar.nativeElement.style.display = 'block';
    this.myOverlay.nativeElement.style.display = 'block';
  }

  w3_close(): void {
    this.mySidebar.nativeElement.style.display = 'none';
    this.myOverlay.nativeElement.style.display = 'none';
  }
}
