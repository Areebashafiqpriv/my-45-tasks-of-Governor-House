function makeAlbum(artist, title) {
    var dictionary = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionary;
}
var album = makeAlbum('ali', 'light');
console.log(album);
album = makeAlbum('bisma', 'red wave');
console.log(album);
album = makeAlbum('arman', 'sea breeze');
console.log(album);
