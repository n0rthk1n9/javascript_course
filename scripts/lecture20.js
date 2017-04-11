// set new class property to div tag content
function showSetClass() {
  document.getElementById('content').onclick = function setClass() {
    if (document.getElementById('content').className == "example") {
      // remove specific className from list of class names
      document.getElementById('content').classList.remove("example");
    } else {
      document.getElementById('content').className = "example";
    }
  }
}

// showSetClass fucntion is called on pageload
window.onload = function() {
  showSetClass();
}
