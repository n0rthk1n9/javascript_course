// cover all functions in on eventhandler function
function eventHandler() {
  // DOM Element of image
  var sunsetImage = document.getElementById('sunsetImage');
  // array with different image sources
  var sunsetImagesArray = ['pictures/sunset_1.jpg', 'pictures/sunset_2.jpg',
                           'pictures/sunset_3.jpg', 'pictures/sunset_4.jpg',
                           'pictures/sunset_5.jpg'];
  // index for selecting an sunset image source of the array
  var sunsetImagesArrayIndex = 0;
  // function for setting the source attribute of the image DOM Element based
  // on array source + index
  function changeSunsetImage() {
    sunsetImage.setAttribute("src", sunsetImagesArray[sunsetImagesArrayIndex]);
    sunsetImagesArrayIndex++;
    if (sunsetImagesArrayIndex >= sunsetImagesArray.length) {
      sunsetImagesArrayIndex = 0;
    }
  }
  // set interval in which function for changing image is called
  setInterval(changeSunsetImage, 3000);
}

// eventhandler fucntion is called on pageload
window.onload = function() {
  eventHandler();
}
