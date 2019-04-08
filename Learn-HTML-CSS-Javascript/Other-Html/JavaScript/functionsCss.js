// refactor this 
var in1 = document.getElementById("text1");
var in2 = document.getElementById("text2");
var in3 = document.getElementById("text3");
var in4 = document.getElementById("text4");
var frCss = document.getElementById("framecss");
var frCss1 = document.getElementById("framecss1")

function run() {
    frCss.srcdoc =  in1.value+in2.value;
}
function run1() {
    frCss1.srcdoc = in3.value+in4.value;
}