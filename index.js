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
   if (pickUp < dropOff) {
    return (dropOff - pickUp) * 264;
  } else {
    return (pickUp - dropOff) * 264;
  }
}