webpackJsonp([2],{

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, api, loading) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.loading = loading;
        this.valor = 1000;
        this.cdi = 100;
        this.data = '2017-12-31';
    }
    HomePage.prototype.simular = function (valor, data, cdi) {
        var _this = this;
        var loader = this.loading.create({
            content: 'Simulando..'
        });
        loader.present();
        this.api.simular(valor, cdi, data);
        setTimeout(function () {
            loader.dismiss();
        }, 2000);
        setTimeout(function () {
            _this.valor = '';
            _this.cdi = '';
            _this.data = '';
        }, 1000);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\joao\Desktop\simulador-rendafixa-app\src\pages\home\home.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title text-center>Renda Fixa</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content class="primary-font">\n\n  <div class="container">\n\n\n\n	  <ion-label>Quanto você gostaria de aplicar?</ion-label>\n\n      <ion-item>\n\n        <ion-input [(ngModel)]="valor"\n\n                   type="number"\n\n                   placeholder="Digite o valor"\n\n                   clearInput clearOnEdit="false">\n\n        </ion-input>\n\n      </ion-item>\n\n\n\n	  <ion-label>Qual a data de vencimento do papel?</ion-label>\n\n      <ion-item>\n\n        <ion-input [(ngModel)]="data"\n\n                   type="date"\n\n                   placeholder=""\n\n                   clearInput clearOnEdit="false">\n\n        </ion-input>\n\n      </ion-item>\n\n\n\n	  <ion-label>Qual o percentual do CDI do papel?</ion-label>\n\n      <ion-item>\n\n        <ion-input [(ngModel)]="cdi"\n\n                   type="number"\n\n                   placeholder="Digite o percentual"\n\n                   clearInput clearOnEdit="false">\n\n        </ion-input>\n\n      </ion-item>\n\n\n\n    <button ion-button icon-left block outline color="light" class="button" (click)="simular(valor, data, cdi)"><ion-icon name="logo-usd"></ion-icon>Simular</button>\n\n\n\n  </div>\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\joao\Desktop\simulador-rendafixa-app\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _c || Object])
], HomePage);

var _a, _b, _c;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_0__home__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__home__["a" /* HomePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_0__home__["a" /* HomePage */]
        ]
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ })

});
//# sourceMappingURL=2.js.map