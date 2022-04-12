const list = document.querySelectorAll('.title');
var index = 0;

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