import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit {

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

