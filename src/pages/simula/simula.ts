import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'simula.html',
})

export class SimulaPage {
  resultadoValores: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.resultadoValores = this.navParams.get('resultadoValores');
    
    /*
    this.resultadoSimulacao   = this.navParams.get('resultadoSimulacao');
    this.rendimentoTotal      = this.navParams.get('rendimentoTotal');
    this.montanteInvestido    = this.navParams.get('montanteInvestido');
    this.taxaIR               = this.navParams.get('taxaIR');
    this.taxaIRporcent        = this.navParams.get('taxaIRporcent');
    this.montanteLiquido      = this.navParams.get('montanteLiquido');
    this.dataResgaste         = this.navParams.get('dataResgaste');
    this.diasCorridos         = this.navParams.get('diasCorridos');
    this.rendimentoMensal     = this.navParams.get('rendimentoMensal');
    this.taxaCDI              = this.navParams.get('taxaCDI');
    this.rentAnual            = this.navParams.get('rentAnual');
    this.rentPeriodo          = this.navParams.get('rentPeriodo');
    */
  }
}
