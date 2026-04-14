const jokeEl = document.getElementById('joke')
const jokebtn = document.getElementById('jokebtn')

jokebtn.addEventListener("click",generateJoke) 
generateJoke();

// async/await approach

async function generateJoke(){
    const config = {
        "method": "GET",
        "headers": {
            "Accept":"application/json",
        },
    }
    const res = await fetch("https://icanhazdadjoke.com/",config)
    const data = await res.json()
    jokeEl.innerText= data.joke;
}




/*

// fetch api in fetch.then approach

function generateJoke() {
    const config ={
        "method": "GET",
        "headers": {
            "Accept": "application/json",
    },
}

    const jokeStm = fetch('https://icanhazdadjoke.com/',config)
            .then((res)=>res.json())
            .then(d=>{
                jokeEl.innerHTML=d.joke;
            })


}

*/
