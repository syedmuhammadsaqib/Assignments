var strings = 'this iS a TeSt 523 Now!';
var i=0;
var character='';
while (i <= strings.length){
    character = strings.charAt(i);
    if (!isNaN(character * 1)){
        alert('character is numeric');
    }else{
        if (character == character.toUpperCase()) {
            alert ('upper case true');
        }
        if (character == character.toLowerCase()){
            alert ('lower case true');
        }
    }
    i++;
}