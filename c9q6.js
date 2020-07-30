
var a= window.prompt("enter marks you gain in three subjects");
var b = window.prompt("total marks of three papers");
document.write("<br>"+"total marks: " + b)
document.write("<br>"+" marks Obtained: " + a)

var c= (a/b)*100;
document.write("<br>"+"Percentage: " + c)

if( c >= "80"){
    document.write("<br>"+"Grade A-one")
   
    document.write("<br>"+"Remarks: Excellent")
}
else if ( c >= "70"){
    document.write("<br>"+"Grade A")
    
    document.write("<br>"+"Remarks: Good")
}
else if ( c >= "60"){
    document.write("<br>"+"Grade B")
    
    document.write("<br>"+"Remarks: Need improvement")
}
else if ( c < "60"){
    document.write("<br>"+"Grade Fail")
    "<br>"
    document.write("<br>"+"Remarks:Sorry")
}
