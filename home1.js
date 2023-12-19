let itemCount = 0;

function addToCart() {
  itemCount++; 
  updateBagIcon();
}


function updateBagIcon() {
  const bagIcon = document.getElementById('bagIcon');
  bagIcon.innerText = itemCount.toString();
}

document.querySelector("a[href='#footer']").addEventListener("click", function(e) {
  e.preventDefault();
  document.querySelector("#footer").scrollIntoView({ behavior: "smooth" });
});

const cart = {
  items: [],
  total: 0,
};

