//helper functions and general utilities

function adjacentCells(i){
  //return a list of cell objects corresponding to the neighbours of cell i

  var neighbours = [],
  j, neighbourIndex;

  //three above:
  for(j=-1; j<2; j++) {
    neighbourIndex = i-store.width + j
    if(neighbourIndex >= 0 && Math.floor(neighbourIndex/store.width) === Math.floor((i-store.width)/store.width)) {
      neighbours.push(store.state[neighbourIndex]);
    }
  }

  //two beside
  if(i-1 > Math.floor(i/store.width)*store.width) {
    neighbours.push(store.state[i-1]);
  }
  if(i+1 < Math.floor(i/store.width)*store.width + store.width) {
    neighbours.push(store.state[i+1]);
  }

  //three below
  for(j=-1; j<2; j++){
    neighbourIndex = i+store.width + j
    if(neighbourIndex < store.width*store.height && Math.floor(neighbourIndex/store.width) === Math.floor((i+store.width)/store.width)) {
      neighbours.push(store.state[neighbourIndex]);
    }
  }

  return neighbours
}

function inArray(needle, haystack) {
  //Determine if item is in array
  //Borrowed from: http://stackoverflow.com/questions/784012/javascript-equivalent-of-phps-in-array
    var length = haystack.length;
    var i;
    for(i = 0; i < length; i++) {
        if(haystack[i] === needle) {
          return true;
        }
    }
    return false;
}
