$(document).ready(function () {
  $(".sidenav").sidenav();
});

// $(".btn").on("click", function (event) {
//   event.preventDefault();

//   var $form = $(this).closest(".card");

//   $.ajax({
//     type: "POST",
//     url: "/cart",

//     data: $form.serializeObject(),
//     success: function () {
//       $.ajax({
//         type: "GET",
//         url: "/interface/MiniCart",
//         success: function (data) {
//           $(".MiniCartContainer").html(data);
//         },
//       });
//     },
//   });
// });
