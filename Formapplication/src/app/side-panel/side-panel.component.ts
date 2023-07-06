import { Component } from '@angular/core';
import { SavedataService } from '../savedata.service';
import { Register } from '../model/Register';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent {
  formObj = {
    Email : '',
    Pass : '',
    City : '',
    state : '',
    pincode : 0
  };
  register: Register | undefined;
  constructor(private savedataservice:SavedataService){}

  signIn(){
    console.log(this.formObj);
    this.register={
      email: this.formObj.Email,
      pass: this.formObj.Pass,
      city: this.formObj.City
    }
    this.savedataservice.createTask(this.register).subscribe(data=>{console.log(data); });
  }

}
