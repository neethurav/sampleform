import { Component, ViewChild} from '@angular/core';
import { EmployeesService } from './employees.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent{
  @ViewChild('empForm') myForm?: NgForm;
employees?:any;
myname?:string;
firstname?:string;
lastname?:string;
division?:string;

  constructor(private empService: EmployeesService) {

  empService.getEmployees().subscribe(
    (data) => {
      console.log(data);
      this.employees = data;
    }
    );
}

onSubmit() {
 
 
  console.log(this.myForm);
  if (!this.myForm.form.touched) {
    alert('enter the field');
  }
  console.log('onfetch', this.myForm.form.value);
}

}

  
