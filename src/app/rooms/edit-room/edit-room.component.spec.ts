import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditRoomComponent } from './edit-room.component';

describe('EditRoomComponent', () => {
  let component: EditRoomComponent;
  let fixture: ComponentFixture<EditRoomComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [EditRoomComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
