var text ="this is a text";
var  text2= "this is a table";
var par= document.getElementById("p1");
var image= document.getElementById("i");
var table= document.getElementById("table");

par.onclick = function(){
par.innerHTML=text;
}

image.onmouseenter = function()
{
    image.src="cdaoud.jpg";
}

table.onmouseenter = function()
{
    par.innerHTML="this is a table";
}