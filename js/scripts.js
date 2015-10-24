var song = function(bottleNumber) {

  var verse;

  for (var i = bottleNumber; i >= 0; i--) {
    if (i === 0) {
      verse = "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.";
    }
    return verse;
  };
};
