var PlayMusic = require('playmusic');
var pm = new PlayMusic();

document.getElementById("sendbutton").onclick=function(){
    pm.init({ email: "veldsinkie.mv@gmail.com", password: "qzectbum" }, function(err) {
    pm.getAllTracks(function(err, library) {
        var song = library.data.items.pop();
        console.log(song);
        pm.getStreamUrl(song.id, function(err, streamUrl) {
            console.log(streamUrl);
        });
    });
})
};

