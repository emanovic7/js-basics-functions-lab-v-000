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
    return (42 - blkNum)*264;
  }
}

function distanceTravelledInFeet(pickUp, dropOff){
  const distance = (dropOff - pickUp)*264;
  return distance;
}