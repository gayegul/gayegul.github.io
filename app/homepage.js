$(document).ready(function() {
  var arrayOfBoxes = [];
  function createBoxes() {
    for(var i = 0; i < 84; i++) {
      var newBox = $('<div>').addClass('smallBox').css({backgroundColor: assignColor(), opacity: 0.3});
      $('#bigBox').append(newBox);
      arrayOfBoxes.push(newBox);
    }
  }

  function assignBox() {
    var randomBoxNumber = Math.floor(Math.random() * (arrayOfBoxes.length));
    arrayOfBoxes[randomBoxNumber].animate({backgroundColor: assignColor(), opacity: 1}, 700).animate({backgroundColor: assignColor(), opacity: 0.3}, 4000);
  }

  function assignColor() {
    var range1 = Math.floor(Math.random() * 50);
    var range2 = Math.floor(100 + Math.random() * 256);
    var range3 = Math.floor(100 + Math.random() * 256);
    return "rgb(" + range1 + "," + range2 + "," + range3 + ")";
  }

  createBoxes();
  setInterval(assignBox, 200);
});
