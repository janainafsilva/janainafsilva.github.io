document.getElementById("demo").innerHTML =  document.body.clientWidth;

var menu = document.getElementById("menu");


if(document.body.clientWidth < 600){
    menu.classList.add("row-4");
    menu.classList.remove("row-1");
    document.getElementById("galery").className = "col-12 row-3 flex color-4";
}else{
     document.getElementById("menu").className = "menu col-12 row-1";
     document.getElementById("galery").className = "col-12 row-6 flex color-4";
}

