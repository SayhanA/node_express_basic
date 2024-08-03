if (window.location.href === "http://localhost:4000/") {
  const shopLink = document.querySelector(".links li:first-child a");
  shopLink.classList = "active";
}
if (window.location.href === "http://localhost:4000/admin/add-product") {
  const element = document.getElementById("add_product");
  element.classList = "active";
}
