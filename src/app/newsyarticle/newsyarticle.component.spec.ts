import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsyarticleComponent } from './newsyarticle.component';

describe('NewsyarticleComponent', () => {
  let component: NewsyarticleComponent;
  let fixture: ComponentFixture<NewsyarticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsyarticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsyarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
