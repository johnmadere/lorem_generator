var text = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
];

document.getElementById("generate").addEventListener("click", generateText);

function generateText() {
    var numPara = parseInt(document.getElementById("paragraphs").value);
    var tempText = ""
    for(i = 0; i < numPara; i++) {
        var idx = Math.floor(Math.random() * text.length)
        tempText += text[idx]
    }
    document.getElementById("generatedText").textContent = tempText;
}