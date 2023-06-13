"use stric";
const lineCount = 3;

function drawDiamond(lineCount) {
  if (lineCount % 2 === 0) {
    lineCount += 1;
  } else {
    lineCount;
  }

  let spaceCount = (lineCount - 1) / 2;
  let starCount = 1;
  let star = "*";
  let space = " ";

  for (let index = 1; index <= lineCount; index++) {
    if (index < lineCount / 2) {
      console.log(space.repeat(spaceCount) + star.repeat(starCount));
      spaceCount--;
      starCount += 2;
    } else if (index === (lineCount - 1) / 2 + 1) {
      console.log(star.repeat(starCount));
      spaceCount++;
    } else {
      starCount -= 2;
      console.log(space.repeat(spaceCount) + star.repeat(starCount));
      spaceCount++;
    }
  }
}

drawDiamond(lineCount);
