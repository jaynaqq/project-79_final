    meanu_list_arry=["Chicken Tandoori Pizza","Veg Supreme Pizza","Paneer Tikka Pizza","Deluxe Veggie Pizza","Veg Extravaganza Pizza"];
function getmenu(){
    var htmaldata;
    htmaldata="<ol class='meanulist'>"
    meanu_list_arry.sort();
    for(var i=0;i<meanu_list_arry.length;i++){
        htmaldata=htmaldata+'<li>' + meanu_list_arry[i]+'<li>' 
 }
htmaldata=htmaldata+"</ol>"
document.getElementById("display_menu").innerHTML=htmaldata;
}
function add_item(){
    var htmaldata;
    var item=document.getElementById("add_item").value
    meanu_list_arry.push(item);
    meanu_list_arry.sort();
    htmaldata="<section class='cards'>"
    for(var i=0; i<meanu_list_arry.length; i++){
        htmaldata=htmaldata+'<div class="card">'+'<img src="pizzaImg.png"/>'+meanu_list_arry[i]+'</div>'
    }
    htmaldata=htmaldata+"</section>"
    document.getElementById("display_addmeanu").innerHTML=htmaldata;
}