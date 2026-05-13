const button = document.getElementById("button")
const toasts = document.getElementById("toasts")

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
]

button.addEventListener("click", ()=>{
    createNotification()
})

function createNotification (){
    const notif = document.createElement('div')
    notif.classList.add("toast")
    toasts.appendChild(notif)
    notif.innerHTML=(function(){
            m = Math.floor(Math.random()*messages.length)
            // console.log(m)
             return messages[m]
            }
    ());
    setTimeout(()=>{
        notif.remove()
    },3000)

}