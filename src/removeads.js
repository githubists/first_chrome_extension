window.onload = function () {
  var query =
    '.ap_container, [class*="ads"], [class*="Ads"], [class*="-ad"], [class*="-Ad"], [class*="ad-"], [class*="Ad-"]';

  var element = document.querySelector(query);

  while (element) {
    element.parentNode.removeChild(element);
    element = document.querySelector(query);
  }
};
