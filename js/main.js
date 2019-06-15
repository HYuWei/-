var oBton=document.getElementById("btn");
var oDiv1=document.querySelector(".guanggaotu");
var oDiv2=document.querySelector(".datu1");
var oDiv3=document.querySelector(".datu2");
oBton.onclick=function()
{
    oDiv1.style.height="0px"
    oDiv2.style.height="0px"
    oDiv3.style.height="0px"
}

var oImg=document.getElementById("img");
var arr=["images/5bc06e0bN47fc4453.jpg","images/5bc058ccN54bf620f.jpg","images/5bc0585dNcea44735.jpg","images/5bc05a05Ne3c54f50.jpg","images/5bc05a7cN2224f7ea.jpg"];
var arrB=["rgb(84,162,210)","rgb(210,244,205)","rgb(0,0,0)","rgb(0,0,0)","rgb(142,73,255)"];
var oBack=document.querySelector(".banner");
var oBtn1=document.querySelector(".bannerRight1")
 var oBtn2=document.querySelector(".bannerRight2")
var i=1;
 var a=1
 function aa()
{
    oImg.src=arr[i++];
    if(i==arr.length){
        i=1;
    }
}
    setInterval(aa,3600)

function bb()
{
 oBack.style.background=arrB[a++]
    if(a==arr.length){
        a=1;
    } 
  
 }
    setInterval(bb,3600)

    oBtn1.onclick=function()
    {
     if(i==1||a==1)
     {
         oImg.src=arr[--i];  
         oBack.style.background=arrB[--a]
         i=4;
         a=4;
     }
     else{
         oImg.src=arr[i--];  
         oBack.style.background=arrB[a--]
     }
    }

oBtn2.onclick=function()
    {
     if(i==arr.length-1||a==arrB.length-1)
     {
         i=0;a=0;
         oImg.src=arr[++i-1];  
         oBack.style.background=arrB[++a-1]
     }
     else{
         oImg.src=arr[++i]; 
         oBack.style.background=arrB[++a]
     }
    }


    let XXka=document.querySelectorAll('.XXka');
    let maindiv3div=document.querySelectorAll('.maindiv3div');
    console.log(maindiv3div);
    for(let i=0;i<XXka.length;i++){
        XXka[i].onclick=function(){
            for(let j=0;j<XXka.length;j++){
                maindiv3div[j].style.display="none";
            }
            maindiv3div[i].style.display="block";
            return false;
        }
    }

    let data=new Date();
    console.log(data);