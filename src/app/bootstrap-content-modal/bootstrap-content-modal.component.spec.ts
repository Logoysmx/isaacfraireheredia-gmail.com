import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapContentModalComponent } from './bootstrap-content-modal.component';

describe('BootstrapContentModalComponent', () => {
  let component: BootstrapContentModalComponent;
  let fixture: ComponentFixture<BootstrapContentModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapContentModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapContentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
