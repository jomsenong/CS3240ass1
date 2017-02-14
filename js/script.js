function myFunction() {
    var x = document.getElementById("myNavigation");
    if (x.className === "navigation") {
        x.className += " responsive";
    } else {
        x.className = "navigation";
    }
}

$(function() {
  $("form[name='registration']").validate({
     rules: {
      email: {
        required: true,
        email: true
    },
       messages: {
      email: "Please enter a valid email address"
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
});