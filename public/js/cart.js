var addtoCart = document.getElementById("shop");
for (var i = 0; i < addtoCart.length; i++) {
  var button = addtoCart[i];
  button.addEventListener("click", addtoCartClicked);
}

function addtoCartClicked(event) {
  var button = event.target;
  var shopItem = button.parentElement.parentElement;
  var title = shopItem.getElementsbyClassName("card-body")[0].innerText;
  console.log(title);
}
