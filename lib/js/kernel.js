


document.getElementById("demo").innerHTML =  document.body.clientWidth;


if(document.body.clientWidth < 600){
    document.getElementById("menu").className = " col-12 row-4";
    document.getElementById("galery").className = "col-12 row-3 flex color-4";
}else{
     document.getElementById("menu").className = "menu col-12 row-1";
     document.getElementById("galery").className = "col-12 row-6 flex color-4";
}

