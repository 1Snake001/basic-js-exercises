'use strict';

// Írj egy programot, ami rajzol
// egy ilyen négyzetet:
//
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// A négyzetnek annyi sora legyen, mint a lineCount értéke

function drawSquare(lineCount) {
    let spaceCount = lineCount - 2;
    for (let index = 0; index < lineCount; index++) {
        if (index === 0 || index === lineCount - 1) {
            console.log('%'.repeat(lineCount));
        } else {
            console.log('%' + ' '.repeat(spaceCount) + '%');
        }
    }
}

drawSquare(4);