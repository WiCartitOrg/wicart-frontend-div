
//function for the quntity
function increment(){
var  dicrementbutton=document.getElementsByClassName('value-up')
var  incrementbutton=document.getElementsByClassName('value-down')


// increment button
for(i=0;i<incrementbutton.length;i++){
    var button =incrementbutton[i]
    button.addEventListener('click',function(event){
     var buttonclicked=event.target
    var input=buttonclicked.parentElement.children[1]
    var inputvalue=input.value
    var newvalue=parseInt(inputvalue)+1
    input.value=newvalue
    })
}
 //decrement button   
for(i=0;i<dicrementbutton.length;i++){
    var button =dicrementbutton[i]
    button.addEventListener('click',function(event){
     var buttonclicked=event.target
    var input=buttonclicked.parentElement.children[1]
    var inputvalue=input.value
    var newvalue=parseInt(inputvalue)-1
    if(newvalue<1){
        return 1
    }
    input.value=newvalue
    })
}
}



function proceedpay(){
var proceed=document.getElementById('proceed-alart')
var seepro=document.getElementById('alart')
var cancel=document.getElementById('cancle')
proceed.addEventListener('click',()=>{
    seepro.style.display='block'
})
cancel.addEventListener('click',()=>{
    seepro.style.display='none'
})
}
proceedpay()