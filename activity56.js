let btn1=document.querySelector('.button1');
/*
//anonymous function
btn1.addEventListener('click',function(){
alert('Button1 was clicked!');

});
*/

//named functions
btn1.addEventListener('click',click1);

function click1(){
  alert('Button1 was clicked! named function.');
}


//Example 3
let btn2=document.querySelector('.button2');
btn2.addEventListener('click',function(){
  alert('1st click');
});
btn2.addEventListener('click',function(){
  alert('2nd click');
});


//Example 4

let btn3=document.querySelector('.button3');
let msg=document.querySelector('.display1');

btn3.addEventListener('click',function(){
  alert('Button 3 was clicked');
});

btn3.addEventListener('mouseover',function(){
msg.innerHTML += '<br>The mouse is OVER the box';
});

//Activity 5


let btn4=document.querySelector('.button4');
let msg1=document.querySelector('.display2');
var counter=0;

btn4.addEventListener('click',function(){
  alert(`Button was overed ${counter} times`);
});


btn4.addEventListener('mouseover',function(){
  counter++;
msg1.innerHTML += `<br>Moused over ${counter} time(s)`;
});

//Example 5
let btn5=document.querySelector('.button5');
btn5.addEventListener('click',function(event){
  event.target.style.backgroundColor='purple';
  event.target.style.color='white';
  alert('Button changed its background color!');
})


//Example 6
let QCCLink= document.querySelector('.linkqcc');
QCCLink.addEventListener('click', function(e){
  e.preventDefault();
alert('QCC Website is OFF');
});

//Example 7:

let form1=document.querySelector('.myform1');
let name1=document.querySelector('.fullname');
let dis7=document.querySelector('.display3');

form1.addEventListener('submit', function(e){
  e.preventDefault();
  let nameform=name1.value;
  dis7.innerHTML=`Welcome to the program ${nameform}!`;
});

//Activity 6

let form2=document.querySelector('.myform2');
let name2=document.querySelector('.fullname2');
let dis8=document.querySelector('.display4');

form2.addEventListener('submit', function(e){
  e.preventDefault();
  let nameform2=name2.value;
  parseInt(nameform2);
  if(nameform2 =="" ){
    alert("Invalid Entry!");
    // dis8.innerHTML=`Invalid Entry`;
  }
  else if(isNaN(nameform2)){
    dis8.innerHTML=`Welcome to the program ${nameform2}!`;
    // alert(`Welcome to the program ${nameform2}!`);
  }
  else{
    // dis8.innerHTML=`${nameform2} is not name. Please enter a name.`;
    alert(`${nameform2} is not a name.`);
  }
  // dis8.innerHTML=`Welcome to the program ${nameform2}!`;
  // alert(`Welcome to the program ${nameform2}!`);

});


let scrolldisplay=document.querySelector('.display9');
window.addEventListener('scroll',function(){
let pxlwindow=window.pageYOffset;
console.log(`Pixels ${pxlwindow} away from the top window`);
scrolldisplay.innerHTML=`Pixels ${pxlwindow} away from the top window`;

});


let toTopdiv=document.querySelector('.toTop');
window.addEventListener('scroll', function(){
let pxWin = window.pageYOffset;
if(pxWin>150){
  toTopdiv.style.display = 'block';
}
else {
  toTopdiv.style.display = 'none';
}
});

window.addEventListener('load',function(){
toTopdiv.style.display='none';


});


//Example 10
let windowH= document.querySelector('.height');
let windowL=document.querySelector('.width');
window.addEventListener('resize', function(){
  let readH=window.innerHeight;
  let readW=window.innerWidth;
  windowH.innerHTML= `Height = ${readH}`;
  windowL.innerHTML=  `Width = ${readW}`;
});












//
