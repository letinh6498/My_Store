import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddToCartComponent } from "./add-to-cart.component";

describe("AddToCartComponent", () => {
  let component: AddToCartComponent;
  let fixture: ComponentFixture<AddToCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddToCartComponent],
      imports: [FormsModule, ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(AddToCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
