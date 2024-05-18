
let buttonViewMore=document.querySelector(".clear-margin");
// console.log("testt");
let isOpen=false;
buttonViewMore.addEventListener("click",()=>{
  console.log("test");
  if(!isOpen){
    isOpen=true;
      buttonViewMore.textContent="Hide All";
  }
  else{
    isOpen=false;
    buttonViewMore.textContent="View All";
  }
});
