import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApodComponent } from './apod.component';

describe('ApodComponent', () => {
  let component: ApodComponent;
  let fixture: ComponentFixture<ApodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  getApod(date:string): void{

    //If the date is falsy, use today's date
    if(!date){
      date = new Date().toISOString().slice(0,10);
    }
  
    this.apodService.getApod(date).subscribe(
      (response:any)=>{
        this.apod = response;
        this.date = this.randomDate(new Date(1995,5,16), new Date());
        console.log(this.apod);
      }
    );




  
  }



});  // end describe




