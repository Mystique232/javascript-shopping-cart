
// Select all the necessary elements
const plusButtons = document.querySelectorAll(".fa-plus-circle");
const minusButtons = document.querySelectorAll(".fa-minus-circle");
const deleteButtons = document.querySelectorAll(".fa-trash-alt");
const heartButtons = document.querySelectorAll(".fa-heart");
const quantities = document.querySelectorAll(".quantity");
const totalPrice = document.querySelector(".total");

// Function to calculate the total price
function calculateTotal() {
  let total = 0;

  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const price = Number(
      card.querySelector(".unit-price").textContent.replace("$", "").trim()
    );

    const quantity = Number(
      card.querySelector(".quantity").textContent
    );

    total += price * quantity;
  });

  totalPrice.textContent = total + " $";
}

// Increase quantity
plusButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const quantity = button.parentElement.querySelector(".quantity");

    quantity.textContent = Number(quantity.textContent) + 1;

    calculateTotal();
  });
});

// Decrease quantity
minusButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const quantity = button.parentElement.querySelector(".quantity");

    if (Number(quantity.textContent) > 0) {
      quantity.textContent = Number(quantity.textContent) - 1;
    }

    calculateTotal();
  });
});

// Delete an item
deleteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".card-body");

    card.remove();

    calculateTotal();
  });
});

// Like and unlike an item
heartButtons.forEach((heart) => {
  heart.addEventListener("click", () => {
    if (heart.style.color === "red") {
      heart.style.color = "black";
    } else {
      heart.style.color = "red";
    }
  });
});

// Calculate the initial total
calculateTotal();
