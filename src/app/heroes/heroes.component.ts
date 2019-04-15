import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  public heroes: Array<Hero>;
  public hero: Hero;

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.refreshHeroes();
  }

  public onClick(hero: Hero): void {
    this.hero = hero;
  }

  private refreshHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe((heroes: Array<Hero>) => this.heroes = heroes);
  }
}
