module.exports = {
    schema: {
        id: { type: 'serial', key: true },
        song_id: String,
        title: String,
        artist: String,
        album: String,
        cover: String,
        mp3: String,
        ogg: String,
        lyric: String,
        update_at: { type: 'date', time: true, null: true }
    }
}