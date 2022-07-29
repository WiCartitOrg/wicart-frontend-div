function allbuttonchangactive(){
    var btn=document.getElementsByClassName('theme')[0]
    var light=document.getElementById('befor')
    btn.addEventListener('click',function(){
     light.classList.toggle('atare')
     console.log(light)
    })
    const list=document.querySelectorAll('.list')
    function activelink(){
        list.forEach((item) =>
        item.classList.remove('active'));
        this.classList.add('active');
    }
    list.forEach((item)=>
    item.addEventListener('click',activelink)
    )
    const time=document.querySelectorAll('.time')
    function activebtn(){
        time.forEach((item) =>
        item.classList.remove('btn-act'));
        this.classList.add('btn-act');
    }
    time.forEach((item)=>
    item.addEventListener('click',activebtn)
    )
}
allbuttonchangactive()
function navbutonview(){
    //button call on
const home=document.getElementById('home')
const order=document.getElementById('order')
const product=document.getElementById('product')
const message=document.getElementById('message')
const setting=document.getElementById('setting')
const support=document.getElementById('support')
console.log(home,order,product,message,setting,support)


//section call on
const homesec=document.getElementById('homemain')
const ordersec=document.getElementById('ordermain')
const productsec=document.getElementById('productmain')
const messagesec=document.getElementById('messagemain')
const settingsec=document.getElementById('settingmain')
const supportsec=document.getElementById('supportmain')
console.log(homesec,ordersec,productsec,messagesec,settingsec,supportsec)
//button action
home.addEventListener('click',function(){
   homesec.style.display='block'
   ordersec.style.display='none'
   productsec.style.display='none'
   messagesec.style.display='none'
   settingsec.style.display='none'
   supportsec.style.display='none'
})

order.addEventListener('click',function(){
 homesec.style.display='none'
   ordersec.style.display='block'
   productsec.style.display='none'
   messagesec.style.display='none'
   settingsec.style.display='none'
   supportsec.style.display='none'
})
product.addEventListener('click',function(){
 homesec.style.display='none'
   ordersec.style.display='none'
   productsec.style.display='block'
   messagesec.style.display='none'
   settingsec.style.display='none'
   supportsec.style.display='none'
})
message.addEventListener('click',function(){
 homesec.style.display='none'
   ordersec.style.display='none'
   productsec.style.display='none'
   messagesec.style.display='block'
   settingsec.style.display='none'
   supportsec.style.display='none'
})
setting.addEventListener('click',function(){
 homesec.style.display='none'
   ordersec.style.display='none'
   productsec.style.display='none'
   messagesec.style.display='none'
   settingsec.style.display='block'
   supportsec.style.display='none'
})
support.addEventListener('click',function(){
 homesec.style.display='none'
   ordersec.style.display='none'
   productsec.style.display='none'
   messagesec.style.display='none'
   settingsec.style.display='none'
   supportsec.style.display='block'
})
order.addEventListener('click',function(){
 homesec.style.display='none'
   ordersec.style.display='block'
   productsec.style.display='none'
   messagesec.style.display='none'
   settingsec.style.display='none'
   supportsec.style.display='none'
})
}
navbutonview()
function btnslidemove(){     
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


}
 
btnslidemove()