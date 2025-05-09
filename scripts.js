
// ----------------------humburger menu-------------------
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// ------------------------------------main hero section-------------
  const hero = document.getElementById('hero');
  const images = [
    'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1470&q=80', // Laptop
    'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1470&q=80' , // Monitor
    'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1470&q=80'
  ];
  
  let i = 0;

  // Set initial background image or color
  hero.style.backgroundImage = `url(${images[i]})`;

  setInterval(() => {
    hero.style.backgroundImage = `url(${images[i]})`; // Update the background image
    i = (i + 1) % images.length; // Loop through the images
  }, 3000); // Change image every 3 seconds

  let inputSearch = document.getElementById("input-search");

inputSearch.addEventListener("input",()=>{
    this.Style.backgroundColor='#f0f8ff';
});




// -----------------------------------------------------------make test
// Sample Products
const products = [
  { id: 1, name: "HP Elitebook", price: 399, category: "hp", img: "images/com_9.webp" },
  { id: 2, name: "MacBook Pro", price: 1299, category: "mac", img: "images/mac.jpg" },
  { id: 3, name: "Acer Aspire", price: 499, category: "acer", img: "images/acer.jpg" },
  { id: 4, name: "HP Pavilion", price: 699, category: "hp", img: "images/hp.jpg" }
];

// DOM Elements
const productList = document.getElementById("productList");
const categoryFilter = document.getElementById("categoryFilter");
const priceSort = document.getElementById("priceSort");

// Render Products
function displayProducts(data) {
  productList.innerHTML = "";
  data.forEach(p => {
    productList.innerHTML += `
      <div class="card1">
        <img class="computer-images" src="${p.img}" alt="${p.name}">
        <a class="Price">${p.name} <br> Price $${p.price}</a>
        <button class="add-to-cart" data-id="${p.id}">Add to Cart</button>
      </div>`;
  });

  // Bind Add to Cart Buttons
  document.querySelectorAll(".add-to-cart").forEach(btn => {
    btn.addEventListener("click", () => addToCart(+btn.dataset.id));
  });
}

// Filter + Sort Logic
function applyFilters() {
  let filtered = [...products];

  const category = categoryFilter.value;
  const sort = priceSort.value;

  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  if (sort === "low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "high") {
    filtered.sort((a, b) => b.price - a.price);
  }

  displayProducts(filtered);
}

// Cart Logic
function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = products.find(p => p.id === id);
  const found = cart.find(item => item.id === id);

  if (found) {
    found.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} added to cart!`);
}

// Event Listeners
categoryFilter.addEventListener("change", applyFilters);
priceSort.addEventListener("change", applyFilters);

// Initial Load
displayProducts(products);
