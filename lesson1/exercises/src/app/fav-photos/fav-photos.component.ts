import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'These are a few of my favorite things:';
  image1 = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.CLgIfaB8qchOEgdTgph0PgHaEK%26pid%3DApi&f=1';
  image2 = 'https://preview.redd.it/fc94t2ru5vw51.jpg?width=640&crop=smart&auto=webp&s=55f2f1c7a1988c02a180fdfccaf6a2b816236966';
  image3 = 'https://source.colostate.edu/wp-content/uploads/2016/03/wild.horses.slideshow.7.original.jpg';

  constructor() { }

  ngOnInit() {
  }

}