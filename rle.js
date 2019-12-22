'use strict';
function rle(str) {
    let count = 0;
    let fin = '';
    for(let i = 0; i < str.length; i++) {
        count++;
        if(i === str.length - 1) { //last element
            addToFin(str[i]);
        } else {
            if(str[i + 1] !== str[i]) {
                addToFin(str[i]);
            }
        }
    }

    function addToFin(char) {
        if (count > 1) {
            fin = fin + char + count;
            count = 0;
        } else {
            fin = fin + char;
            count = 0;
        }       
    }
    return fin;
}

console.log(rle('AAAAAAAAAAAABBBBCCCCBBBAFFFTY'));