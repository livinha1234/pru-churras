import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

numero = 1;
pont1 = 0;
pont2 = 0;
vitoria1 = 0;
vitoria2 = 0;


  constructor() {}


  clicarBotao1() {

    this.numero = 1;

  }

  clicarBotao3() {

    this.numero = 3;

  }
  clicarBotao6() {

    this.numero = 6;

  }

  clicarBotao9() {

    this.numero = 9;

  }
  clicarBotao12() {

    this.numero = 12;

  }

  somarBotao1() {

    this.pont1 += this.numero;
    this.numero = 1;
    if (this.pont1 >=12 ) {

      this.vitoria1 += 1;
      this.pont1 = 0;
      this.pont2 = 0;

    }

  }

  somarBotao2() {

    this.pont2 += this.numero;
    this.numero = 1;
    if (this.pont2 >=12 ) {

      this.vitoria2 += 1;
      this.pont1 = 0;
      this.pont2 = 0;

    }

  }

subtrairBotao1(){

  this.numero=1
  if(this.pont1 >=1) {
    this.pont1 -= this.numero;
}

}


subtrairBotao2(){

  this.numero=1
  if(this.pont2 >=1){

    this.pont2 -= this.numero;
}

}




}


