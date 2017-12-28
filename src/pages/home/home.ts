import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { LoadingController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  valor; data; taxa;
  constructor(public navCtrl: NavController, 
              public api: ApiProvider, 
              private toast: ToastController,
              public loading: LoadingController) {
    this.valor = '';
    this.taxa = '';
    this.data = '';
  }

  public validate(valor, data, taxa) {
    
    if ((valor == '') || (taxa == '') || (data == '')) {

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

  public simular(valor, data, taxa) {

    if (this.validate(valor, data, taxa)) {

      let loader = this.loading.create({
        content: 'Simulando...'
      });

      loader.present();
      
      this.api.simular(valor, taxa, data);
      
      setTimeout(() => {
        loader.dismiss();
      }, 2000);

    }
 }
}
