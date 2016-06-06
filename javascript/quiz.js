var tree = function() {
  var pinetree = [];
  pinetree[inputHeight.value] = inputChar.value;
// (I need to link the input of the html block (class=character) here...)
  console.log("pinetree", pinetree);

  console.log("pinetree.length", pinetree.length);

  for (var j = 0; j < pinetree.length; j++) {
    pinetree[j] = " ";
  }
    var newHeight = inputHeight.value - 1

  for (var i = 0; i < inputHeight.value; i++) {
    // console.log("height", height);
    pinetree[newHeight - i] = inputChar.value;

    pinetree[newHeight + i] = inputChar.value;


   
    // (I need to link the input of the html block (class=character) here...)

    var pineOutput = pinetree.join("");
    console.log(pineOutput);


    document.getElementById('display').innerHTML += '<p>' + pineOutput;
    // need a statement here to send the output tree to the webpage! 
    // this doesnt work well...
  }
};

// tree(7);

// *** I need to link the input in the html block (class= height) to the variable "tree" above.
// enter the integer for the height of your tree above

// thoughts...

var inputHeight = document.getElementById ("inputHeight");

var inputChar = document.getElementById ("inputChar");

var submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", tree);








