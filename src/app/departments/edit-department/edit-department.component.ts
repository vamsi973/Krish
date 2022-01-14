import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.sass']
})
export class EditDepartmentComponent {
  departmentForm: FormGroup;
  formdata = {
    dName: 'Kitchen',
    hod: 'Sanjay Shah',
    phone: '123456789',
    email: 'test@example.com',
    totalStaff: '20',
    details: 'Learn fashion designing course with proper guideline.'
  };
  constructor(private fb: FormBuilder) {
    this.departmentForm = this.createContactForm();
  }
  onSubmit() {
    console.log('Form Value', this.departmentForm.value);
  }
  createContactForm(): FormGroup {
    return this.fb.group({
      dName: [this.formdata.dName, [Validators.required]],
      hod: [this.formdata.hod],
      phone: [this.formdata.phone, [Validators.required]],
      email: [
        this.formdata.email,
        [Validators.required, Validators.email, Validators.minLength(5)]
      ],
      totalStaff: [this.formdata.totalStaff],
      details: [this.formdata.details]
    });
  }
}
