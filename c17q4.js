var a= window.prompt("enter a number for table");
var b= window.prompt("enter a legnth of table you want ");
document.write("table of "+ a)
document.write("<br>"+"legnth" + b)
for(var c=1 ; c<=b; c++){
  

document.write("<br>"+a+"x"+c+"="+(a*c));}