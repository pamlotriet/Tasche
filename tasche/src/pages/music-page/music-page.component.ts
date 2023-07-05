import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-page',
  templateUrl: './music-page.component.html',
  styleUrls: ['./music-page.component.css']
})
export class MusicPageComponent implements OnInit {

  shows : any;
  constructor() { }

  bookTicket(item: string) {
    window.open(item);
  }
  ngOnInit(): void {
 
      this.shows = [
        { location: 'Heroes', date: '28 July', city:'Brackenfell' , tickets:'https://www.heroesbrackenfell.net/online-store/Tasche-28-Jul-p538760254', time:'20H30', poster:'../../assets/images/heroes.jpg'},
        { location: 'Emmarentia Dam', date: '5 Augustus', city:'Johannesburg' , tickets:'https://www.ticketmaster.co.za/artist/liefde-by-die-dam-tickets/1210653', time:'09H00', poster:'../../assets/images/lJoburg.jpg'},
        { location: 'Meerendal Wine Estate', date: '4 November', city:'Kaap Stad' , tickets:'https://www.ticketmaster.co.za/artist/liefde-by-die-dam-tickets/1210653', time:'09H00', poster:'../../assets/images/lkaap.jpg'},
        { location: 'FNB WHS Vegkop Stadium', date: '9 September', city:'Windhoek, Namibia' , tickets:'https://www.ticketmaster.co.za/artist/liefde-by-die-dam-tickets/1210653', time:'09H00', poster:'../../assets/images/lwindhoek.jpg'},
        { location: 'SunBet Arena Time Square', date: '18 Augustus', city:'Pretoria' , tickets:'https://www.ticketmaster.co.za/artist/francois-van-coke-vriende-tickets/1181024', time:'20H30', poster:'../../assets/images/vriende.jpg'},
        { location: ' Grand Arena at GrandWest', date: '16 September', city:'Kaap Stad' , tickets:'https://www.ticketmaster.co.za/artist/francois-van-coke-vriende-tickets/1181024', time:'20H30', poster:'../../assets/images/vriende.jpg'}
      ];
    
  }

}
