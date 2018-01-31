<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';

@NgModule({
  declarations: [
    HomePage
=======
import { HomePage } from './home';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    HomePage,
>>>>>>> a47b9ea22f8fd9514f4eedc02777e2fd50b32e34
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
  exports: [
    HomePage
  ]
})
<<<<<<< HEAD
export class HomePageModule {}
=======

export class HomeModule { }
>>>>>>> a47b9ea22f8fd9514f4eedc02777e2fd50b32e34
