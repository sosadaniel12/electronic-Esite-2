$(document).ready(function () {
  $(".sidenav").sidenav();
});

$(".BuyForm .AddToCart").on("click", function (event) {
  event.preventDefault();

  var $form = $(this).closest(".BuyForm");

  $.ajax({
    type: "POST",
    url: "/cart",

    data: $form.serializeObject(),
    success: function () {
      $.ajax({
        type: "GET",
        url: "/interface/MiniCart",
        success: function (data) {
          $(".MiniCartContainer").html(data);
        },
      });
    },
  });
});
