$(document).ready(function(){
 $(".close-cart").click(function(){
  $(".cart").hide();
 });
//  account product
$('.cart-remove-item').click(function(){
$("#1").hide();
});
// password account
$("#old-slash-password").click(function(){
  $("#old-slash-password").hide();
  $("#old-eye-password").show();
  $("#old-pass").attr("type","text")
});
$("#old-eye-password").click(function(){
  $("#old-slash-password").show();
  $("#old-eye-password").hide();
  $("#old-pass").attr("type","password")
});
$("#same-slash-password").click(function(){
  $("#same-slash-password").hide();
  $("#same-eye-password").show();
  $("#newpassword").attr("type","text")
});
$("#same-eye-password").click(function(){
  $("#same-slash-password").show();
  $("#same-eye-password").hide();
  $("#newpassword").attr("type","password")
});
$("#re-slash-password").click(function(){
  $("#re-slash-password").hide();
  $("#re-eye-password").show();
  $("#conpassword").attr("type","text")
});
$("#re-eye-password").click(function(){
  $("#re-slash-password").show();
  $("#re-eye-password").hide();
  $("#conpassword").attr("type","password")
});
$("#passwod_change").click(function(event){
 const conpassword = $("#conpassword").val();
 const newpassword =$("#newpassword").val()
 if(conpassword==""|| newpassword=="")
 {
 
  Swal.fire("Enter Password!");
 
 }else if (newpassword.length !== 6 || conpassword.length !== 6 || newpassword !== conpassword) 
 {
  Swal.fire("Enter samepassword & Max.6digit Enter");
 }else{
  Swal.fire("sucess!");
 }

});
 // shopping cart
 $("#cart-item").click(function(){
  $(".cart").hide();
});

// shopping cart cal
$("#product_qty").click(function(){
  const product_price= $("#product_price").text();
  const product_qty=$("#product_qty").val();
  const total=product_qty * product_price;
  $("#total").text("$"+total);
  $("#total").css({ "color": "#28a8af", "font-size": "16px", "font-weight": "500" });
  $("#total").css("fontweight","bold")
  $(".subprice").text("$"+total);
  const subprice =$(".subprice").text();
  const shipping_charge = $("#shipping_charge").text();
  
  const total_fullcharge = subprice + shipping_charge;
  
  $("#total_fullcharge").text(total_fullcharge);

 });

// checkout
$(".shipping_content").click(function(){
  $("#shipping_content").show();
  $("#order_overview_content").hide();
  $("#payment_content").hide();
  $("#order_complete_content").hide();
  $("#li_0").addClass("active")
  $("#li_1").removeClass("active")
  $("#li_2").removeClass("active")
  $("#li_3").removeClass("active")
  $("#li_4").removeClass("active")
});
$(".order_overview_content").click(function(){
  $("#order_overview_content").show();
  $("#shipping_content").hide();
  $("#payment_content").hide();
  $("#order_complete_content").hide();
  $("#li_0").removeClass("active")
  $("#li_1").addClass("active")
  $("#li_2").removeClass("active")
  $("#li_3").removeClass("active")
  $("#li_4").removeClass("active")
});
$(".payment_content").click(function(){
  $("#payment_content").show();
  $("#order_overview_content").hide();
  $("#shipping_content").hide();
  $("#order_complete_content").hide();
  $("#li_0").removeClass("active")
  $("#li_1").removeClass("active")
  $("#li_2").addClass("active")
  $("#li_3").removeClass("active")
  $("#li_4").removeClass("active")
});
$(".order_complete_content").click(function(){
  $("#order_complete_content").show();
  $("#shipping_content").hide();
  $("#payment_content").hide();
  $("#order_overview_content").hide();
  $("#li_0").removeClass("active")
  $("#li_1").removeClass("active")
  $("#li_2").removeClass("active")
  $("#li_3").addClass("active")
  $("#li_4").addClass("active")
});
$(".cart-remove-item").click(function(){
  $("#order_1").hide();
});
// Pagination
var itemsPerPage = 8; // Define how many items you want to display per page
var $items = $('.item-width'); // Select all elements with the item-width class
var itemCount = $items.length; // Get the total number of items
var totalPages = Math.ceil(itemCount / itemsPerPage); // Calculate the total number of pages

// Hide all items initially
$items.hide();

// Show the first page of items
$items.slice(0, itemsPerPage).show();

// Generate pagination buttons
for (var i = 1; i <= totalPages; i++) {
    $('<button class="pagination-button">' + i + '</button>').appendTo('#pagination-numbers');
}

// Handle pagination button click
$('.pagination-button').on('click', function() {
    var pageNumber = $(this).text(); // Get the clicked page number
    var startIndex = (pageNumber - 1) * itemsPerPage; // Calculate the start index of items to show
    var endIndex = startIndex + itemsPerPage; // Calculate the end index of items to show

    // Hide all items
    $items.hide();

    // Show items for the clicked page
    $items.slice(startIndex, endIndex).show();
});
});
document.addEventListener('DOMContentLoaded', function() {
  // Get the elements
  var priceElement = document.querySelector('.price');
  var quantityElement = document.querySelector('.quantity_cart');
  var totalElement = document.getElementById('total');

  // Initial calculation
  updateTotal();

  // Add an event listener to the quantity dropdown
  quantityElement.addEventListener('change', function() {
    updateTotal();
  });

  // Function to update the total
  function updateTotal() {
    var price = parseFloat(priceElement.textContent.slice(1)); // Remove the dollar sign and convert to number
    var quantity = parseInt(quantityElement.value);
    var total = price * quantity;

    // Update the total element
    totalElement.textContent = '$' + total.toFixed(2); // Display total with 2 decimal places
  }
});
