
var menuP=document.querySelectorAll(".menu_p");
var mandatory=document.querySelectorAll(".mandatory");
for (var i=0;i<menuP.length;i++){
    if (menuP[i].hidden){
        mandatory[i].style.opacity= "1";
    }
}
