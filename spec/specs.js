describe("song", function() {
  it("will return the final verse of the song, if the number of bottles equals 0.", function() {
    expect(song(0)).to.equal("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
  });
  it("will return the second-to-last verse of the song, if the number of bottles equals 1.", function() {
    expect(song(1)).to.equal("1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, 0 bottles of beer on the wall.");
  });
  it("will return the third-to-last verse of the song, if the number of bottles equals 2.", function() {
    expect(song(2)).to.equal("2 bottles of beer on the wall, 2 bottles of beer. Take one down and pass it around, 1 bottle of beer on the wall.");
  });
});
