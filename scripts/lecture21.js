// adding class example to DOM Element with id content
$('#content').addClass('example');

// find class and add another class to this class
$('.example').addClass('blueBackground');

// find specific tag and apply class to all of the tags
$('li').addClass('example');

// find last li tag and apply class to it
$('li:last').addClass('blueBackground');

// find content in specific p tag and apply class to it
$("p:contains('ganz')").addClass('yellowBackground');

// hide content div after four seconds
$('#content').hide(4000);

// fadeOut menu div after four seconds
$('#menu').fadeOut(4000);
