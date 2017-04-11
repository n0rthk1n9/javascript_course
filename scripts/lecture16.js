// save element with id menu
var menu = document.getElementById('menu');
// output several values of the saved array with dom element inside
console.log('Dieses Element ist vom Typ', menu.nodeType);
console.log('Innerhalb dieses Elementes befindet sich folgendes HTML', menu.innerHTML);
console.log('Dieses Element hat', menu.childNodes, 'als Kind-Elemente');
console.log('Die Anzahl der Kind-Elemente beträgt', menu.childNodes.length);

// save all link elements in array
var links = document.getElementsByTagName('a');
// search for the word kirsche in all link hrefs
for (var i = 0; i < links.length; i++) {
  console.log((links[i].href.search('kirsche') > 0) ? 'Das Wort \"Kirsche\" ' +
              'befindet sich in Link Nummer ' + (i + 1) : 'Das Wort \"Kirsche\" ' +
              'befindet sich nicht in Link Nummer ' + (i + 1));
}
