// cover all functions in on eventhandler function
function eventHandler() {
  // save content div in array and change alignment attribute
  var content = document.getElementById('content');
  content.setAttribute('align', 'right');

  // define onclick function of button
  document.getElementById('changeAlignButton').onclick = function changeAlignmentOfContent() {
    // change description of button and set alignment attributes
    if (document.getElementById('changeAlignButton').innerHTML == "Ausrichtung rechts") {
      document.getElementById('changeAlignButton').innerHTML = "Ausrichtung links"
      content.setAttribute('align', 'right');
    } else {
      document.getElementById('changeAlignButton').innerHTML = "Ausrichtung rechts"
      content.setAttribute('align', 'left');
    }
  }

  // on click on button a new p tag is created and appended to div with id content
  document.getElementById('createNewDomElement').onclick = function createNewDomElement() {
    var newPTag = document.createElement('p');
    newPTag.innerHTML = 'Ich bin dynamisch aus JavaScript heraus erzeugt!';
    content.appendChild(newPTag);
  }
}

// eventhandler fucntion is called on pageload
window.onload = function() {
  eventHandler();
}
