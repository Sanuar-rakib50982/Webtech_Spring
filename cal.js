function press(value)
{

var display = document.getElementById("display");

display.value = display.value + value;

}

function calculate()
{

var display = document.getElementById("display");

try
{

display.value = eval(display.value);

}

catch
{

alert("Invalid Input");
display.value = "";

}

}

function clearDisplay()
{

var display = document.getElementById("display");

display.value = "";

}