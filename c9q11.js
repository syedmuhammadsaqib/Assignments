var a= Number(prompt("entetr 1st number: "));
var b= Number(prompt("enter 2nd number: "));
var c= Number(prompt("choose x / - + %"));
var x=parseInt(a);
var y=parseInt(b);
if(c === "x")
{
    alert(x*y );
}
if(c === "/")
{
    alert(x/y );
}
if(c === "-")
{
    alert(x-y );
}

var n= x+y;
if(c=== "+")
{
    alert(n) ;
}
if(c === "%")
{
    alert(x%y );
}
