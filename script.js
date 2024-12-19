let feet=document.getElementById('feet');
let inch=document.getElementById('inch');


feet.addEventListener('input',(e)=>{
  let f= e.target.value;
  let i= f*12;
  inch.value=i
});

inch.addEventListener('input',(e)=>{
  let i= e.target.value;
  let f= i/12;
  if(!Number.isInteger(f)){
    f=f.toFixed(2)
  };
  feet.value=f
});