import { Component } from '@angular/core';
<<<<<<< HEAD
import { NavController, ToastController, LoadingController } from 'ionic-angular';
=======
import { NavController, IonicPage } from 'ionic-angular';
import {Observable} from 'rxjs/Rx';
>>>>>>> a47b9ea22f8fd9514f4eedc02777e2fd50b32e34
import 'rxjs/add/operator/map';
import { ApiProvider } from '../../providers/api/api'

<<<<<<< HEAD
=======
@IonicPage()
>>>>>>> a47b9ea22f8fd9514f4eedc02777e2fd50b32e34
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
