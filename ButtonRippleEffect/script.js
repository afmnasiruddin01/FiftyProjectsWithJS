const button = document.querySelectorAll('.ripple');

button.forEach(btn => {
    btn.addEventListener('click', function (e) {
        const x = e.offsetX;
        const y = e.offsetY;

        const s = document.createElement("span")
        s.classList.add("circle")
        s.style.top=y + 'px';
        s.style.left=x + 'px';
        this.appendChild(s)
        setTimeout(()=>{
            s.remove()
        }, 1000)
    })
})