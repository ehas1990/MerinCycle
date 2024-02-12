$(document).ready(function () {
  $(".close-cart").click(function () {
    $(".cart").hide();
  });
  //  account product
  $(".cart-remove-item").click(function () {
    $("#1").hide();
  });
  // password account
  $("#old-slash-password").click(function () {
    $("#old-slash-password").hide();
    $("#old-eye-password").show();
    $("#old-pass").attr("type", "text");
  });
  $("#old-eye-password").click(function () {
    $("#old-slash-password").show();
    $("#old-eye-password").hide();
    $("#old-pass").attr("type", "password");
  });
  $("#same-slash-password").click(function () {
    $("#same-slash-password").hide();
    $("#same-eye-password").show();
    $("#newpassword").attr("type", "text");
  });
  $("#same-eye-password").click(function () {
    $("#same-slash-password").show();
    $("#same-eye-password").hide();
    $("#newpassword").attr("type", "password");
  });
  $("#re-slash-password").click(function () {
    $("#re-slash-password").hide();
    $("#re-eye-password").show();
    $("#conpassword").attr("type", "text");
  });
  $("#re-eye-password").click(function () {
    $("#re-slash-password").show();
    $("#re-eye-password").hide();
    $("#conpassword").attr("type", "password");
  });
  $("#passwod_change").click(function (event) {
    const conpassword = $("#conpassword").val();
    const newpassword = $("#newpassword").val();
    if (conpassword == "" || newpassword == "") {
      Swal.fire("Enter Password!");
    } else if (
      newpassword.length !== 6 ||
      conpassword.length !== 6 ||
      newpassword !== conpassword
    ) {
      Swal.fire("Enter samepassword & Max.6digit Enter");
    } else {
      Swal.fire("sucess!");
    }
  });
  // shopping cart
  $("#cart-item").click(function () {
    $(".cart").hide();
  });

  // shopping cart cal

 
    // Function to calculate subtotal for each item
   
    function calculateSubtotal() {
     
      var quality_value = $(".quality_value").data("value");
      var price = parseFloat($(".price[data-value]").data("value"));
      $("#quality_plus").click(function () {
        quality_value = quality_value + 1;
        var subtotal = price * quality_value;
        $(".quality_value").html(quality_value);
        $("#total").text(" ₹" + subtotal);
        $(".subprice").text(" ₹" + subtotal);
        $("#total").css({
          color: "#d32821",
          fontSize: "16px",
          fontWeight: "500",
        });
        $(".subprice").css({
          color: "#222",
          fontSize: "16px",
          fontWeight: "500",
        });
          // Display the subtotal
      
      const shipping_charge = parseFloat($("#shipping_charge").data("value"));
      //  const subprice= parseFloat($(".subprice").text());
      const total_fullcharge = shipping_charge + subtotal;
      $("#total_fullcharge_display").text(" ₹" + total_fullcharge);
        $("#total").html(subtotal);
        console.log(subtotal);
      });

      $("#quality_minus").click(function () {
        quality_value = quality_value - 1;
        var subtotal = price * quality_value;
        $(".quality_value").html(quality_value);
        $("#total").html(subtotal);
        $("#total").text(" ₹" + subtotal);
        $(".subprice").text(" ₹" + subtotal);
        $("#total").css({
          color: "#d32821",
          fontSize: "16px",
          fontWeight: "500",
        });
        $(".subprice").css({
          color: "#222",
          fontSize: "16px",
          fontWeight: "500",
        });
          // Display the subtotal
      
      const shipping_charge = parseFloat($("#shipping_charge").data("value"));
      //  const subprice= parseFloat($(".subprice").text());
      const total_fullcharge = shipping_charge + subtotal;
      $("#total_fullcharge_display").text(" ₹" + total_fullcharge);
        console.log(subtotal);
      });
      // Get the price and quantity values

     
    
    }

    // Call the function initially
    calculateSubtotal();

    // Add event listener to quantity input for dynamic calculation
    $("#product_qty").change(calculateSubtotal);
  

  // checkout
  $(".shipping_content").click(function () {
    $("#shipping_content").show();
    $("#order_overview_content").hide();
    $("#payment_content").hide();
    $("#order_complete_content").hide();
    $("#li_0").addClass("active");
    $("#li_1").removeClass("active");
    $("#li_2").removeClass("active");
    $("#li_3").removeClass("active");
    $("#li_4").removeClass("active");
  });
  $(".order_overview_content").click(function () {
    $("#order_overview_content").show();
    $("#shipping_content").hide();
    $("#payment_content").hide();
    $("#order_complete_content").hide();
    $("#li_0").removeClass("active");
    $("#li_1").addClass("active");
    $("#li_2").removeClass("active");
    $("#li_3").removeClass("active");
    $("#li_4").removeClass("active");
  });
  $(".payment_content").click(function () {
    $("#payment_content").show();
    $("#order_overview_content").hide();
    $("#shipping_content").hide();
    $("#order_complete_content").hide();
    $("#li_0").removeClass("active");
    $("#li_1").removeClass("active");
    $("#li_2").addClass("active");
    $("#li_3").removeClass("active");
    $("#li_4").removeClass("active");
  });
  $(".order_complete_content").click(function () {
    $("#order_complete_content").show();
    $("#shipping_content").hide();
    $("#payment_content").hide();
    $("#order_overview_content").hide();
    $("#li_0").removeClass("active");
    $("#li_1").removeClass("active");
    $("#li_2").removeClass("active");
    $("#li_3").addClass("active");
    $("#li_4").addClass("active");
  });
  $(".cart-remove-item").click(function () {
    $("#order_1").hide();
  });
  $("#order_next1").click(function () {
    $("#order_overview_content").show();
    $("#shipping_content").hide();
    $("#payment_content").hide();
    $("#order_complete_content").hide();
    $("#li_0").removeClass("active");
    $("#li_1").addClass("active");
    $("#li_2").removeClass("active");
    $("#li_3").removeClass("active");
    $("#li_4").removeClass("active");
  });
  $("#order_next2").click(function () {
    $("#payment_content").show();
    $("#order_overview_content").hide();
    $("#shipping_content").hide();
    $("#order_complete_content").hide();
    $("#li_0").removeClass("active");
    $("#li_1").removeClass("active");
    $("#li_2").addClass("active");
    $("#li_3").removeClass("active");
    $("#li_4").removeClass("active");
  });
  $("#order_next3").click(function () {
    $("#order_complete_content").show();
    $("#shipping_content").hide();
    $("#payment_content").hide();
    $("#order_overview_content").hide();
    $("#li_0").removeClass("active");
    $("#li_1").removeClass("active");
    $("#li_2").removeClass("active");
    $("#li_3").addClass("active");
    $("#li_4").addClass("active");
  });
  // whishlist
  var wishlist_quality_value =parseFloat( $(".wishlist_quality_value").data("value"));
  var price = parseFloat($(".price[data-value]").data("value"));
  $("#wishlist_quality_plus").click(function(){
    wishlist_quality_value = wishlist_quality_value + 1;
    $(".wishlist_quality_value").text(wishlist_quality_value);
  });
  $("#wishlist_quality_minus").click(function(){
    wishlist_quality_value = wishlist_quality_value - 1;
    $(".wishlist_quality_value").text(wishlist_quality_value);
  });
  // Pagination
  var itemsPerPage = 8; // Define how many items you want to display per page
  var $items = $(".item-width"); // Select all elements with the item-width class
  var itemCount = $items.length; // Get the total number of items
  var totalPages = Math.ceil(itemCount / itemsPerPage); // Calculate the total number of pages

  // Hide all items initially
  $items.hide();

  // Show the first page of items
  $items.slice(0, itemsPerPage).show();

  // Generate pagination buttons
  for (var i = 1; i <= totalPages; i++) {
    $('<button class="pagination-button">' + i + "</button>").appendTo(
      "#pagination-numbers"
    );
  }

  // Handle pagination button click
  $(".pagination-button").on("click", function () {
    var pageNumber = $(this).text(); // Get the clicked page number
    var startIndex = (pageNumber - 1) * itemsPerPage; // Calculate the start index of items to show
    var endIndex = startIndex + itemsPerPage; // Calculate the end index of items to show

    // Hide all items
    $items.hide();

    // Show items for the clicked page
    $items.slice(startIndex, endIndex).show();
  });
    // contact page
    $("#contact_submit").click(function(event){
      const ename= $("#ename").val().trim();
      const email=$("#email").val();
      const contact=$("#contact").val();
      const message=$("#message").val();
    if(ename==""|| email=="" || contact=="" || message=="")
  {
    
    $("#ename_text").html("Enter Name");
    $("#ename_text").css({color:"red",fontSize:"small"});
    $("#email_text").html("Enter Email");
    $("#email_text").css({color:"red",fontSize:"small"});
    $("#contact_text").html("Enter Contact");
    $("#contact_text").css({color:"red",fontSize:"small"});
    $("#message_text").html("Enter message");
    $("#message_text").css({color:"red",fontSize:"small"});
    event.preventDefault();
  } else
  {

    $("#ename_text").html(ename.trim());
    $("#ename_text").css({color:"green",fontSize:"small"});
    $("#email_text").html(email.trim());
    $("#email_text").css({color:"green",fontSize:"small"});
    $("#contact_text").html(contact.trim());
    $("#contact_text").css({color:"green",fontSize:"small"});
    $("#message_text").html(message.trim());
    $("#message_text").css({color:"green",fontSize:"small"});
   
  }
 });
});
document.addEventListener("DOMContentLoaded", function () {
  // Get the elements
  var priceElement = document.querySelector(".price");
  var quantityElement = document.querySelector(".quantity_cart");
  var totalElement = document.getElementById("total");

  // Initial calculation
  updateTotal();

  // Add an event listener to the quantity dropdown
  quantityElement.addEventListener("change", function () {
    updateTotal();
  });

  // Function to update the total
  function updateTotal() {
    var price = parseFloat(priceElement.textContent.slice(1)); // Remove the dollar sign and convert to number
    var quantity = parseInt(quantityElement.value);
    var total = price * quantity;

    // Update the total element
    totalElement.textContent = "$" + total.toFixed(2); // Display total with 2 decimal places
  }


});
