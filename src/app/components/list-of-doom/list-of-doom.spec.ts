import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfDoom } from './list-of-doom';

describe('ListOfDoom', () => {
  let component: ListOfDoom;
  let fixture: ComponentFixture<ListOfDoom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListOfDoom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfDoom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
