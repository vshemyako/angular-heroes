import {Component} from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  public heroes: Array<Hero> = HEROES;
  public selectedHero: Hero;

  public onClick(hero: Hero): void {
    this.selectedHero = hero;
  }
}
