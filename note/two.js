let mainarray = [];
let create;
let index = 0;
let ht = document.getElementById("maindiv");

document.addEventListener('DOMContentLoaded',but);

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function but()
  {
    await sleep(1000);
let element=document.getElementById("inp");
    element.style.transform="translateY(10px)";
    await sleep(1000);
    element.style.transform="translateX(100px)";
    element.style.width="155px";
    element.style.height="60px";
    element.style.backgroundColor="white";
    element.style.transition="all 1s";
  }





function start() {
  while (ht.hasChildNodes()) {
    ht.removeChild(ht.firstChild);
  }
 let max=50;
    let min=5;
  for (let a = 0; a < 9; a++) {

    mainarray.push(Math.floor(Math.random() * (max - min + 1)) + min);


    create = document.createElement("div");;
    create.classList.add("smalldiv");
    create.style.height = mainarray[a] + "%";
    create.style.order = a;
   
    ht.appendChild(create);
    create.innerText += mainarray[a];
    // console.log(create);
  }
  console.log(mainarray);

  setTimeout(check, 800);
}
let count = 0;
let d;
let created;
function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
   }
async function check() {
  count++;
  // let created=ht.children;
  created = document.querySelectorAll(".smalldiv");
  for (let c = 0; c < created.length-1; c++) {
    console.log(c)

    for (d = 0; d < created.length - (c+1); d++) {
      await sleep(1000);
      swap();
     
  }



   

}
    for(let end=0;end<created.length;end++)
     {
       console.log(end);
       created[end].backgroundColor="skyblue";
     }
   
        } 
   function swap(){
     created=document.querySelectorAll(".smalldiv");
          console.log(created);
        console.log("d is" + d);
        for(let s=0;s<created.length;s++)
          {
             created[s].style.backgroundColor = "white";
          }
        created[d].style.backgroundColor = "rgb(214, 87, 117)";
        created[d + 1].style.backgroundColor = "rgb(214, 87, 117)";

      

        if(parseInt(created[d].innerText) > parseInt(created[d + 1].innerText))
             {

            console.log("the height is:"+created[d].style.height);
               console.log("the height is:"+created[d+1].style.height);

          let hei=created[d].style.order;  
          created[d].style.order=created[d+1].style.order;
          created[d+1].style.order=hei ;


               
         
          let select=created[d]
               
              created[d].parentNode.insertBefore(created[d], created[d + 1]);
          created[d + 1].parentNode.insertBefore(created[d + 1], select);
        }
   
   
   
   }



  