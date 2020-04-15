window.onload = function () {
  var query = ".google-auto-placed, .ap_container, .adsbygoogle";

  var element = document.querySelector(query);

  while (element) {
    element.parentNode.removeChild(element);
    element = document.querySelector(query);
  }
};
