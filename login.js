$(document).ready(function () {
  console.log("jQuery loaded");
  const APIKey = "63e3acee478852088da67ec1";
  $("#login-submit").on("click", function (e) {
    e.preventDefault();
    console.log("form submitted");
    const username = $("#username").val();
    const password = $("#password").val();
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://asg2playpal-d1ec.restdb.io/rest/users",
      "method": "GET",
      "headers": {
        "content-type": "application/json",
        "x-apikey": APIKey,
        "cache-control": "no-cache"
      }
    }
    
    $.ajax(settings).done(function (response) {
      console.log(response);
    });
  });
});
