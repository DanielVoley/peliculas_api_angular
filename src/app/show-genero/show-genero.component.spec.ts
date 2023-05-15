import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowGeneroComponent } from './show-genero.component';

describe('ShowGeneroComponent', () => {
  let component: ShowGeneroComponent;
  let fixture: ComponentFixture<ShowGeneroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowGeneroComponent]
    });
    fixture = TestBed.createComponent(ShowGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
