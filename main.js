let contenedor = document.getElementById('track-list')

axios.get('https://api.institutoalfa.org/api/songs').then((res) => {
    console.log(res.data.songs)

    res.data.songs.map((song) => {
        let div = document.createElement('div')

        div.setAttribute('class', 'cancion')

        div.innerHTML =
            `<img src="https://api.institutoalfa.org/api/songs/image/${song.image.filename}">
            <h1>${song.title}</h1>`

        div.addEventListener('click', () => {
            document.getElementById('current-song-image').setAttribute('src', `https://api.institutoalfa.org/api/songs/image/${song.image.filename}`)
            document.getElementById('current-song-song').innerHTML = song.title

            document.getElementById("audio").setAttribute
            ('src', `https://api.institutoalfa.org/api/songs/audio/${song.audio.filename}`)


        })

        contenedor.appendChild(div)

    })
})