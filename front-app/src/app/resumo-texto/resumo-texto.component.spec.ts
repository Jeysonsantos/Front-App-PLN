import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumoTextoComponent } from './resumo-texto.component';

describe('ResumoTextoComponent', () => {
  let component: ResumoTextoComponent;
  let fixture: ComponentFixture<ResumoTextoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumoTextoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumoTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
