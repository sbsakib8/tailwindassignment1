// ===============typed script js home=========
let typed = new Typed(".typing",{
    strings:["IT Support","IT ","IT Support"],
    typeSpeed:100,
    backSpeed:100,
});
// =============== navber section start=======================
let hemderger = document.getElementById('hemderger');
let navmanu = document.getElementById('nav-manu');
let closemanu = document.getElementById('close');
let navlink = document.querySelectorAll('.navlink');
navlink.forEach(element => {
    element.addEventListener('click',()=>{
        navmanu.classList.add('hidden')
        hemderger.classList.remove('hidden')
    })
});

hemderger.addEventListener('click',()=>{
    navmanu.classList.remove('hidden');
    hemderger.classList.add('hidden')
});
closemanu.addEventListener('click',()=>{
    navmanu.classList.add('hidden');
    hemderger.classList.remove('hidden')  
})
// =============== navber section end=======================
// =============== count section start=======================
document.addEventListener('DOMContentLoaded',() => {
    function counter(id, start, end, duration){
     let obj = document.getElementById(id),
     current = start,
     range = end - start,
     increment = end > start ? 1 : -1,
     step = Math.abs(Math.floor(duration / range)),
     timer = setInterval(() => {
       current += increment;
       obj.textContent = current;
       if(current == end){
           clearInterval(timer);
       }
     }, step);


    }
    
    counter('count1', 0, 1287, 3000)
    counter('count2', 100, 5783, 2500)
    counter('count3', 70, 6287, 3900)
    counter('count4', 50, 4587, 6700)
    counter('count5', 50, 4587, 6700)
});
// =============== count section end=======================
// =============== dark section start=======================
let htmltag = document.getElementById('htmltag');
let swich = document.getElementById('switch');
swich.addEventListener('click',()=>{
    htmltag.classList.toggle('dark')
});