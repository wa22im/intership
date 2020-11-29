import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.css']
})
export class SubmitFormComponent implements OnInit {

  
  urlValue:string = ""
  nameUrl:string=""
  constructor(private firebaseService:FirebaseService   ) { }

  ngOnInit(): void {
    this.urlValue=""
    this.nameUrl=""
  }

  onSubmit(){
  console.log( this.firebaseService.getData()) ; 

    console.log("sumiterd")
    let objUrl = {}
    objUrl['name']=this.nameUrl  ; 
    objUrl['url'] = this.urlValue;

    this.firebaseService.addUrl(objUrl);

    this.urlValue=""
    this.nameUrl=""
  }

}
