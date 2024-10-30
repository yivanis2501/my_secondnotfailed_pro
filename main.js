let contenedor = document.getElementById('track-list')

axios.get('https://api.institutoalfa.org/api/songs').then((res) => {
    console.log(res.data.songs)

    res.data.songs.map((song) => {
        let div = document.createElement('div')

        div.setAttribute('class', 'cancion')

        div.innerHTML =
            `<img src="https://api.institutoalfa.org/api/songs/image/${song.image.filename}">
            <h1>${song.title}</h1>`

        contenedor.appendChild(div)
    })
})