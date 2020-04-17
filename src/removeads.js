window.onload = function () {
  var query =
    '.ap_container, [class*="ads"], [class*="Ads"], [class*="-ad"], [class*="-Ad"], [class*="ad-"], [class*="Ad-"], [id*="ads"], [id*="Ads"], [id*="-ad"], [id*="-Ad"], [id*="ad-"], [id*="Ad-"]';

  var element = document.querySelector(query);

  while (element) {
    element.parentNode.removeChild(element);
    element = document.querySelector(query);
  }
};
