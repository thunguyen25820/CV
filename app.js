const list = document.querySelectorAll('.title');
const navbtn = document.querySelector('.navbtnmobile');
const navcontainer = document.querySelector('.nav-mobile');
const closebtn = document.querySelector('.nav-close');
var index = 0;

// navigationbar mobile
function ToggleNav(){
    navcontainer.classList.toggle('hide');
}

navbtn.addEventListener('click', ToggleNav);
navcontainer.addEventListener('click', ToggleNav);
closebtn.addEventListener('click', () => {
    navcontainer.classList.remove('.nav-mobile');
})
// 
setInterval((e)=>{
    // list.forEach((e) => {
    //     e.classList.remove('animation-title');
    // })
    list[index].classList.add('animation-title');
    index ++;
    if( index == list.length){
        index =0;
        list.forEach((e) => {
            e.classList.remove('animation-title');
        })
    }
},500)

function TogglePopup(){
    document.querySelector('.popup').classList.toggle('hide');
    document.querySelector('body').classList.toggle('scroll-none');
}

document.querySelector('.detailbtn').addEventListener('click',TogglePopup)

document.querySelector('.popup-close').addEventListener('click', TogglePopup)


