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

    if (input > 3999) {
      alert("Please enter a value up to 3999")
    }

    console.log(input);
  });
});
