import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { CartItemComponent } from "./cart-item.component";
import { FormsModule } from "@angular/forms";

describe("CartItemComponent", () => {
  let component: CartItemComponent;
  let fixture: ComponentFixture<CartItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartItemComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule]
    });
    fixture = TestBed.createComponent(CartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
