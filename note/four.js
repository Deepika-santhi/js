let root;
let second;
let text;
let line
async function create()
  {
    root=document.getElementById("container");
    second=document.getElementById("second");
    for(let a=0;a<10;a++)
      {
        random=Math.floor(Math.random()*10000)
        creatediv=document.createElement("div");
       creatediv.setAttribute("class","whole");
        creatediv.innerText=random;
        root.appendChild(creatediv);
      }
    let lef=3;
     let rig=2;
    for(let b=0;b<10;b++)
      {
        
        text=document.createElement("p");
        text.setAttribute("class","count");
        text.innerText=b;
        text.style.left =lef+"%";
         text.style.right =rig+"%";
        line=document.createElement("div");
        line.setAttribute("class","small");
        second.appendChild(line);
        second.appendChild(text);
        lef=lef+10.4
      }
    let number;
    let answer;
    circle=document.querySelectorAll(".whole");
    let length=circle.length;
    smalldiv=document.querySelectorAll(".small");
     let y=260;
     counter=document.querySelectorAll(".count");



    
    
    function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
    }
   
       
     for(let check=0;check<4;check++)
      {
       
      
        
    for(let d=0;d<length;d++)
      {
        await sleep(1000)
       
        console.log(d);
        number=circle[d].innerText;
        for(let repeat=0;repeat<=check;repeat++)
          {
        answer=number%10;
        number=Math.floor(number/10);
        
          }
       
        for(let f=0;f<smalldiv.length;f++)
          {
       
            
            if(Number(counter[f].innerText)==answer)
            {
              
             
               
                 let child=smalldiv[f].lastChild;
                 smalldiv[f].insertBefore(circle[d],child);
               
                 console.log(child);
              
              circle[d].style.width=93+"%";
              smalldiv[f].style.flexDirection = "column-reverse";
              smalldiv[f].appendChild(circle[d]);
             
             
             
            }
          }
      
      }
    root.innerHTML="";
    for(let last=0;last<length;last++)
      {
        console.log("the last is"+last);
        await sleep(1000);
        let children=smalldiv[last].childNodes;
        console.log(smalldiv[last].childNodes)

        while(smalldiv[last].hasChildNodes())
          {
            
           
            smalldiv[last].lastChild.style.transform="translateY(0px)";
             
          smalldiv[last].lastChild.style.transform="translateX(0px)";
             smalldiv[last].lastChild.style.width=7.5+"%";
            root.appendChild(smalldiv[last].lastChild);
           
            
          }
        
      }
      }    
  }