import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordHandlerComponent } from './record-handler.component';

describe('RecordHandlerComponent', () => {
  let component: RecordHandlerComponent;
  let fixture: ComponentFixture<RecordHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordHandlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
