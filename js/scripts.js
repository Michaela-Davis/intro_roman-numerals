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
    var roman_numerals = ["M", "CM", "D", "CD", "C", "XL", "L", "XL", "X", "IX", "V", "IV", "I"];
    var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var output = "";

    if (input > 3999 || input < 0) {
      alert("Please enter a value between 1 and 3999")
    }

    for (var i = 0; i <= numbers.length; i++) {
      while (input % numbers[i] < input) {
        output += roman_numerals[i];
        input -= numbers[i];
      }
    }

    $("#output").text(output);
  });
});
