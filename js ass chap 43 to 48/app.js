// Function for Assignment 1 (index)
function show() {
    alert("                                       Specifications\n\nModel: Samsung Galaxy\n\nYear of Relase: 2016\n\nPrice: 15000\n\nRam: 2GB\n\nStorage: 16Gb\n\nVersion: 6.7 Kitkat");
}


// Function for Assignment 2 (index 2)
function example(eId1, eId2) {
    document.getElementById(eId1).innerHTML = '';
    document.getElementById(eId2).style.visibility = 'hidden';
}

// Function for Assignment 3 (Index 3)
var count=0;
function increase() {
    count += 1;
    document.getElementById('show').innerHTML = count;
}
function decrease() {
    count -= 1;
    document.getElementById('show').innerHTML = count;
}
