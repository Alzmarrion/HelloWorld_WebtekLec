var iframeOut = document.getElementById("output");
var input = document.getElementById("htmlInput");
var goBack = document.getElementById("back");

function ifrmOut() {
    iframeOut.srcdoc=input.value;
}

function back() {
    goBack.href=document.referrer;
}
//="<svg width='400' height='180'><rect x='50' y='20' rx='20 ry='20' width='150' height='150' style='fill:red;stroke:black;stroke-width:5;opacity:0.5'/><svg>"