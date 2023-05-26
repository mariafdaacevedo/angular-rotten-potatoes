import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
   trendingMovies: any;
   theatreMovies: any;
   popularMovies: any;
  constructor(
    private http: HttpClient
  ){

  }

  ngOnInit(): void{
    this.getTrendingMovies();
    this.getTheatreMovies();
    this.getPopularMovies();

  }

  getTrendingMovies(){
    this.http.get('http://localhost:4200/assets/data/trending-movies.json').subscribe((res)=>{
      this.trendingMovies = res;
      console.log(this.trendingMovies)
    })
  }

  getTheatreMovies(){
    this.http.get('http://localhost:4200/assets/data/theatre-movies.json').subscribe((res)=>{
      this.theatreMovies = res;
      console.log(this.theatreMovies)
    })
  }

  getPopularMovies(){
    this.http.get('http://localhost:4200/assets/data/popular-movies.json').subscribe((res)=>{
      this.popularMovies = res;
      console.log(this.popularMovies)
    })
  }

  goToMovie(){

  }
}
