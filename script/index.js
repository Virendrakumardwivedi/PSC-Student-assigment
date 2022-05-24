
function Student(n,c,u,i,b){
this.name=n;
this.course=c;
this.unit=u;
this.image=i;
this.batch=`Ft-Web${b}`;
}
function storeData(e){
    e.preventDefault();
  let from=document.getElementById("student_data");
  let name=from.name.value;
  let course = from.course.value;
  let unit = from.unit.value;
  let image = from.image.value;
  let batch = from.batch.value;
  //console.log(name,course,unit,image,batch)
  let s1=new Student(name,course,unit,image,batch)
  let data=JSON.parse(localStorage.getItem("students")) || [];
  data.push(s1)
  localStorage.setItem("students",JSON.stringify(data));
  console.log(s1)
  window.location.reload();

}
function calculate(){
    let data=JSON.parse(localStorage.getItem("students")) || [];
    let obj={}
    for(let i=0; i<data.length; i++){
        if(obj[data[i].batch]==undefined){
            obj[data[i].batch]=1
           
        }
        else{
            obj[data[i].batch] +=1
          
        }
    }
    let top = document.getElementById("navbar");
    for(var i in obj){
        let p = document.createElement("p")
        p.append(i,"--",obj[i])
        top.append(p)
       
    }
    console.log(obj)
}
calculate();
