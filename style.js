// anchor
var anchor = document.querySelectorAll('nav a, #ham-wake a');

for(var i=1; i<anchor.length; i++){
    if(i==7){
        continue;
    }
    anchor[i].addEventListener('click',function(event){
        event.preventDefault();
        let secId = this.innerText.toLowerCase();
        let section = document.getElementById(secId);
        let scroll = setInterval(function(){
            if(section.getBoundingClientRect().top<=0){
                clearInterval(scroll);
            }
            scrollBy(0,20);
        },15);
    });
}

// skills
var pointers = document.querySelectorAll('.skill-pointer');
var skillContainer = document.querySelector('#skills');
var animated = false;
function initialWidth(){
    for(let i=0; i<pointers.length; i++){
        pointers[i].style.width = 0 + "%";
    }
}
function fillBars(){
    for(let i=0; i<pointers.length; i++){
        let dataValue = pointers[i].getAttribute('data-value');
        let ini = 0;
        let stop = setInterval(function(){
            if(ini>=dataValue){
                clearInterval(stop);
            }
            ini += 5;
            pointers[i].style.width = ini + "%";
        },40);
    }
}
window.addEventListener('scroll',function(){
    if(!animated && skillContainer.getBoundingClientRect().top <= window.innerHeight){
        // console.log('arrived');
        initialWidth();
        fillBars();
        animated = true;
    }
});

// Percentage scrolled
var perScroll = document.querySelector('#percent-scroll span');
window.addEventListener('scroll',function(){
    let value = parseInt((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100);
    perScroll.innerText = value;
});


