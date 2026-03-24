document.getElementById("analyzeBtn").addEventListener("click", function(){

    var text = document.getElementById("inputText").value.trim();

    if(text === ""){
        alert("Please enter some text to analyze.");
        return;
    }

    var charCount = text.length;

    var words = text.split(/\s+/); 
    var wordCount = words.length;

    var reversedText = text.split("").reverse().join("");

    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "<b>Total Characters:</b> " + charCount + "<br>" +
                          "<b>Total Words:</b> " + wordCount + "<br>" +
                          "<b>Reversed Text:</b> " + reversedText;
});