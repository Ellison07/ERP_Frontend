import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotnetComponent } from './dotnet.component';

describe('DotnetComponent', () => {
  let component: DotnetComponent;
  let fixture: ComponentFixture<DotnetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DotnetComponent]
    });
    fixture = TestBed.createComponent(DotnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
