var iframeOut = document.getElementById("output");
var input = document.getElementById("htmlInput");
var goBack = document.getElementById("back");

function ifrmOut() {
    iframeOut.srcdoc=input.value;
}

function back() {
    goBack.href=document.referrer;
}