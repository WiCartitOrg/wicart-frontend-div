var addtocartbottons=document.querySelectorAll('.add-to-cart')
var removecartitembut=document.getElementsByClassName('btn-denger')
for(i=0;i<removecartitembut.length;i++){
 var button=removecartitembut[i]
 button.addEventListener('click',removecartitem)
}

//add to cart button   pls the sector is at line one
for (i=0;i<addtocartbottons.length;i++){
var button=addtocartbottons[i]
button.addEventListener('click',addtocartbottonsclicked)
}
function addtocartbottonsclicked(event){
    button=event.target
    var display=button.parentElement.parentElement
    var tilet=display.getElementsByClassName('item-dis-name')[0].innerText
    var price=display.getElementsByClassName('item-dic-price')[0].innerText
    var imgsrc=display.getElementsByClassName('img')[0].src
    additemtocart(price,tilet,imgsrc)
    updatecarttotale()
}

function  additemtocart(price,tilet,imgsrc){
    var cartrow=document.createElement('div')
    cartrow.classList.add('cart-row')
     var cartitemsname= document.getElementsByClassName('item-name')
    
    
     //this  below should be remove from comment after before project lunch
    
    // for(i=0;i<cartitemsname.length;i++){
      //  if(cartitemsname[i].innerText==tilet){
   //        return    
       // }
       // }
   
       var cartitems=document.getElementsByClassName('cart')[0]
    var cartrowcontent=
    `
       <div class="discription">
            <img src="${imgsrc}" alt="" class="item-image">
            <div class="item-name-price">
                <span class="item-name">${tilet}</span>
                <span class="item-price">${price}</span>
            </div>
        </div>
        <div class="item-number">
            <img src="png/Frame 331.png" class="value-up">
            <input type="number" value="1" class="item-quantety">
            <img src="png/Frame 340.png" alt="" class="value-down">
        </div>
        <div class="item-quary">
            <img src="png/akar-icons_heart.png" alt="">
            <button class="btn-denger">Remove</button>
        </div>
    `
    cartrow.innerHTML=cartrowcontent
    cartitems.append(cartrow)
     cartrow.getElementsByClassName('btn-denger')[0].addEventListener('click',removecartitem)
     cartrow.getElementsByClassName('item-quantety')[0].addEventListener('change',quantetychanged)
}


function removecartitem(event){
    var buttonclicked=event.target
    buttonclicked.parentElement.parentElement.remove()
    updatecarttotale() 
}
var quantetyinput=document.querySelectorAll('.item-quantety')
   for(i=0;i<quantetyinput.length;i++){
    var input=quantetyinput[i]
    input.addEventListener('change',quantetychanged)
   }  
  

 function quantetychanged(event){
    var input=event.target
    if(isNaN(input.value) || input.value<=0){
    input.value=1
    }
    updatecarttotale()
 }

function updatecarttotale(){
   var cartitems=document.getElementsByClassName('cart')[0]
   var cartrows= cartitems.getElementsByClassName('cart-row')
   var totale=0
   for(i=0;i<cartrows.length;i++){
       var cartrow=cartrows[i]
       var priceEl=cartrow.getElementsByClassName('item-price')[0]
       var quntityEl=cartrow.getElementsByClassName('item-quantety')[0]
       var price=parseFloat(priceEl.innerText.replace('#',""))
       var quntity=quntityEl.value
       var totale=totale+(price*quntity)
       console.log(totale)
   }
   var sumTotale=document.getElementsByClassName('sum-totale')[0]
 var subtotale=sumTotale.getElementsByClassName('subtotale')[0]
 subtotale.innerText="#"+totale
 var subtotal=parseFloat(subtotale.innerText.replace('#',""))
 var discountEl=sumTotale.getElementsByClassName('discount')[0]
 var discount=parseFloat(discountEl.innerText.replace('#',""))
 var deliveryEl=sumTotale.getElementsByClassName('deliver')[0]
 var delivery=parseFloat(deliveryEl.innerText.replace('#',""))
 var TotaleEl=sumTotale.getElementsByClassName('total')[0]
 TotaleEl.innerText="#"+(subtotal+discount+delivery)
}



// function proceedpay(){
//    var sumTotaleEl=document.getElementsByClassName('sum-totale')[0].innerText
//    var subtotaleEl=document.getElementsByClassName('subtotale')[0].innerText
//    var discountEl=document.getElementsByClassName('discount')[0].innerText
//    var deliveryEl=document.getElementsByClassName('deliver')[0].innerText
//    var TotaleEl=document.getElementsByClassName('total')[0].innerText
//    var proceed=document.getElementById('proceed to')
//    var sumTotale=document.getElementsByClassName('sum-totale-final')[0]
//    var subtotale=document.getElementsByClassName('subtotale-final')[0]
 //   var discount=document.getElementsByClassName('discount-final')[0]
//    var delivery=document.getElementsByClassName('deliver-final')[0]
//    var Totale=document.getElementsByClassName('total-final')[0]
//    proceed.addEventListener('click',()=>{
//        
//        subtotale.innerText=subtotaleEl
//        discount.innerText=discountEl
 //       delivery.innerText=deliveryEl
 //       Totale.innerText=TotaleEl
 //       console.log(subtotale,delivery,discount,Totale)
 //   })
//}
// proceedpay()

      
