import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'simula.html',
})

export class SimulaPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    let resultadoSimulacao   = navParams.get('resultadoSimulacao');
    let rendimentoTotal      = navParams.get('rendimentoTotal');
    let montanteInvestido    = navParams.get('montanteInvestido');
    let taxaIR               = navParams.get('taxaIR');
    let taxaIRporcent        = navParams.get('taxaIRporcent');
    let montanteLiquido      = navParams.get('montanteLiquido');
    let dataResgaste         = navParams.get('dataResgaste');
    let diasCorridos         = navParams.get('diasCorridos');
    let rendimentoMensal     = navParams.get('rendimentoMensal');
    let taxaCDI              = navParams.get('taxaCDI');
    let rentAnual            = navParams.get('rentAnual');
    let rentPeriodo          = navParams.get('rentPeriodo');
  }

}
