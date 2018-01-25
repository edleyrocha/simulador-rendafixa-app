import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { NavController, App } from 'ionic-angular';

import 'rxjs/add/operator/map';

@Injectable()

export class ApiProvider {

  public nav: NavController;
  
  baseUrl: string = "https://api-simulator-calc.easynvest.com.br/calculator/simulate";

  constructor(
    public app:App,
    public http: Http) 
  {
    this.nav = app.getActiveNav();
  }  

  public convertDate(inputFormat) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    let d = new Date(inputFormat)
    return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/');
  }

  public simular(valor, taxa, data){
    let headers = new Headers
    headers.append('Content-Type','application/x-www-form-urlencoded');
    headers.append('Access-Control-Allow-Methods','GET, POST, PATCH, PUT, DELETE, OPTIONS');
    headers.append('Access-Control-Allow-Headers','Origin, Content-Type, X-Auth-Token, X-AMZ-META-TOKEN-ID, X-AMZ-META-TOKEN-SECRET');
    let options = new RequestOptions({headers : headers});
    
    this.http
        .get(`${this.baseUrl}/?investedAmount=${valor}&index=CDI&rate=${taxa}&isTaxFree=false&maturityDate=${data}`, options)
        .map(res => res.json())
        .subscribe(
          data=>{
              let resultadoSimulacao = data.grossAmount;
              let rendimentoTotal    = data.grossAmountProfit;
              let montanteInvestido  = data.investmentParameter.investedAmount;
              let taxaIR             = data.taxesAmount;
              let taxaIRporcent      = data.taxesRate;
              let montanteLiquido    = data.netAmount;
              let dataResgaste       = this.convertDate(data.investmentParameter.maturityDate);
              let diasCorridos       = data.investmentParameter.maturityTotalDays;
              let rendimentoMensal   = data.monthlyGrossRateProfit;
              let taxaCDI            = data.investmentParameter.rate;
              let rentAnual          = data.investmentParameter.yearlyInterestRate;
              let rentPeriodo        = data.annualGrossRateProfit;
              
              this.nav.push('SimulaPage', {
                        resultadoSimulacao,
                        rendimentoTotal,
                        montanteInvestido,
                        taxaIR,
                        taxaIRporcent,
                        montanteLiquido,
                        dataResgaste,
                        diasCorridos,
                        rendimentoMensal,
                        taxaCDI,
                        rentAnual,
                        rentPeriodo});
          },
          err=>{
            alert(err);
          }
        );    
  }
}
