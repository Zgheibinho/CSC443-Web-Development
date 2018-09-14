function pyramid(numberofRows) 
{
    var output="";
    for (var i = 1; i <= numberofRows; i++) {
        for (var j = 1; j <= i; j++) {
            output+="*" + "     ";
        }
        output+="<br/>"
    }
    var x= document.getElementById("p1");
    x.innerHTML= output;
} 


var x = prompt("enter number of rows");
pyramid(parseInt(x));