const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);


for (const empty of empties){
    empty.addEventListener("drop", dragDrop);
    empty.addEventListener("dragenter", dragEnter);
    empty.addEventListener("dragleave", dragLeave);
    empty.addEventListener("dragover", dragOver);
}

function dragStart (){
    this.className += " hold";
    setTimeout(() => (this.className = "invisible"), 0);    

}
function dragEnd (){
    this.className = "fill"
}

function dragEnter(e){
    e.preventDefault()
    this.className += ' hovered'
}
function dragLeave (){
    this.className = "empty"
}

function dragOver (e){
    e.preventDefault();
    console.log("drag over");
}
function dragDrop (){
    this.className = "empty"
    this.append(fill)
}

