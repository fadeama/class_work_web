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