const tagsEl = document.querySelector(".tags");
const textarea = document.getElementById("textarea");
textarea.focus();
textarea.addEventListener("keyup", (event) => {
  createTags(event.target.value);
  if (event.key==="Enter"){
    setTimeout (()=>{
        event.target.value=""
    },10)
    randomSelect();
  }
});

function createTags(input) {
  const tags = input
    .split(",")
    .filter((x) => x.trim() !== " ")
    .map((x) => x.trim());
  tagsEl.innerHTML = "";
  tags.forEach((t) => {
    const s = document.createElement("span");
    s.classList.add("tag");
    s.innerText = t;
    tagsEl.appendChild(s);
  });
}

function randomSelect(){
    const times =30;
    const interval = setInterval(() => {
        const randomTag = pickRandomTag() 
        heighlightTag(randomTag)
        setTimeout(()=>{
            unheighlightTag(randomTag)
        },100)
    }, 100);
    setTimeout(()=>{
        clearInterval(interval)
        setTimeout(()=>{
            const randomTag = pickRandomTag();
            heighlightTag(randomTag)
        },100)
    },times*100)
}

function pickRandomTag(){
    const tags = document.querySelectorAll(".tag")
    return tags[Math.floor(Math.random()*tags.length)]
}
function heighlightTag(t){
    t.classList.add("heighlight")
}

function unheighlightTag(t){
    t.classList.remove("heighlight")
}