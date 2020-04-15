window.onload = function () {
  alert("extension");

  var main = document.querySelector('.sidebar-right [role="main"]');
  main.style.width = "100%";
  main.style.zIndex = "100";

  var complementary = document.querySelector(
    '.sidebar-right [role="complementary"]'
  );
  complementary.parentNode.removeChild(complementary);

  var version_switcher = document.getElementById("version-switcher");
  version_switcher.parentNode.removeChild(version_switcher);
};
