


document.addEventListener('DOMContentLoaded',anni);
// setTimeout(anni,1000);
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function anni()
  {
    await sleep(1000);
let element=document.getElementById("but");
    element.style.transform="translateX(100px)";
    element.style.width="155px";
    element.style.height="60px";
    element.style.backgroundColor="rgb(#cfd1d1)";
    element.style.transition="all 1s";
  }

let base;
function selection() {

  base = document.getElementById("secondmain");
  
if(base.innerHTML=="")
{
   let max=50;
    let min=5;
  for (let x = 0; x < 9; x++) {
    console.log(x);
     let random=Math.floor(Math.random() * (max - min + 1)) + min;
    let element = document.createElement("div");
    element.setAttribute("class", "small");
    element.innerText = random;
    element.style.height = random + "%";
    element.setAttribute("id", x);
    element.style.order = x;
    base.appendChild(element);
    console.log(element.style.order);
  }
  setTimeout(checking, 1000);
}
}
let select;
let f;
let d;
let minimum;
let count;



async function checking() {
  select = document.querySelectorAll(".small");
  for (f = 0; f < select.length; f++) {
    count = f;
    select = document.querySelectorAll(".small");
    for(let num=0;num<select.length;num++)
    {
        if(num==f)
        {
            break;
        }
        else
        {
        select[num].classList.remove("colouring")
        }
    }
   select[f].classList.add("colouring");
   
     
    
   
    
    minimum = select[f];
    
    for (d = f + 1; d < select.length; d++) {
      await sleep(900);
      
      swaping();
    
      
    }
    console.log("the minnimum value is" + minimum);
    minimum.style.backgroundColor = "grey"

    let o = minimum.style.order;
    minimum.style.order = select[f].style.order;
    select[f].style.order = o;
    

swap(minimum, select[f]);
  
     
  }
}


function swaping() {
  
  select[d].style.backgroundColor = "skyblue";

   select[d - 1].style.backgroundColor = "white";
  

 
  
  if (parseInt(minimum.innerText) > parseInt(select[d].innerText)) {
    console.log(select[d]);
    minimum = select[d];
    
    console.log("the count" + count);
    console.log("the min" + minimum.style.order);
  }
 
}



const swap = function (nodeA, nodeB) {
    const parentA = nodeA.parentNode;
    const siblingA = nodeA.nextSibling === nodeB ? nodeA : nodeA.nextSibling;

   
    nodeB.parentNode.insertBefore(nodeA, nodeB);

    
    parentA.insertBefore(nodeB, siblingA);
};