var bulb = document.getElementById("lamp");
var butt = document.getElementById("but");
var on=false;

butt.onclick = function(){
    if (on===true){
        bulb.src="bulboff.png"
        on=false;

    }
    else{
        bulb.src="bulbon.jpg"
        on=true;
    }

}