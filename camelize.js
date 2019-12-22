'use strict';
function camelize(str) {
    let arr = str.split('-');
    arr = arr.map((item, index, array) => {
      if(index === 0) {
        return item;  
      } else {
        return item[0].toUpperCase() + item.slice(1);
      }
    });
    return arr.join('');
  }

console.log(camelize('background-color'));
console.log(camelize('background'));