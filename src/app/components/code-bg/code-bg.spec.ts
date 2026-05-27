import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeBg } from './code-bg';

describe('CodeBg', () => {
  let component: CodeBg;
  let fixture: ComponentFixture<CodeBg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeBg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeBg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
