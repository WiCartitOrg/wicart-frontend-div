let userditcont=document.getElementById('user-dit')
let user=document.getElementById('user-se')
user.addEventListener('click',()=>{
    userditcont.style.display='block'
    console.log('no')
})        

let usereout=document.getElementById('boder-down')

usereout.addEventListener('click',()=>{
    userditcont.style.display='none'
})       
function liveChart(){
    document.getElementsByClassName('mes-alt')[0].classList.add('mes-alt-out')
document.getElementsByClassName('user-log')[0].style.display='none'
}
function notlivechat(){
    document.getElementsByClassName('mes-alt')[0].classList.remove('mes-alt-out')
document.getElementsByClassName('user-log')[0].style.display=''
}
function livechat(){
    document.getElementsByClassName('mes-alt')[0].classList.remove('mes-alt-out')
document.getElementsByClassName('user-log')[0].style.display='none'
document.getElementsByClassName('mes-box')[0].classList.add('mes-box-out')
}
function remove() {
    document.getElementsByClassName('mes-box')[0].classList.remove('mes-box-out')
}
function done(){
    document.getElementsByClassName('mes-box')[0].classList.remove('mes-box-out')
     
    var cont=document.getElementsByClassName('pop-up-sec')[0]
    var html=
    `
    <div class="mes-pop-up anim">
        <h1>Thanks for contacting us Muhyideen</h1>
        <p>your message has been successfully sent to admin,
            you will be given feedback shortly
        </p>
    </div>
    `
    cont.insertAdjacentHTML('beforeend', html)
}