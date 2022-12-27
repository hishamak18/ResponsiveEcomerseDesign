const navBar =document.querySelector('#bar')
const nav =document.querySelector('#navbar')
const close =document.querySelector('#close')


if(navBar){
    navBar.addEventListener('click',() =>{
        nav.classList.add('active')
        console.log('hii hisham')
    })
}
if(close){
    close.addEventListener('click',() =>{
        nav.classList.remove('active')
        console.log('hii hisham')
    })
}