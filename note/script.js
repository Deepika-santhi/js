
document.addEventListener('DOMContentLoaded',start);


async function start()
  {
    function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
    }
    let words="SORTVISUALIZER";
    let word=words.split("");
    let alldiv=document.querySelectorAll(".small");
    let arr="abcdefghijklmnopqrstuvwxyz";
    arr=arr.toUpperCase();
    let letterarr=arr.split("");
    await sleep(1000);
    for(let start=0;start<alldiv.length;start++)
      {
        for(let end=0;end<alldiv.length;end++)
          {
            await sleep(100);
        let random=Math.floor(Math.random()*arr.length);
          alldiv[start].innerText=arr[random];  
          }
        alldiv[start].innerText=word[start];
      }

   
  

  }
$(document).ready(function() {
                var divWidth = $("#menu").width();
                  
                $("#image").mouseenter(function(){
                  $("li").css("fontSize", "38px");
                    $("#menu").animate({
                        width: "330"
                    },700);
                })
                 $("#menu").mouseleave(function(){
                    $("li").css("fontSize", "0px");
                    $("#menu").animate({
                        width: divWidth
                    },700);
                });
            });
            