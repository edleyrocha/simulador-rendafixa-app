webpackJsonp([1],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/simula/simula.module": [
		266,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(197);
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
    function HomePage(navCtrl, api, toast, loading) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.toast = toast;
        this.loading = loading;
        this.valor = '';
        this.taxa = '';
        this.data = '';
    }
    HomePage.prototype.validate = function (valor, data, taxa) {
        if ((valor == '') || (taxa == '') || (data == '')) {
            var toast = this.toast.create({
                message: 'Informe todos os campos',
                duration: 5000,
                position: 'bottom'
            });
            toast.present();
            return false;
        }
        else if ((valor <= 0) || (taxa <= 0)) {
            var toast = this.toast.create({
                message: 'Valor ou Taxa menor ou igual a zero',
                duration: 5000,
                position: 'bottom'
            });
            toast.present();
            return false;
        }
        else {
            return true;
        }
    };
    HomePage.prototype.simular = function (valor, data, taxa) {
        if (this.validate(valor, data, taxa)) {
            var loader_1 = this.loading.create({
                content: 'Simulando...'
            });
            loader_1.present();
            this.api.simular(valor, taxa, data);
            setTimeout(function () {
                loader_1.dismiss();
            }, 2000);
        }
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\leo\Documents\simulador-rendafixa-app\src\pages\home\home.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="light-gray">\n\n    <ion-title text-wrap text-center>Simulação Renda Fixa</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content class="primary-font">\n\n  <div class="container">\n\n\n\n	  <ion-label text-wrap>Quanto você gostaria de aplicar? *</ion-label>\n\n      <ion-item>\n\n        <ion-input [(ngModel)]="valor"\n\n                   type="number"\n\n                   placeholder="R$"\n\n                   clearInput clearOnEdit="false">\n\n        </ion-input>\n\n      </ion-item>\n\n\n\n	  <ion-label text-wrap>Qual a data de vencimento do investimento? *</ion-label>\n\n      <ion-item>\n\n        <ion-input [(ngModel)]="data"\n\n                   type="date"\n\n                   placeholder="dia/mês/ano"\n\n                   clearInput clearOnEdit="false">\n\n        </ion-input>\n\n      </ion-item>\n\n\n\n	  <ion-label text-wrap>Qual o percentual do CDI do investimento? *</ion-label>\n\n      <ion-item>\n\n        <ion-input [(ngModel)]="taxa"\n\n                   type="number"\n\n                   placeholder="exemplo 98.5%"\n\n                   clearInput clearOnEdit="false">\n\n        </ion-input>\n\n      </ion-item>\n\n\n\n    <button ion-button round outline icon-left\n\n      color="light" \n\n      class="button"\n\n      (click)="simular(valor, data, taxa)">\n\n      <ion-icon name="logo-usd"></ion-icon>\n\n      Simular\n\n    </button>\n\n\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\leo\Documents\simulador-rendafixa-app\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_simula_simula__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApiProvider = (function () {
    function ApiProvider(app, http) {
        this.app = app;
        this.http = http;
        this.baseUrl = "https://api-simulator-calc.easynvest.com.br/calculator/simulate";
        this.nav = app.getActiveNav();
    }
    ApiProvider.prototype.convertDate = function (inputFormat) {
        function pad(s) { return (s < 10) ? '0' + s : s; }
        var d = new Date(inputFormat);
        return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/');
    };
    ApiProvider.prototype.simular = function (valor, taxa, data) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
        headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token, X-AMZ-META-TOKEN-ID, X-AMZ-META-TOKEN-SECRET');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http
            .get(this.baseUrl + "/?investedAmount=" + valor + "&index=CDI&rate=" + taxa + "&isTaxFree=false&maturityDate=" + data, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            var resultadoSimulacao = data.grossAmount;
            var rendimentoTotal = data.grossAmountProfit;
            var montanteInvestido = data.investmentParameter.investedAmount;
            var taxaIR = data.taxesAmount;
            var taxaIRporcent = data.taxesRate;
            var montanteLiquido = data.netAmount;
            var dataResgaste = _this.convertDate(data.investmentParameter.maturityDate);
            var diasCorridos = data.investmentParameter.maturityTotalDays;
            var rendimentoMensal = data.monthlyGrossRateProfit;
            var taxaCDI = data.investmentParameter.rate;
            var rentAnual = data.investmentParameter.yearlyInterestRate;
            var rentPeriodo = data.annualGrossRateProfit;
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_3__pages_simula_simula__["a" /* SimulaPage */], {
                resultadoSimulacao: resultadoSimulacao,
                rendimentoTotal: rendimentoTotal,
                montanteInvestido: montanteInvestido,
                taxaIR: taxaIR,
                taxaIRporcent: taxaIRporcent,
                montanteLiquido: montanteLiquido,
                dataResgaste: dataResgaste,
                diasCorridos: diasCorridos,
                rendimentoMensal: rendimentoMensal,
                taxaCDI: taxaCDI,
                rentAnual: rentAnual,
                rentPeriodo: rentPeriodo
            });
        }, function (err) {
            alert(err);
        });
    };
    return ApiProvider;
}());
ApiProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* App */],
        __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], ApiProvider);

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(217);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_simula_simula__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_api_api__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_simula_simula__["a" /* SimulaPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/simula/simula.module#SimulaPageModule', name: 'SimulaPage', segment: 'simula', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_simula_simula__["a" /* SimulaPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_9__providers_api_api__["a" /* ApiProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\leo\Documents\simulador-rendafixa-app\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\leo\Documents\simulador-rendafixa-app\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimulaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SimulaPage = (function () {
    function SimulaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.resultadoSimulacao = '';
        this.rendimentoTotal = '';
        this.montanteInvestido = '';
        this.taxaIR = '';
        this.taxaIRporcent = '';
        this.montanteLiquido = '';
        this.dataResgaste = '';
        this.diasCorridos = '';
        this.rendimentoMensal = '';
        this.taxaCDI = '';
        this.rentAnual = '';
        this.rentPeriodo = '';
        this.resultadoSimulacao = this.navParams.get('resultadoSimulacao');
        this.rendimentoTotal = this.navParams.get('rendimentoTotal');
        this.montanteInvestido = this.navParams.get('montanteInvestido');
        this.taxaIR = this.navParams.get('taxaIR');
        this.taxaIRporcent = this.navParams.get('taxaIRporcent');
        this.montanteLiquido = this.navParams.get('montanteLiquido');
        this.dataResgaste = this.navParams.get('dataResgaste');
        this.diasCorridos = this.navParams.get('diasCorridos');
        this.rendimentoMensal = this.navParams.get('rendimentoMensal');
        this.taxaCDI = this.navParams.get('taxaCDI');
        this.rentAnual = this.navParams.get('rentAnual');
        this.rentPeriodo = this.navParams.get('rentPeriodo');
    }
    return SimulaPage;
}());
SimulaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\leo\Documents\simulador-rendafixa-app\src\pages\simula\simula.html"*/'\n<ion-header>\n\n  <ion-navbar color="light-gray">\n    <ion-title text-wrap text-center>Resultado Simulação</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="primary-font">\n  <div class="container">\n\n	  <ion-item>\n      <ion-label stacked>Resultado da simulação R$ {{resultadoSimulacao}}</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Rendimento total R$ {{rendimentoTotal}}</ion-label>\n    </ion-item>\n\n    <ion-item>\n        <ion-label stacked>Valor aplicado R$ {{montanteInvestido}}</ion-label>\n    </ion-item>\n\n    <ion-item>\n        <ion-label stacked>Valor bruto do investimento R$ {{rendimentoTotal}}</ion-label>\n    </ion-item>\n\n    <ion-item>\n        <ion-label stacked>Valor do rendimento R$ {{rendimentoTotal}}</ion-label>\n    </ion-item>\n\n    <ion-item>\n        <ion-label stacked>Imposto de Renda R$ {{taxaIR}} ({{taxaIRporcent}}%)</ion-label>\n    </ion-item>\n\n    <ion-item>\n        <ion-label stacked>Valor líquido R$ {{montanteLiquido}}</ion-label>\n    </ion-item>\n\n    <ion-item>\n        <ion-label stacked>Data de resgate: {{dataResgaste}}</ion-label>\n    </ion-item>\n\n    <ion-item>\n        <ion-label stacked>Dias corridos: {{diasCorridos}}</ion-label>\n    </ion-item>\n\n    <ion-item>\n        <ion-label stacked>Rendimento mensal {{rendimentoMensal}}%</ion-label>\n    </ion-item>\n\n    <ion-item>\n        <ion-label stacked>Percentual do CDI do papel {{taxaCDI}}%</ion-label>\n    </ion-item>\n\n    <ion-item>\n        <ion-label stacked>Rentabilidade anual {{rentAnual}}%</ion-label>\n    </ion-item>\n\n    <ion-item>\n        <ion-label stacked>Rentabilidade no período {{rentPeriodo}}%</ion-label>\n    </ion-item>\n  \n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\leo\Documents\simulador-rendafixa-app\src\pages\simula\simula.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], SimulaPage);

//# sourceMappingURL=simula.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map