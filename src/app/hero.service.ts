import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  public constructor(private messageService: MessageService) {
  }

  public getHeroes(): Observable<Array<Hero>> {
    this.sendFetchedHeroesMessage();
    return of(HEROES);
  }

  private sendFetchedHeroesMessage(): void {
    this.messageService.add('HeroService: fetched heroes');
  }
}
