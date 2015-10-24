describe("song", function() {
  it("will return the final verse of the song, if the number of bottles equals 0", function() {
    expect(song(0)).to.equal("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
  });
});
