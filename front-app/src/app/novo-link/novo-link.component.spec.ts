import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoLinkComponent } from './novo-link.component';

describe('NovoLinkComponent', () => {
  let component: NovoLinkComponent;
  let fixture: ComponentFixture<NovoLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
