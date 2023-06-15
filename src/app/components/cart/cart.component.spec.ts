import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CheckoutComponent } from "./checkout/checkout.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CartComponent } from "./cart.component";

describe("CartComponent", () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartComponent, CheckoutComponent],
      imports: [FormsModule, ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
