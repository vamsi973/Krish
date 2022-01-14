import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StaffService } from '../all-staff/staff.service';
@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.sass']
})
export class AddStaffComponent {
  staffForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private staff : StaffService
    ) {
    this.staffForm = this.fb.group({
      first: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      last: [''],
      gender: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      password: ['', [Validators.required]],
      conformPassword: ['', [Validators.required]],
      designation: [''],
      department: [''],
      address: [''],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)]
      ],
      dob: ['', [Validators.required]],
      education: [''],
      uploadImg: ['']
    });
  }
  onSubmit() {
    console.log('Form Value', this.staffForm.value);
    if(!this.staffForm.valid){
      return alert('fill the proper data')
    }
    this.staff.newStaffAdd(this.staffForm.value).subscribe((data)=>{
      console.log(data,40)
    })
  }
}
