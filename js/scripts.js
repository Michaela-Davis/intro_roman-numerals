// BUSINESS
var numPlaces = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
var romanNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
var output = "";

var checkWrongNum = function(input) {
  if (input > 3999 || input <= 0) {
    alert("Please enter a number between 1 and 3999")
  } else if (!input) {
    alert("Please enter a number between 1 and 3999")
  }
};

var getRoman = function(input) {
  for (var i = 0; i <= numPlaces.length; i = i + 1) {
    while ((input % numPlaces[i]) < input) {
      output = output + romanNumerals[i];
      input = input - numPlaces[i];
    }
  }

  $("p.jumbotron").show().text(output);
};

// USER

$(document).ready(function() {
  $(".roman").submit(function(event) {
    event.preventDefault();

    var input = parseInt($("#userInput").val());

    checkWrongNum(input);
    getRoman(input);
  });
});
