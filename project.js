let toTopdiv=document.querySelector('.toTop');
window.addEventListener('scroll', function(){
let pxWin = window.pageYOffset;
if(pxWin>200){
  toTopdiv.style.display = 'block';
}
else {
  toTopdiv.style.display = 'none';
}
});

window.addEventListener('load',function(){
toTopdiv.style.display='none';


});
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
    dis8.innerHTML=`Welcome to the CHU CHU PET SHOP ${nameform2}!`;
    // alert(`Welcome to the program ${nameform2}!`);
  }
  else{
    // dis8.innerHTML=`${nameform2} is not name. Please enter a name.`;
    alert(`${nameform2} is not a name.`);
  }
  // dis8.innerHTML=`Welcome to the program ${nameform2}!`;
  // alert(`Welcome to the program ${nameform2}!`);

});
