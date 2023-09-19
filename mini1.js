let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ol");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    if(inp.value==""){
        return ;
    }
    item.innerText=inp.value;
    ul.appendChild(item);
    let delbtn=document.createElement("button");
    delbtn.innerText="X";
    delbtn.classList.add("del");
    item.appendChild(delbtn);
    inp.value="";
});

// now code for delete the list items
// let delbtns=document.querySelectorAll(".del");
// for(delbtn of delbtns){
//     delbtn.addEventListener("click",function(){
//         let par=this.parentElement;
//         par.remove();
        
//     });
// }

// but the above code iis not deleting the new task because the new task arenot he part of your in
//inner text.
// to slolve this problem we can use bubbling propety
ul.addEventListener("click", function(event){
    
    if(event.target.nodeName=="BUTTON"){
        let deltks =event.target.parentElement;
        deltks.remove();
    }
   
});