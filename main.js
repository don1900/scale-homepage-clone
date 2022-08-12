const hamburger = document.querySelector('.res-menu-buttons')
const hamburgerbtn =  document.querySelector('.res-menu')
const back = document.querySelector('.cross')
const annotatebtn = document.querySelector('.annotatebtn')
const managebtn = document.querySelector('.managebtn')
const automatebtn = document.querySelector('.automatebtn')
const evaluatebtn = document.querySelector('.evaluatebtn')
const collectbtn = document.querySelector('.collectbtn');
const generatebtn = document.querySelector('.generatebtn');


hamburgerbtn.addEventListener("click",()=>{
    hamburger.style.display = "flex"
})

back.addEventListener("click",()=>{
    hamburger.style.display="none"
})

annotatebtn.addEventListener("click",()=>{
    window.scroll({
        top: 2000,
        behavior: 'smooth'
      });
})

managebtn.addEventListener("click",()=>{
    window.scroll({
        top: 3550,
        behavior: 'smooth'
      });
})

automatebtn.addEventListener("click",()=>{
    window.scroll({
        top: 4250,
        behavior: 'smooth'
      });
})

evaluatebtn.addEventListener("click",()=>{
    window.scroll({
        top: 4950,
        behavior: 'smooth'
      });
})

collectbtn.addEventListener("click",()=>{
    window.scroll({
        top: 5700,
        behavior: 'smooth'
      });
})

generatebtn.addEventListener("click",()=>{
    window.scroll({
        top: 6400,
        behavior: 'smooth'
      });
})
