var firstContainer = document.querySelector('.container-1');
var secondContainer = document.querySelector('.container-2');
var thirdContainer = document.querySelector('.container-3');
var lastContainer = document.querySelector('.container-4');
var parentContainer= document.querySelector('.parent-container');
var theList = document.querySelectorAll('.the_list');
var container1 = document.querySelector('.container-1');
var container2 = document.querySelector('.container-2');
var container3 = document.querySelector('.container-3');
var container4 = document.querySelector('.container-4');
var buttons = document.querySelector('.buttons')

var anyContainer;
anyContainer = 1;

function buttonclicked(){
    if (anyContainer == 1){
        firstContainer.style.display = 'none';
        buttons.style.top = '488px';
        lastContainer.style.display = 'none';
        secondContainer.style.transform = 'rotate(45deg)';
        thirdContainer.style.transform = 'rotate(-45deg)';
        secondContainer.style.transition = '0.7s';
        thirdContainer.style.transition = '0.7s';
        container2.style.backgroundColor = 'black';
        container3.style.backgroundColor = 'black';
        anyContainer = 0;
        theList.forEach((two) => {
            two.style.display = 'flex';
        }
        );
    }
    else{
        firstContainer.style.display = 'block';
        lastContainer.style.display = 'block';
        buttons.style.top = '380px';
        thirdContainer.style.transform = 'rotate(360deg)';
        secondContainer.style.transform = 'rotate(-360deg)';
        secondContainer.style.transition = '0.7s';
        thirdContainer.style.transition = '0.7s';
        container2.style.backgroundColor = 'white';
        container3.style.backgroundColor = 'white';
         theList.forEach((two) =>{
            two.style.display = 'none';
        }
        );
        anyContainer = 1;
    }  
}

parentContainer.addEventListener('click', buttonclicked);


var headerContainer = document.querySelectorAll('.header-container');
var nextBtn = document.querySelector('.next');
var prevBtn = document.querySelector('.prev');

var each = 0;

function nextbutton(){
    each++;
    if(each > headerContainer.length-1){
        each = 0;
    }
   headerContainer.forEach((roll) => {
       roll.style.display = 'none';
    headerContainer[each].style.display = 'flex';
   }
   );   
}
function prevbutton(){
    each--;
    if(each < 0){
        each = headerContainer.length-1;
    }  
   headerContainer.forEach((roll) => {
       roll.style.display = 'none';
    headerContainer[each].style.display = 'flex';
   }
   );   
}


nextBtn.addEventListener('click', nextbutton);
prevBtn.addEventListener('click', prevbutton);
