import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { ProductItemComponent } from "./product-item.component";

describe("ProductItemComponent", () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductItemComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: []
    });
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
