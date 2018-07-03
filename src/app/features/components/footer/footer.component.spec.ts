import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import {By} from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a paragraph', () => {
    fixture.detectChanges();

    const debugElement: DebugElement = fixture.debugElement;
    const pDebugElement = debugElement.query(By.css('p'));
    const p = pDebugElement.nativeElement;

    expect(p).toBeTruthy();
  });
});
