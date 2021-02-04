import { Component,ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  @ViewChild('empForm') myForm?: NgForm;

  
onSubmit() {
  console.log(this.myForm);
  if (!this.myForm.form.touched) {
    alert('enter the field');
  }
  console.log('onfetch', this.myForm.form.value);
}

}
