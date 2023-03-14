
let parent;
let made;
let mark;
function insertion() {
  parent = document.getElementById("root");
  parent.innerHTML="";
  for (let i = 0; i < 9; i++) {
    let num = Math.floor(Math.random() * 50)+5
    made = document.createElement("div");
    made.setAttribute("class", "whole");
    made.setAttribute("id", i);
    made.innerText = num;
    made.style.height = num + "%";
    made.style.order = i;
    parent.appendChild(made);

  }
  setTimeout(program, 1500);

}
let choose;
let count;
let movedown;
let countarr=[];
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function program() {
  choose = document.querySelectorAll(".whole");
  console.log(choose);
  for (g = 1; g < choose.length; g++) {
    console.log("the g is" + g)
    choose = document.querySelectorAll(".whole");

  count = g;
    for (h = g; h >= 0; h--) {
      insert();
      await sleep(1000);
    }
    
      console.log("the count is"+count);
      console.log(choose[g])
      choose[g].style.transition = " all 1s";
      choose[g].style.transform = "translateY(0)";
      choose[g].style.transform = "translateX(0)";
      // swap(choose[g], choose[count])
  }

   for(let end=0;end<choose.length;end++)
    {
      console.log(end);
      choose[end].style.backgroundColor="rgb(255, 165, 0)"
    }
}


function insert() {
  choose = document.querySelectorAll(".whole");
   movedown = choose[g].style.transform = "translateY(200px)";
  let a=Number(choose[g].style.order);
  let b=Number(choose[h].style.order);
   console.log(h);
   choose[g].style.backgroundColor = "tomato";
   
  choose[h].style.backgroundColor = "lightgreen";
  if (parseInt(choose[g].innerText) < parseInt(choose[h].innerText))
    
  {
    
    choose[g].style.transform = "translateX(-50px)";
    choose[h].style.transform = "translateX(50px)";
    choose[h].style.transition = " all 2s";
   
      choose[h].style.backgroundColor = "lightgreen";
      choose[h].style.transform = "translateX(0)";
    // choose[h].style.transform = "translateX(100%)";;
    if(a-1<0)
    {
      a=0
    }
    console.log("The a is"+a);
    console.log("The b is"+b)
     choose[g].style.order=Number(a-1);
    choose[h].style.order=Number(b+1);
     // swap(choose[g], choose[h])
  }
  

}
//  function swap(nodeA, nodeB) {
//   const parentA = nodeA.parentNode;
//   const siblingA = nodeA.nextSibling === nodeB ? nodeA : nodeA.nextSibling;
//   nodeB.parentNode.insertBefore(nodeA, nodeB);
//   parentA.insertBefore(nodeB, siblingA);
// };