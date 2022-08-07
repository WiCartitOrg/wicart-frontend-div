  const cont=document.querySelectorAll('.product-conts-slide');
  const nxtBtn = document.querySelectorAll('#move-right');
  const preBtn = document.querySelectorAll('#move-left');
     cont.forEach((item,b) => {
      let containerDimensions = item.getBoundingClientRect();
      let containerWidth = 100;
  
      nxtBtn[b].addEventListener('click', () =>{ 
          item.scrollLeft +=containerWidth;
      })
      preBtn[b].addEventListener('click', () =>{ 
          item.scrollLeft -=containerWidth;
      })
      
  })

  const time=document.querySelectorAll('.time')
  function activebtn(){
      time.forEach((item) =>
      item.classList.remove('btn-act'));
      this.classList.add('btn-act');
  }
  time.forEach((item)=>
  item.addEventListener('click',activebtn)
  )


  const checked=document.querySelectorAll('.right-styles')

const bodyElement=document.body;
const currentTheme=localStorage.getItem('currentTheme')
if(currentTheme){
    bodyElement.classList.add('dark-them')
    document.getElementById('befor').classList.add('atare')
}
function theme(){
  var btn=document.getElementsByClassName('theme')[0]
  var light=document.getElementById('befor')
  btn.addEventListener('click',function(){
   light.classList.toggle('atare')


   document.body.classList.toggle('dark-them')
   if(bodyElement.classList.contains('dark-them')){
    localStorage.setItem('currentTheme', 'themeActive')
    console.log(45)
   }else{
    localStorage.removeItem('currentTheme')
   }
  })
}
theme()


let userditcont=  document.getElementById('user-dit')
let user=document.getElementById('user')
user.addEventListener('click',()=>{
     userditcont.style.display='block'
     user.style.display='none'
     console.log('no')
})        


const usereout=document.getElementById('boder-down')
usereout.addEventListener('click',()=>{
  console.log("yes")
       userditcont.style.display='none'
       user.style.display='block'
})       

let calinda=document.getElementById('calinder')
calinda.addEventListener('click',()=>{
  document.getElementById('calinder-sheet').classList.toggle('calinder-show')
})

 