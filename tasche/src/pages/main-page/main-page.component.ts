import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  navbarfixed:boolean = false;
  music : any;

  sectionColors = [
    { section: 'home', color: '#C17E27' },
    { section: 'about', color: '#f5f5f5' },
    { section: 'gigs', color: '#C17E27' },
    { section: 'contact', color: '#f5f5f5' }
  ];

  @HostListener('window:scroll',['$event']) onscroll(){
    if(window.scrollY > 100){
      this.navbarfixed = true;
    }else{
      this.navbarfixed = false;
    }

    const menuBar = document.getElementById('nav');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // Loop through the section colors array to find the current section
    for (let i = this.sectionColors.length - 1; i >= 0; i--) {
      const section = document.getElementById(this.sectionColors[i].section);
      if(section !== null){
        console.log(section)
        if (section.offsetTop <= scrollTop) {
          // Set the menu bar color based on the current section's background color
          this.renderer.setStyle(menuBar, 'background-color', this.sectionColors[i].color);
          break;
        }
      }
    }
  }
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
  }

}
