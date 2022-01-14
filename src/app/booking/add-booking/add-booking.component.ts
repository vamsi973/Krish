import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../all-booking/booking.service';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.sass']
})
export class AddBookingComponent {
  bookingForm: FormGroup;
  selectedFile: File = null
  constructor(
    private fb: FormBuilder,
    private hotel: BookingService
  ) {
    this.bookingForm = this.fb.group({
      first: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      last: [''],
      email: [
        '', [Validators.required, Validators.email]
      ],
      gender: ['', [Validators.required]],
      contact_no: ['', [Validators.required]],
      city: [''],
      arrival_date: ['', [Validators.required]],
      departuer_date: ['', [Validators.required]],
      total_person: ['', [Validators.required]],
      room_type: ['', [Validators.required]],
      address: [''],
      uploadImg: [''],
      note: [''],
      company_name: [''], designation: [],
      nationality: [''],
      purpose_of_visit: [],
      arrived_by: [],
      proceeding_by: [],
    });
  }
  onSubmit() {
    console.log('Form Value', this.bookingForm.value);
    this.hotel.createBooking(this.bookingForm.value).subscribe((data) => {
      console.log(data);
    })
  };
  onFileSelected(event) {
    this.selectedFile = event.target.files[0]
  }
}
