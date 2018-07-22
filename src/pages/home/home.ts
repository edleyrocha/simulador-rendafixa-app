import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ToastController, NavController, IonicPage } from 'ionic-angular';

@IonicPage()

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  valor; data_vencto; taxa;
  valores: Observable<any>;
  
    constructor(public navCtrl: NavController, 
                public api: ApiProvider, 
                private toast: ToastController,
                public loading: LoadingController) {
    this.valor = '';
    this.taxa = '';
    this.data_vencto = '';
  }

  public validate(valor, data_vencto, taxa) {
    
    if ((valor == '') || (taxa == '') || (data_vencto == '')) {

      let toast = this.toast.create({
        message: 'Informe todos os campos',
        duration: 5000,
        position: 'bottom'
      });

      toast.present();
      return false
    } 
    else 
    if ((valor <= 0) || (taxa <= 0)) {

        let toast = this.toast.create({
          message: 'Valor ou Taxa menor ou igual a zero',
          duration: 5000,
          position: 'bottom'
        });
  
        toast.present();
        return false
    } else {
      return true
    }
  }

  public simular(valor, data_vencto, taxa) {

    if (this.validate(valor, data_vencto, taxa)) {

      let loader = this.loading.create({
        content: 'Simulando...'
      });

      loader.present();
      
      this.valores = this.api.getSimular(valor, taxa, data_vencto);

      loader.dismiss();
      
      this.navCtrl.push('SimulaPage', { resultadoValores: this.valores });

    }
  }
}
