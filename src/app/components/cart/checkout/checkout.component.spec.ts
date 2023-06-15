import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CheckoutComponent } from "./checkout.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

describe("CheckoutComponent", () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckoutComponent],
      imports: [FormsModule, ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
