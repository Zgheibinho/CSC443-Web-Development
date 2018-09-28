var first = document.getElementById("pass1");
var first = document.getElementById("pass1");
var second = document.getElementById("pass2");
var button = document.getElementById("submit");
var b = document.getElementById("h2");
button.onclick=function(){
    if(first.value==second.value)
    {
    b.style.color="green";
    }
    else
    {
    b.style.color="red";
    }
}

