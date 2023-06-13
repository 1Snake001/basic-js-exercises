'use strict';

// Write a program that draws
// a square like this:
//
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as the value of lineCount

function drawSquare(lineCount) {
    let spaceCount = lineCount - 2;
    for (let index = 0; index < lineCount; index++) {
        if (index === 0 || index === lineCount - 1) {
            console.log('%'.repeat(lineCount));
        } else {
            console.log('%' + ' '.repeat(spaceCount) + '%');
        }
    }
};

drawSquare(4);