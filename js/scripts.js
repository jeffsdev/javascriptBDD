var song = function(bottleNumber) {

  var verse;

  for (var i = bottleNumber; i >= 0; i--) {
    if (i === 0) {
      verse = "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.";
    } else if (i === 1) {
      verse = i + " bottle of beer on the wall, " + i + " bottle of beer. Take one down and pass it around, " + (i-1) + " bottles of beer on the wall.";
    } else if (i === 2) {
      verse = i + " bottles of beer on the wall, " + i + " bottles of beer. Take one down and pass it around, " + (i-1) + " bottle of beer on the wall.";
    } else {
      verse = i + " bottles of beer on the wall, " + i + " bottles of beer. Take one down and pass it around, " + (i-1) + " bottles of beer on the wall.";
    }
    return verse;
  };
};
