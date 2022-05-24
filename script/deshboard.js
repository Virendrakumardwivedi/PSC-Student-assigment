append();

function append(){
   // console.log("yes")
    let data=JSON.parse(localStorage.getItem("students")) || [];
    let container = document.getElementById("container")

    let trash=JSON.parse(localStorage.getItem("trash"))||[];
    
     
    data.forEach(function(el, index){
        let div= document.createElement("div")
        div.setAttribute("id","fundiv")
      // console.log(el) 
       let img=document.createElement("img")
       img.src = el.image;
       img.setAttribute("id","imgp")

       let na = document.createElement("h3");
       na.innerText=`Name-: ${el.name}`;

       let batch = document.createElement("h3")
       batch.innerText=`Batch-: ${el.batch}`;

       let course=document.createElement("h4")
       course.innerText=`Course-: ${el.course}`;

       let unit = document.createElement("h4")
       unit.innerText=`unit-: ${el.unit}`;


       let btn = document.createElement("button");
       btn.innerText="REMOVE";
       btn.setAttribute("id","remov")
       btn.addEventListener("click",function(){
           remove(index);
           window.location.reload();
       });
       div.append(img,na, batch,course,unit,btn);
       container.append(div);
    });  
}
//append();
function remove(index){
    let data=JSON.parse(localStorage.getItem("students")) || [];

let newData = data.filter(function(el , i){
    if(i==index){
        let trash = JSON.parse(localStorage.getItem("trash"))||[];
    trash.push(el);
    localStorage.setItem("trash",JSON.stringify(trash));
   
    }
    else{
        return i!==index;
    }
   
})
localStorage.setItem("students",JSON.stringify(newData))
append();
}