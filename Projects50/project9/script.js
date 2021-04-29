const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        stopSongs()

        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}


// $(function(){
//     $('.sounds').forEach(sound =>{
//         const btn = $("<div></div>");
//         $(".btn").append(btn);

//         $('.btn').addClass('.btn')
        
//         $('.btn').text= sound
        
//         $('.btn').click(stopSongs)
    
//     })
// })