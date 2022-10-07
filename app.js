let image1 = document.querySelector('#image1');
let image2 = document.querySelector('#image2');
let image3 = document.querySelector('#image3');


image1.addEventListener('mouseover', ()=>{
    let icon1 = document.querySelector('#icon1');
        icon1.style.display = 'block'

    let icon2 = document.querySelector('#icon2');
        icon2.style.display = 'none'
    let icon3 = document.querySelector('#icon3');
        icon3.style.display = 'none'

    let text2 = document.querySelector('#text2');
    text2.style.left = '58%'

    image1.style.width = '50%'
    image2.style.width = '350px'
    image2.style.objectFit = 'cover'
    image3.style.width = '350px'
    image3.style.objectFit = 'cover'
})

image2.addEventListener('mouseover', ()=>{
    let icon1 = document.querySelector('#icon1');
        icon1.style.display = 'none'
    let icon3 = document.querySelector('#icon3');
        icon3.style.display = 'none'

    let icon2 = document.querySelector('#icon2');
        icon2.style.display = 'block'

    let text2 = document.querySelector('#text2')
    text2.style.left = '32%'
    let text3 = document.querySelector('#text3')
    text3.style.right = '12%'
    
    image2.style.width = '50%'
    image1.style.width = '350px'
    image1.style.objectFit = 'cover'
    image3.style.width = '350px'
    image3.style.objectFit = 'cover'
})

image3.addEventListener('mouseover', ()=>{
    let icon1 = document.querySelector('#icon1');
        icon1.style.display = 'none'
    let icon2 = document.querySelector('#icon2');
        icon2.style.display = 'none'

    let icon3 = document.querySelector('#icon3');
        icon3.style.display = 'block'

    let text2 = document.querySelector('#text2')
    text2.style.left = '38%'
    let text3 = document.querySelector('#text3')
    text3.style.right = '39%'

    image3.style.width = '50%'
    image1.style.width = '350px'
    image1.style.objectFit = 'cover'
    image2.style.width = '350px'
    image2.style.objectFit = 'cover'
})
