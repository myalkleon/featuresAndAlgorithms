'use strict'
function getCuttedMatrix(arr, diagonal = 'main', mirrorReflect = false) {
    const newOutArr = new Array();
    arr.forEach(function (currentInnArr, index, outArr) {
        const newInnArr = new Array();
        
        if(diagonal === 'main') {
            const diagPoint = index;
            if(!mirrorReflect) {
                for(let index = 0; index <= currentInnArr.length - 1; index ++) {
                    if (index >= 0 && index < diagPoint) {
                        newInnArr.push(currentInnArr[index]);
                    } else {
                        newInnArr.push(0);    
                    }
                };
            } else if (mirrorReflect) {
                for (let index = currentInnArr.length - 1; index >= 0; index--) {
                    if (index >= 0 && index < diagPoint) {
                        newInnArr.push(currentInnArr[index]);
                    } else {
                        newInnArr.push(0);    
                    }
                }
            }
        } else if (diagonal === 'anti') {
            const diagPoint = currentInnArr.length - 1 - index;
            if(!mirrorReflect) {  
                for(let index = 0; index <= currentInnArr.length - 1; index++) {
                    if (index <= currentInnArr.length - 1 && index > diagPoint) {
                        newInnArr.push(currentInnArr[index]);
                    } else {
                        newInnArr.push(0);    
                    }
                }              
            } else if (mirrorReflect) {
                for(let index = currentInnArr.length - 1; index >= 0; index--) {
                    if (index <= currentInnArr.length - 1 && index > diagPoint) {
                        newInnArr.push(currentInnArr[index]);
                    } else {
                        newInnArr.push(0);    
                    }
                }
            }
        };
        
        newOutArr.push(newInnArr);
    });
    return newOutArr;
}

const matrix = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 5, 1],
    [3, 2, 6, 6, 1],
    [4, 9, 1, 3, 4],
    [1, 2, 7, 5, 8]
];

const finalArr = getCuttedMatrix(matrix, 'main', false);
finalArr.forEach(function(currentInArr, index, finalArr) {
    console.log(currentInArr.join(', '));
});