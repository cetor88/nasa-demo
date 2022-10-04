import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { PokemItem } from 'src/app/interfaces/PokeList';
import { PokeListService } from 'src/app/services/poke-list.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {
  pokeList: PokemItem[]=[];
  
  constructor(private service: PokeListService) { }

  ngOnInit(): void {
    this.service.getListPokemon().pipe(take(1)).subscribe((resp: PokemItem[])=>{
      this.pokeList = resp;
      console.log(resp)
    })
  }

}
