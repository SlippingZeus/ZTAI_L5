import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  items = [
    {
      title: "Red Dead Redemption 2",
      text: "Przygodowa gra akcji osadzona w realiach Dzikiego Zachodu, tworzona przez Rockstar Games. Gra zostanie wydana na platformy Xbox One oraz PlayStation 4 26 października 2018 roku. Jest to kontynuacja serii Red Dead. Gra stanowi prequel poprzednich dwóch odsłon.",
      image: "http://www.komputerswiat.pl/gamezilla/media/2018/256/5621944/rdr2_Open.jpg"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
