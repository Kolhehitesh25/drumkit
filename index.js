
var x=document.querySelectorAll(".drum").length;
for(var i=0;i<x;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        alert("i get clicked!!")
    });

}


// function handleclick(){
//     alert("i am clicked");
// }//rather than writing outside we use anonyms function

