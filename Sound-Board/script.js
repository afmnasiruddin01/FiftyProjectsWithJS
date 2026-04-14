const sounds = ["brushing", "crickets", "fire","purring", "rain"]

sounds.forEach((sound)=>{
    const btn = document.createElement("button")
    console.log(btn)
    btn.classList.add('btn')
    btn.innerText = sound;
    
    btn.addEventListener("click",()=>{
        stopSounds();
        document.getElementById(sound).play()
    })

    document.getElementById("buttons").appendChild(btn)
})

function stopSounds(){
    sounds.forEach((sound)=>{
        const s = document.getElementById(sound)
        if (s) s.pause();
    })
}