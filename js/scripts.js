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

    if (input > 3999 || input < 0) {
      alert("Please enter a value between 1 and 3999")
    }

    numbers.reverse().forEach(function(number) {
      if (input % number === 0) {
        output += "yes"
      }
    });

    $("#output").text(output);
    // if (input <= 3) {
    //   $("#output").text("I");
    // }
  });
});
