import { Dice } from './../../model/dice.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit {

  diceFaces: number = 0;
  diceResults: Dice[] = [];
  totalResult: number = 0;
  diceToRoll: Dice[] = [];

  constructor() { }

  ngOnInit(): void { }

  add() {
    this.diceToRoll.push({id: Math.floor(Math.random()), faces: this.diceFaces, result: 0});
  }

  remove(id: number) {
    this.diceToRoll = this.diceToRoll.filter(dice => dice.id !== id)
  }

  roll() {
    this.diceResults = [];
    this.totalResult = 0;
    this.diceToRoll.forEach(dice => {
      dice.result = Math.floor(Math.random() * dice.faces) + 1;

      this.diceResults.push(dice);
      this.totalResult += dice.result;
    });
  }
}
