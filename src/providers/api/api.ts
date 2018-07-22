import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class ApiProvider {

  baseUrl: string = "https://api-simulator-calc.easynvest.com.br/calculator/simulate";

  constructor(public http: Http) { }  

  public convertDate(inputFormat) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    let d = new Date(inputFormat)
    return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/');
  }
  
  getSimular(valor, taxa, data_vencto){
    let headers = new Headers
    headers.append('Content-Type','application/x-www-form-urlencoded');
    headers.append('Access-Control-Allow-Methods','GET');
    headers.append('Access-Control-Allow-Headers','Origin, Content-Type, X-Auth-Token, X-AMZ-META-TOKEN-ID, X-AMZ-META-TOKEN-SECRET');
    headers.append('User-Agent','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36');
    let options = new RequestOptions({headers : headers});
    
    return this.http
    .get(`${this.baseUrl}/?investedAmount=${valor}&index=CDI&rate=${taxa}&isTaxFree=false&maturityDate=${data_vencto}`, options)
    .map(res => res.json()
    .do(this.logResponse)
    .catch(this.catchError))
  }

  private catchError(error: Response | any) {
    console.log(error);
    return Observable.throw(error.json().error || "Server error!");
  }  
  
  private logResponse(res: Response) {
    console.log(res);
  }
}
