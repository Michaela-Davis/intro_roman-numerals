//Symbol  Value
 // I       1
 // V       5
 // X       10
 // L       50
 // C       100
 // D       500
 // M       1,000

$(document).ready(function() {
  $("form.roman").submit(function(event){
    event.preventDefault();

    var input = parseInt($("#user_input").val());
    var roman_numerals = ["I", "V", "X", "L", "C", "D", "M"];
    var numbers = [1, 5, 10, 50, 100, 500, 1000];
    var output = "";

    if (input > 3999) {
      alert("Please enter a value between 1 and 3999")
    }

    for (var i = 0; i <= numbers.length; i++) {
      while (input%numbers[i] < input) {
        output += roman_numerals[i];
        input -= numbers[i];
      }
    }

    $("#output").text(output);
  });
});
