'use strict';
const lineCount = 4

function drawTringale(lineCount){
    let spaceCount = lineCount-1;
    let starCount = 1; 
    const star = '*';
    const space = ' ';

    for (let index = 0; index <= lineCount-1; index++) {
        console.log(space.repeat(spaceCount) + star.repeat(starCount));
        spaceCount--;
        starCount+=2;
    }
};

drawTringale(lineCount);