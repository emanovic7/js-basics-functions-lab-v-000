// Code your solution in this file!

function distanceFromHqInBlocks(blkNum){
  if (blkNum > 42) {
    return blkNum - 42;
  } else {
    return 42 - blkNum;
  }
}

function distanceFromHqInFeet(blkNum){
   if (blkNum > 42) {
    return (blkNum - 42)*264;
  } else {
    return 42 - blkNum;
  }
}