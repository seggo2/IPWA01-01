import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalMenuComponent } from './local-menu.component';

describe('LocalMenuComponent', () => {
  let component: LocalMenuComponent;
  let fixture: ComponentFixture<LocalMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
