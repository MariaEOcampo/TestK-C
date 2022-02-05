import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareBtnComponent } from './share-btn.component';

describe('ShareBtnComponent', () => {
  let component: ShareBtnComponent;
  let fixture: ComponentFixture<ShareBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
