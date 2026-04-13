const labels = document.querySelectorAll(".form-control label")

labels.forEach((label)=>{
    label.innerHTML=label.innerHTML
                    .split("")
                    .map((x,idx)=>`<span style="transition-delay:${idx*50}ms">${x}</span>`)
                    .join("");

    

})