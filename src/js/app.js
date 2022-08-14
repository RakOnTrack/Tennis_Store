/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Eric
 *      Student ID: 180211211
 *      Date:       <SUBMISSION_DATE>
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");

// making category buttons in the nav:
// load to the nav with id of menu.

window.onload = function () {
  let menu = document.querySelector("#menu");

  //loop through the buttons, adding them to the menu element.
  categories.forEach((category) => {
    let button = document.createElement("button");
    button.innerText = category.name;
    button.id = category.id;
    console.log(button);
    // button.addEventListener("click", printButtonDetails);
    button.onclick = function () {
      selectCategory(category);
    };

    // button.addEventListener("click", selectCategory);
    menu.appendChild(button);
  });
  document.querySelector("#c1").onclick();
};

function selectCategory(category) {
  document.querySelector("#selected-category").innerHTML = category.name;
  let categoryProducts = document.querySelector("#category-products");
  let filtered_products = products.filter(function (product) {
    return product.categories.includes(category.id) && !product.discontinued;
  });

  categoryProducts.innerHTML = "";

  filtered_products.forEach(function (product) {
    createProductCard(product);
  });
}

function createProductCard(product) {
  let categoryProducts = document.querySelector("#category-products");
  // Create a <div> to hold the card
  const card = document.createElement("div");
  // Add the .card class to the <div>
  card.classList.add("card");
  card.onclick = function () {
    console.log(product);
  };

  // Create a product image, use the .card-image class
  const productImage = document.createElement("img");
  productImage.src = product.photo;
  productImage.classList.add("card-image");
  card.appendChild(productImage);
  // create div for card details
  const card_details = document.createElement("div");
  card.classList.add("card_details");
  card.appendChild(card_details);

  // create span for product name
  const name = document.createElement("span");
  name.innerHTML = product.title;
  card.classList.add("name");
  card_details.appendChild(name);

  // create span for product description
  const desc = document.createElement("p");
  desc.innerHTML = product.description;
  card_details.appendChild(desc);

  // create span for product price
  const price = document.createElement("div");
  let formatedPrice = new Intl.NumberFormat().format(product.price / 100.0);
  price.innerHTML = `$${formatedPrice} CAD`;
  card.classList.add("price");
  card_details.appendChild(price);
  categoryProducts.appendChild(card);

  return card;
}
