const b1 = document.getElementById("box1");
const b2 = document.getElementById("box2");
const b3 = document.getElementById("box3");
const b4 = document.getElementById("box4");
const b5 = document.getElementById("box5");
const box = document.getElementById("main");
const score=document.getElementById('score')
const button = document.getElementById("btn");
const high_score = document.getElementById("high");
const score_button = document.getElementById("btn1");
const reset_game = document.getElementById("btn2");
let child = box.children;
const arr=[]
function generate(idx) {
    child[idx].style.backgroundColor='blue'
    setTimeout(()=>{
        child[idx].style.backgroundColor='lightgray'
    },500)
}
function reset()
{
    window.location.reload()
}
function wrong(idx)
{
    child[idx].style.backgroundColor='red'
    box.style.animation="shake 0.8s infinite"
    setTimeout(()=>{
        child[idx].style.backgroundColor='lightgray'
        box.style.animation=""
    },1000)
}
let res=0;
function clickHandler(idx,arr)
{
    if(arr[0]!=idx)
    {
        wrong(idx);
        box.style.removeProperty("shake")
    }
    else
    {
        res+=1;
        arr.shift()
    }
}
button.addEventListener("click",() => {
    for (let i = 1; i <=5;i++) 
    {
        setTimeout(()=>
        {
            const idx = Math.floor(Math.random()*5);
            arr.push(idx)
            console.log(idx);
            generate(idx);
        },i*1000)
    } 
},{ once: true });
localStorage.setItem("one_time",1)
high_score.innerHTML=localStorage.getItem("max")
b1.addEventListener('click',clickHandler.bind(null,0,arr))
b2.addEventListener('click',clickHandler.bind(null,1,arr))
b3.addEventListener("click",clickHandler.bind(null,2,arr))
b4.addEventListener("click",clickHandler.bind(null,3,arr))
b5.addEventListener("click",clickHandler.bind(null,4,arr))
score_button.addEventListener('click',()=>{
    score.innerHTML=res;
    if(localStorage.getItem("one_item")==1)
    {
        localStorage.setItem("max",res)
        localStorage.setItem("one_time",2)
    }
    else
    {
        if(localStorage.getItem("max")<=res)
        {
            localStorage.setItem("max",res);
        }
    }     
},)
reset_game.addEventListener('click',()=>{
    reset();
})