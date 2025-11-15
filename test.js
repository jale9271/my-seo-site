
var slide=document.getElementsByClassName('slide');
var prev=document.querySelector('.prev');
var next=document.querySelector('.next');

var count=0;

function displayNone(){
    for(var i=0; i<slide.length; i++){
        slide[i].style.display='none';
    }
}

next.addEventListener("click",function(e){
    e.preventDefault();
    count++;
    if(count>slide.length-1){
        count=0;
    }
    displayNone();
    slide[count].style.display='block';
})



prev.addEventListener("click",function(e){
    e.preventDefault();
    count--;
    if(count<0){
        count=slide.length-1;
    }
    displayNone();
    slide[count].style.display='block';
})