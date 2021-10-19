import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
  })
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  checkoutForm = this.formBuilder.group({
    dp: 0,
    dy: 0,
    ep: 0,
    de: 0,
    svar: 0,
    bm: 0,
    ntis: 0,
    tbl: 0,
    lty: 0,
    ltr: 0,
    tms: 0,
    dfy: 0,
    dfr: 0,
    infl: 0
  });
  													
  prediction: any;
  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
  ) {}
  title = 'int';
  

  onSubmit(): void {
  
   this.getPrediction([this.checkoutForm.value.dp,this.checkoutForm.value.dy,this.checkoutForm.value.ep,this.checkoutForm.value.de,this.checkoutForm.value.svar,this.checkoutForm.value.bm,
    this.checkoutForm.value.ntis,this.checkoutForm.value.tbl,this.checkoutForm.value.lty,this.checkoutForm.value.ltr,
    this.checkoutForm.value.tms,this.checkoutForm.value.dfy,this.checkoutForm.value.dfr,this.checkoutForm.value.infl])
  }
   
  getPrediction(data:any) {
     this.http.post('http://localhost:5000/predict',data,httpOptions).subscribe(data => {
      this.prediction = data
     })
}
  
}
