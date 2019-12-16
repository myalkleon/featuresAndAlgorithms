'use strict';
//I know, that it can be done with regular expressions :)
function myStrReplace(str, subStr, by) {
    let finStr = '';
    for(let i = str.indexOf(subStr); i < str.length && i !== -1; i = str.indexOf(subStr, ++i)) {
        if(finStr.length === 0) {
            finStr = finStr + str.slice(0, i);
        }

        let nextI = str.indexOf(subStr, i + 1);
        if (nextI !== -1) {
            finStr = finStr + by + str.slice(i + subStr.length, nextI);
        } else {
            finStr = finStr + by + str.slice(i + subStr.length, str.length);
        }        
    }
    return finStr;
}

console.log(myStrReplace('255.100.50.0', '.', '[.]'));
console.log(myStrReplace('Our destiny is victory. This is Our fate. Our mission is to defend the world!', 'Our', 'My'));