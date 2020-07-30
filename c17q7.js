var a = ["cake", "apple pie", "cookie", "chips", "patties"]
var b= window.prompt("search by name in our bakery")

if(b === a[0]){
    document.write("cake is available at series 0 in our bakery")
}
if(b === a[1]){
    document.write("apple pie is available at series 1 in our bakery")
}
if(b === a[2]){
    document.write("cookie is available at series 2 in our bakery")
}
if(b === a[3]){
    document.write("chips is available at series 3 in our bakery")
}
if(b === a[4]){
    document.write("patties is available at series 4 in our bakery")
}
else{
    document.write(b + " is not available  in our bakery")
}
