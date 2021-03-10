window.$("#btn").click(function () {
  "use strict";
  window.$("#ovrly").fadeIn();
  window.$("#login").show();
  window.$("#login").animate({
    top: "100"
  });
});
window.$("#btn1").click(function () {
  "use strict";
  window.$open("https://get2u.org/order_confirmation.html");
});
window.$("#btn2").click(function () {
  "use strict";
  window.$("#apply").show();
  window.$("#login").hide();
  window.$("#apply").animate({
    top: "100"
  });
});
window.$("#ovrly").click(function () {
  "use strict";
  window.$("#ovrly").hide();
  window.$("#login").hide();
  window.$("#apply").hide();
  window.$("#login").css("top", "-1.6vw");
});
$('a[href="#"]').click(function () {
  "use strict";
  window.$("#apply").show();
  window.$("#login").hide();
  window.$("#apply").animate({
    top: "100"
  });
});
$(function () {
  $("#toggle_pwd").click(function () {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var type = $(this).hasClass("fa-eye-slash") ? "text" : "password";
    $("#txtPassword").attr("type", type);
  });
});
$(function () {
  $("#back_button").click(function () {
    window.$("#login").show();
    window.$("#apply").hide();
    window.$("#login").animate({
      top: "100"
    });
  });
});

function Thank_you_note() {
  alert("Thanks for using Get2U!");
}
function login_page() {
  window.open("order_confirmation.html");
}