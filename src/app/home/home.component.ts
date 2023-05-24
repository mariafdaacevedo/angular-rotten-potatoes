import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
   trendingMovies: any;
  constructor(
    private http: HttpClient
  ){

  }

  ngOnInit(): void{
    this.getTrendingMovies();
  }

  getTrendingMovies(){
    this.http.get('http://localhost:4200/assets/data/trending-movies.json').subscribe((res)=>{
      this.trendingMovies = res;
      console.log(this.trendingMovies)
    })
  }
}