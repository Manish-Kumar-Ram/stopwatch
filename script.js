const disp=document.getElementById('disp');
let timer=null;
let sttime=0;
let elspedtime=0;
let isRn=false;

const st=document.getElementById('start')
const stop=document.getElementById('stop')
const resets=document.getElementById('reset')
st.addEventListener('click',()=>{
if(!isRn){
    sttime=Date.now()-elspedtime;
    timer=setInterval(update,10);
    isRn=true;
}
console.log(sttime)
})
stop.addEventListener('click',()=>{

    if(isRn)
    clearInterval(timer);
elspedtime=Date.now()-sttime;
isRn=false;
})
resets.addEventListener('click',()=>{
clearInterval(timer)
sttime=0;
elspedtime=0;
isRn=false;
disp.textContent="00:00:00:00"

})
function update(){
    const curtime=Date.now();
    elspedtime=curtime-sttime;
    let hrs=Math.floor(elspedtime/(1000*60*60));
    let mins=Math.floor(elspedtime/(1000*60)%60);
    let secs=Math.floor(elspedtime/1000%60);
    let milsec=Math.floor(elspedtime%1000/10);
    hrs=String(hrs).padStart(2,"0");
    mins=String(mins).padStart(2,"0");
    secs=String(secs).padStart(2,"0");
    milsec=String(milsec).padStart(2,"0");

    disp.textContent=`${hrs}:${mins}:${secs}:${milsec}`
}
