const bakeryProducts = [
  { name: "Fresh Bread", category: "Bread" },
  { name: "Cookies", category: "Pastries" },
  { name: "Custom Cakes", category: "Cakes" }
];

const bakerySettings = {
  storageKey: "northStarFavorite"
};

function saveFavorite(productName) {
  localStorage.setItem(bakerySettings.storageKey, productName);
  showFavorite(productName);
}

function showFavorite(productName) {
  const message = document.getElementById("favoriteMessage");

  if (message) {
    message.textContent = "Your favorite is " + productName + "!";
  }
}

function loadFavorite() {
  const saved = localStorage.getItem(bakerySettings.storageKey);

  if (saved) {
    showFavorite(saved);
  }
}

function displayProducts() {
  const container = document.getElementById("favoriteProducts");

  if (!container) return;

  bakeryProducts.forEach(function(product) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "Favorite " + product.name;

    button.addEventListener("click", function() {
      saveFavorite(product.name);
    });

    container.appendChild(button);
  });

  loadFavorite();
}

document.addEventListener("DOMContentLoaded", displayProducts);
