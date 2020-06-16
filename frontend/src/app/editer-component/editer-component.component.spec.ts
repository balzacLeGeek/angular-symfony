import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerComponentComponent } from './editer-component.component';

describe('EditerComponentComponent', () => {
  let component: EditerComponentComponent;
  let fixture: ComponentFixture<EditerComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
