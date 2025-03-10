//Timer
function updateclock() {
  let date = new Date();
  let hours = date.getHours().toString().padStart(2,0);;
  let minutes = date.getMinutes().toString().padStart(2,0);;
  let seconds = date.getSeconds().toString().padStart(2,0);
  let day = date.getDate();
  let mon = date.getMonth();
  let yr = date.getFullYear();
  
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  
  let dates = document.getElementById("datesd");
  dates.textContent = day;
  let month = document.getElementById("mon");
  month.textContent = months[mon];
  let clock = document.getElementById("clock");
  clock.textContent = `${hours}:${minutes}:${seconds}`;
  
}
updateclock();
setInterval(updateclock, 1000);

//task

document.getElementById("atask").addEventListener("click",()=>{
let intsk=document.getElementById("inputTask")
let input_task=document.getElementById("inputTask").value;
if(input_task.trim()=="") return
let divv= document.createElement("div");
let cont=document.getElementById("cont")
let pendtask=document.getElementById("pendtask")
divv.className="divcls"


pendtask.appendChild(divv);
let sidediv=document.createElement("div");
sidediv.className="ls"
divv.appendChild(sidediv);
let check=document.createElement("input")
check.type="checkbox"
check.style.background="red"
check.style.marginRight="20px"
check.style.width="20px"

check.addEventListener("change",()=>{
  if(check.checked){
    
    let cmptask=document.getElementById("addcomptak")
    let adcptask=document.createElement("div")
    cmptask.appendChild(adcptask);
    
    let tasks=document.createElement("div")
    tasks.innerHTML=divv.innerHTML;
    adcptask.appendChild(tasks)
    
    tasks.className="completed-task"
    tasks.style.opacity="0.5";
    let checkboxx=tasks.querySelectorAll("input[type='checkbox']")
    checkboxx.forEach(cb=>cb.style.pointerEvents="auto")
    divv.remove()
  }
  else{
    divv.style.pointerEvents="auto"
    divv.style.opacity="1"
  }
})
sidediv.appendChild(check)
let hh2=document.createElement("h2")

hh2.textContent=input_task;
hh2.style.color="rgb(28, 7, 113)"
console.log(hh2);

sidediv.appendChild(hh2)
let sidediv1=document.createElement("div")
sidediv1.className="rs"

divv.appendChild(sidediv1);
let but=document.createElement("button")
but.textContent="x"



but.className="delbut"


but.id="delbut"
sidediv1.appendChild(but)
console.log(but);
but.addEventListener("click",()=>{
  divv.remove()
})


console.log(input_task);

intsk.value="";

})

