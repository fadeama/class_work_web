let song1 = {
    "title": "song one",
    "artist": "artist one",
    "duration": 210,
    "genres": ["pop"],
}

let song2 = Object.assign({}, song1);
let { title, duration } = song2;
for (let key in song1) {
    console.log(`${key} : ${song1[key]}`);
}



let playlist = {
    "playlistName": "My Favorites",
    "createdBy": "John",
    "songs": [
        {
            "title": "Shape of You",
            "artist": "Ed Sheeran",
            "duration": 233
        },
        {
            "title": "Blinding Lights",
            "artist": "The Weeknd",
            "duration": 200
        }
    ]
}
let addSong = {

    "title": "Shape of You",
    "artist": "Ed Sheeran",
    "duration": 233
}

playlist.songs.push(addSong);


// Iterate and print song titles
playlist.songs.forEach(song => {
    console.log(`Title: ${song.title}, Artist: ${song.artist}`);
})
const jsonText = JSON.stringify(playlist);
let playlist2 = JSON.parse(jsonText);


localStorage.setItem("Playlist", jsonText);
let storgeText = localStorage.getItem("Playlist");
let playlist3 = JSON.parse(storgeText);

