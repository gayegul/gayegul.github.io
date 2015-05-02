'use strict';

$(function() {
  for(var i = 0; i < 65; i++) {
    var newBox = document.createElement("div");
    newBox.className = "smallBox";
    document.getElementById("bigBox").appendChild(newBox);
    newBox.onmouseover = function() {
      var newColor = "rgb(" + Math.floor(Math.random()*50) + "," + Math.floor(100 + Math.random()*256) + "," + Math.floor(100 + Math.random()*256) + ")";
      this.style.backgroundColor = newColor;
    }
  }

  $(".navItems").hover(function(element) {
    $(element).removeClass("navItems").addClass("active");
  });
});
