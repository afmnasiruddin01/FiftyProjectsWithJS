const counters =document.querySelectorAll('.counter')


counters.forEach(c=>{
    c.innerText = '0'
    const updateCounter = ()=>{
        const target = +c.getAttribute('data-target')
        const count = +c.innerText
        const increment = target/2000;
        if(count<target){
            c.innerText =`${Math.ceil(count+increment)}`
            setTimeout(updateCounter,1)

        }
        
    }
    updateCounter()
})