//to display the modal order page
var orderModal = document.getElementById("my-modal-order-page");
var orderBtn = document.getElementById("order-button-load-page");
var orderSpan = document.getElementsByClassName("close")[0];
orderBtn.onclick = function() {
  orderModal.style.display = "block";
}
orderSpan.onclick = function() {
  orderModal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == orderModal) {
    orderModal.style.display = "none";
  }
}
// to display the select toppings page
var selectModal = document.getElementById("my-modal-select-page");
var selectSpan = document.getElementsByClassName("select-page-close")[0];
selectSpan.onclick = function() {
  selectModal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == selectModal) {
    selectModal.style.display = "none";
  }
}

$("document").ready(function(){
  $(".order-page-pizza-menu h2").click(function(){
    $("#my-modal-select-page").toggle();
    var a = $(this).contents('span');
    $("#my-modal-select-page h1").append(a.clone());
  })
});
// to rmove cart items
var removeCartItemButtons = document.getElementsByClassName("btn-danger")
for (var i = 0;i < removeCartItemButtons.length; i++){
  var button = removeCartItemButtons[i];
  button.addEventListener('click', function(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
  });
  var quantityInputs = document.getElementsByClassName("cart-quantity-imput");
  for (var i = 0;i < quantityInputs.length; i++){
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged)
  }
  var addToCartButtons = document.getElementsByClassName("shop-item-button");
  for (var i = 0;i < addToCartButtons.length; i++){
    var button = addToCartButtons[i];
    button.addEventListener("click", addToCartClicked)
  }
}
//to calculate totals
function quantityChanged(event){
  var input = event.target
  if (isNaN(input, value) || input.value < 1){
    input.value = 1;
  }
  updateCartTotal();

}
//to add items to cart
function addToCartClicked(event){
 var button = event.target;
 var shopItem = button.parentElement.parentElement;
}
// to ensue
//to update cart total
function updateCartTotal(){
  var cartItemContainer = document.getElementsByClassName("cart-items")[0];
  var cartRows = cartItemContainer.getElementsByClassName("cart-row"); [0]
  var total = 0;
  for (var i = 0;i < cartRows.length; i++){
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName("cart-price")[0];
    var quantityElement = cartRow.getElementsByClassName("cart-quantity-input")[0];
    var price = parseFloat(priceElement.innerText.replace("Kshs", "")); 
    var quantity =  quantityElement.value;
    total = total + (price * quantity)
    console.log(total)
  }
  total = Math.round(total *100)/100;
  document.getElementsByClassName("cart-total-price")[0].innertext = "Kshs " + total;
}
$(document)