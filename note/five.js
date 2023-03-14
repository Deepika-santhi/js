let root;
let newdiv;
let random;
async function count()
  {
     let max=9;
    let min=1;
    root=document.getElementById("main");
     root.innerHTML=""
    
    for(let a=0;a<=9;a++)
      {
    random=Math.floor(Math.random() * (max - min + 1)) + min;
    newdiv=document.createElement("div");
    newdiv.setAttribute("class","create");
    newdiv.setAttribute("id",a);
         newdiv.innerText=random;
        if(random>5)
        {
          random=random*5;
        }
        else
        {
           random=random*random;
        }
    newdiv.style.height=(random+3)+"%";
   
        root.appendChild(newdiv);
        
      
    }
    let duplicate;
    let text;
    let lef=2;
     let rig=2;
    let one;
    let two;
    let counting;
    let second=document.getElementById("dupli");
    second.innerHTML="";
    for(let a=0;a<9;a++)
      {
        duplicate=document.createElement("div");
        duplicate.style.height=((a*5)+10)+"%";
        duplicate.setAttribute("class","sec");
        second.appendChild(duplicate);
        duplicate.innerText=a+1;
        text=document.createElement("p");
        text.setAttribute("class","number")
        text.setAttribute("id",a);
        text.innerText=0;
        text.style.left =lef+"%";
         text.style.right =rig+"%";
        second.appendChild(text);
        lef=lef+7.7;
      }
 
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
 one=document.querySelectorAll(".create");
console.log(one);
 two=document.querySelectorAll(".sec");
console.log(two);
 counting=document.querySelectorAll(".number");
let len=one.length;
    
let x=173;
let y=216;
let z;
  
     let cloning;
    let clonearr=[];
    for (let index = len-1; index >= 0; index--) 
    {
       x=126;
       y=157;
       z=230;
     
      console.log(index);
     
      for (let ind1 =0; ind1 <two.length; ind1++)
        {
           console.log(ind1);
         await sleep(200); 
        if(Number(one[index].innerText)==Number(two[ind1].innerText))
        {
         
          
      
           one[index].innerText="";
          one[index].style.transition="all 1s";
          one[index].style.height="0px"
           one[index].style.backgroundColor="rgb(" + x + "," + y + "," + z + ")"
       two[ind1].appendChild(one[index]);
          
          
        counting[ind1].innerText=parseInt(counting[ind1].innerText)+1
        two[ind1].style.backgroundColor="rgb(" + x + "," + y + "," + z + ")";
        
        }
    }
  

  }
    root.innerHTML="";
    console.log(clonearr);
        counting=document.querySelectorAll(".number");
    for(let last=0;last<two.length;last++)
      {
    await sleep(200); 
        if(Number(counting[last].innerText!=0))
           {
          let limit=Number(counting[last].innerText)
        for(let last1=0;last1<limit;last1++)
          {
            counting[last].innerText=parseInt(counting[last].innerText)-1
             cloning=two[last].cloneNode(true);
            console.log(two[last]);
             clonearr.push(cloning);
            cloning.style.backgroundColor="tomato";
            console.log(cloning);
           
            console.log(root);
           
             root.appendChild(cloning);
          }
        }
        
      }


     two=document.querySelectorAll(".sec");
    for(let last=0;last<two.length;last++)
      {
        two[last].style.backgroundColor="white"
      }
   
  }
