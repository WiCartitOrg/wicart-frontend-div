  const cont=document.querySelectorAll('.note-slide');
  const nxtBtn = document.querySelectorAll('#move-right');
  const preBtn = document.querySelectorAll('#move-left');
     cont.forEach((item,b) => {
     
      let containerWidth = 100;
  
      nxtBtn[b].addEventListener('click', () =>{ 
          item.scrollLeft +=containerWidth;
      })
      preBtn[b].addEventListener('click', () =>{ 
          item.scrollLeft -=containerWidth;
      })
      
  })

  const vendorcont=document.querySelectorAll('.slider-display');
  const vendornxtBtn = document.querySelectorAll('#moveright');
  const vendorpreBtn = document.querySelectorAll('#moveleft');
     vendorcont.forEach((item,b) => {
     
      let containerWidth = 100;
  
      vendornxtBtn[b].addEventListener('click', () =>{ 
          item.scrollLeft +=containerWidth;
          console.log(40)
      })
      vendorpreBtn[b].addEventListener('click', () =>{ 
          item.scrollLeft -=containerWidth;
          console.log(45)
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


function serch(){
  const searchbox=document.getElementById('mes-search').value.toUpperCase();
const messasgebox=document.getElementsByClassName('person')
 for(i=0;i<messasgebox.length;i++){
  let match=messasgebox[i].getElementsByClassName('name-of-massenger')[0]

  let textvalue=  match.textContent||match.innerHTML
  
  if(textvalue.toUpperCase().indexOf( searchbox)>=0){
    messasgebox[i].style.display=""
  }else{
    messasgebox[i].style.display="none"
  }
  
 }
}
 

const person=document.querySelectorAll('.person')
function personbtn(){
    person.forEach((item) =>
    item.classList.remove('message-active'));
    this.classList.add('message-active');
}
person.forEach((item)=>
item.addEventListener('click',personbtn)
)

const butSet=document.querySelectorAll('.ven-det-btn')
const dis=document.querySelectorAll('.rev-pop-up')[0]

   for(i=0;i<butSet.length;i++){
     var button=butSet[i]
     button.addEventListener('click',acton)
   }
   function acton(event){
    dis.classList.add('rev-pop-up-show')
    secsec=button
    var secsec=event.target
    var sec=secsec.parentElement
    console.log(sec)
    var img=sec.getElementsByClassName('ven-img')[0].src
    var name=sec.getElementsByClassName('ven-name')[0].innerHTML
    var rateing=sec.getElementsByClassName('ven-rating')[0].innerHTML
    var sales=sec.getElementsByClassName('ven-prod-sales')[0].innerHTML.replace('sales','')
    console.log(img,name,rateing,sales)
    loging(img,name,rateing,sales)
   }
    function loging(img,name,rateing,sales){
        const  cont=document.querySelectorAll('.main-ven-dit')[0]
          cont.innerHTML=''
          let html=
          `
          <img src="./png/change.png" alt="" class="out-img" 
          onclick="remove() "
          >
          <img src="${img}" alt="" class="ven-image">
            <h1 class="ven-name">${name}</h1>
            <span class="ven-rate"></span>
            <div class="ven-sale-lay-out">
              <div class="ven-sale-dit">
                <h1>sales</h1>
                <p class="no-van-sales">
                  ${sales}
                </p>
              </div>
              <div class="ven-sale-dit">
                <h1>earning</h1>
                <p class="no-van-en">
                  #828,000
                </p>
              </div>
            </div>
            <div class="ven-log-dit">
              <span><h1>email: </h1><h2 class="ven-email">raheematzaid@gmail.com</h2></span>
              <span><h1>gender: </h1><h2 class="ven-gender">female</h2></span>
              <span><h1>country: </h1><h2 class="ven-country">Nigeria</h2></span>
              <span><h1>state: </h1><h2 class="ven-state">kwara</h2></span>
              <span><h1>city: </h1><h2 class="ven-city">llorin</h2></span>
              <span><h1>transactions: </h1><h2 class="ven-transaction">250</h2></span>
              <span><h1>report: </h1><h2 class="ven-reports">2</h2></span>
              <span><h1>categories: </h1><h2 class="ven-gender">Cloths Accessories</h2></span>
            </div>
            <a href="./messages.html"><button class="mess">message</button></a>
          `
          cont.insertAdjacentHTML('beforeend',html)
        
      }

      
    
    function remove(){
      dis.classList.remove('rev-pop-up-show')
      console.log(34)
    }