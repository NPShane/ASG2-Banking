$(function () {
  var settings = {
    async: true,
    crossDomain: true,
    url: "https://asg2playpal-d1ec.restdb.io/rest/users",
    method: "GET",
    headers: {
      "content-type": "application/json",
      "x-apikey": "63e3acee478852088da67ec1",
      "cache-control": "no-cache",
    },
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
});
