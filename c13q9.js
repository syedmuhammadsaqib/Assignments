var color= ["red","yellow","pink"];
document.write("1)",color[0],"<br>","2)",color[1],"<br>","3)",color[2]);
var a=window.prompt("what color want you to add in beginning");
color.unshift(a);//beg
document.write("<br>",color);
var a=window.prompt("what color want you to add in last");
color.push(a);//last
document.write("<br>",color);
color.unshift("blue","black");//beg
document.write("<br>",color);
color.shift();// beg remove
document.write("<br>",color);
color.pop();
document.write("<br>",color);
var b=window.prompt("on which index you want to add color");
var c=window.prompt("color name");
color.splice(b,0,c);//(index,remove,colorvalue)
document.write("<br>",color);
var d=window.prompt("on which index you want to delete color");
var e=window.prompt("how many colors you want to delete");
color.splice(d,e);
document.write("<br>",color);








