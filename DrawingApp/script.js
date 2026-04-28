const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")


let isPressed = false
let color = 'black'
let radius= 20
let x
let y 

function drawCircle (x,y) {
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI*2) 
    ctx.fillStyle= color
    ctx.fill()
}



function drawLine (x1,y1,x2,y2) {
ctx.beginPath();
ctx.moveTo(x1,y1); // Begin first sub-path
ctx.lineTo(x2, y2);
ctx.strokeStyle = color
ctx.lineWidth = radius*2
ctx.stroke();

}

canvas.addEventListener("mousedown", (e)=>{
    isPressed = true
    x= e.offsetX
    y = e.offsetY
})
canvas.addEventListener("mouseup", (e)=>{
    isPressed = false
    x= undefined
    y = undefined
})
canvas.addEventListener("mousemove", (e)=>{
    if(isPressed){

        x2 = e.offsetX
        y2 = e.offsetY
        drawCircle(x2,y2)
        drawLine(x,y,x2,y2)
        x=x2
        y=y2
    }

})