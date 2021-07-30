import { products } from "../../src/data/product";

// eslint-disable-next-line no-undef
describe("Shoppee Cart", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });

  it("displays all the products with name and price", () => {
    cy.get("[data-qa='product-item']").should("have.length", 5);
    cy.get("[data-qa='product-item'] span.font-bold").contains(
      products[0].name
    );
    cy.get("[data-qa='product-item']").contains(`$${products[0].price}`);
  });

  it("able to add products to cart", () => {
    cy.get("[data-qa='product-item'] button").first().click();

    cy.get("[data-qa='nav-cart']").contains(1);

    cy.get("[data-qa='nav-cart']").click();
    cy.get("[data-qa='product-item']").should("have.length", 1);
  });

  it("add multiple products", () => {
    cy.get("[data-qa='product-item'] button").first().click();
    cy.get("[data-qa='nav-cart']").contains(1);

    cy.get("[data-qa='product-item'] button").first().click();
    cy.get("[data-qa='nav-cart']").contains(2);

    cy.get("[data-qa='product-item'] button").last().click();
    cy.get("[data-qa='nav-cart']").contains(3);

    cy.get("[data-qa='nav-cart']").click();
    cy.get("[data-qa='product-item']").should("have.length", 2);
  });

  it("should list all the product in the cart page with quantity", () => {
    const iteration = 2;
    for (let i = 0; i < iteration; i++) {
      cy.get("[data-qa='product-item'] button").first().click();
    }
    cy.get("[data-qa='nav-cart']").contains(2);

    cy.get("[data-qa='nav-cart']").click();
    cy.get("[data-qa='product-item']").should("have.length", 1);

    cy.get("[data-qa='product-item'] span.font-bold").contains(
      products[0].name
    );
    cy.get("[data-qa='product-item']").contains(`$${products[0].price}`);
    cy.get("[data-qa='product-item']").first().contains(`(${iteration})`);
  });

  it("should able to remove item from cart", () => {
    const iteration = 2;
    for (let i = 0; i < iteration; i++) {
      cy.get("[data-qa='product-item'] button").first().click();
    }
    cy.get("[data-qa='nav-cart']").contains(2);

    cy.get("[data-qa='product-item'] button").last().click();
    cy.get("[data-qa='nav-cart']").contains(3);

    cy.get("[data-qa='nav-cart']").click();

    cy.get("[data-qa='product-item'] button").first().click();
    cy.get("[data-qa='nav-cart']").contains(2);

    cy.get("[data-qa='product-item'] button").first().click();
    cy.get("[data-qa='product-item'] button").first().click();

    cy.get("p").contains("No Item");
  });
});
