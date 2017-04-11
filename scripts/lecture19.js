// show and hide the full adress div of the form when checking the checkbox
function showFullAdress() {
  document.getElementById('fullAdressCheckbox').onclick = function () {
    if (document.getElementById('fullAdressCheckbox').checked) {
      document.getElementById('fullAdress').style.display = "block";
    } else {
      document.getElementById('fullAdress').style.display = "none";
    }
  };
}

// hide the full adress div at initial page load
document.getElementById('fullAdress').style.display = "none";

// showFullAdress fucntion is called on pageload
window.onload = function() {
  showFullAdress();
}
