var btnTranslate = document.querySelector(".btn-translate");

var txtInput = document.querySelector("#textArea");
var output = document.querySelector('#output');

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslateURL(text) {
    return serverURL + "?" + "text=" +text
}
console.log(getTranslateURL)

function clickHandler() {
    var inputText = txtInput.value; // taking input

    // calling server for processing
    fetch(getTranslateURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            output.innerText = translatedText; // output
           })
};

btnTranslate.addEventListener("click", clickHandler)


// ********************************






// for tags like textarea query will be- document.querySelector("textarea")
// for class- document.querySelector(".btn-primary")
// for id- document.querySelector("#input-btn")
// for input element with an attribute name='translator'- document.querySelector("input[name='translator']")