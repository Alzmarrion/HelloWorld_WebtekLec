var in1 = document.getElementById("text1");
var in2 = document.getElementById("text2");
var frCss = document.getElementById("framecss");

function run() {
    frCss.srcdoc =  in1.value+in2.value;
}