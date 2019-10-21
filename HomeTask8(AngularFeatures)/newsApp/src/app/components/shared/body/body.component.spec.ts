import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyComponent } from './body.component';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';

describe('BodyComponent', () => {
  let component: BodyComponent;
  let fixture: ComponentFixture<BodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyComponent ],
      imports: [ HttpClientTestingModule,
        RouterTestingModule.withRoutes([])]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
