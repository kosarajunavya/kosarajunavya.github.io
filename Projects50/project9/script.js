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


// $(function() {
//     $(sounds).each(function(index, sound) {
//         const btn = document.createElement('button');
//         $(btn).addClass('btn');
//         btn.innerText = sound;
//         $(btn).click(function() {
//             stopSounds();
//             document.getElementById(sound).play();
//         });
//         document.getElementById('buttons').appendChild(btn);
//     });

//     function stopSounds() {
//         $(sounds).each(function(index, sound) {
//             const song = document.getElementById(sound);
//             song.pause();
//             song.currentTime = 0;
//         });
//     };
// });