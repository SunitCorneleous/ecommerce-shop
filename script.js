$(document).ready(function () {
  $.ajax({
    url: "https://fakestoreapi.com/products",
    method: "GET",
    success: function (data) {
      //   console.log(data);

      BindProductsList(data);
    },
    error: function (xhr, status, error) {
      console.error("Error:", error);
    },
  });
});

function BindProductsList(products) {
  let productList = "";

  productList = "<div class='product-list'>";
  products.forEach((item) => {
    console.log(item);
    // productList += "<div class='product-list'>";
    productList += "<div class='product-card dark'>";
    productList +=
      "<img class='product-img' src='" +
      item.image +
      "' width='380' height='370'>";
    productList += "<h5 class='product-title dark'>" + item.title + "</h5>";
    productList +=
      "<p class='product-description dark'>" +
      item.description.slice(0, 130) +
      "..." +
      "</p>";
    productList += "</div>";
    // productList += "</div>";
  });
  productList += "</div>";

  $("#main-container").html(productList);
}
