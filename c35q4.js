function calc(a,b,c){
    var a= Number(prompt("enter a value"));
    var b= Number(prompt("enter a value"));
    var c= Number(prompt("enter operation"));

    if(c=="x"){
        document.write(a*b);
    }
    else if(c=="-"){
        document.write(a-b);
    }
    else if(c=="+"){
        document.write(a+b);
    }
    else if(c=="/"){
        document.write(a/b);
    }


}
calc();