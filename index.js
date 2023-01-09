const display_1=document.querySelector('.display-1');
const display_2=document.querySelector('.display-2');
const display_3=document.querySelector('.display-3');
const numbers=document.querySelectorAll('.number');
const operation=document.querySelectorAll('.operation');
const equal=document.querySelector('.equal');
const clear=document.querySelector('.clear-All');
const clear_Entity=document.querySelector('.clear-Entity');

let havedot=false;
let dis1Num="";
let dis2Num="";
let result=null;
let lastOperation = '';

numbers.forEach(num => {
    num.addEventListener('click',(e)=>{
        if(e.target.innerText === '.' && !havedot){
            havedot=true;
        }
        else if(e.target.innerText === '.' && havedot){
            return;
        }
        dis2Num+=e.target.innerText;
        display_2.innerText=dis2Num;
    })   
});
operation.forEach( operation =>{
    operation.addEventListener('click', (e)=>{
        if(!dis2Num) return;
        havedot=false;
        const operationName=e.target.innerText;
        if(dis1Num && dis2Num && lastOperation){
            mathOperation();
        }else{result=parseFloat(dis2Num);
        }
        clearVar(operationName);
        lastOperation = operationName;
        console.log(result);
    })
});

function clearVar(name =''){
    dis1Num+=dis2Num+ ' ' +name + ' ';
    display_1.innerText = dis1Num;
    display_2.innerText="";
    dis2Num=""; 
    display_3.innerText= result;
}
function mathOperation(){
    if (lastOperation === 'X'){
        result = parseFloat(result) * parseFloat(dis2Num);
    }
    else if (lastOperation === '+'){
        result = parseFloat(result) + parseFloat(dis2Num); 
    }else if (lastOperation === '-'){
        result = parseFloat(result) - parseFloat(dis2Num);
    }else if (lastOperation === '%'){
        result = parseFloat(result) % parseFloat(dis2Num);
    }else if (lastOperation === '/'){
        result = parseFloat(result) / parseFloat(dis2Num);
    }
}

equal.addEventListener('click', (e)=>{
    if (!dis1Num || !dis2Num) result;
    havedot=false;
    mathOperation();
    clearVar();
    display_2.innerText= result;
    display_3.innerText='';
    dis2Num= result;
    dis1Num='';
});

clear.addEventListener('click', (e)=>{
    display_1.innerText='0';
    display_2.innerText='0';
    dis1Num='';
    dis2Num='';
    result='';
    display_3.innerText='0';
});

clear_Entity.addEventListener('click', (e)=>{
    display_1.innerText='';
    dis2Num='';
});

window.addEventListener('keydown', (e) => {
    if(
        e.key === '0'||
        e.key === '1'||
        e.key === '2'||
        e.key === '3'||
        e.key === '4'||
        e.key === '5'||
        e.key === '6'||
        e.key === '7'||
        e.key === '8'||
        e.key === '9'||
        e.key === '.'

    ){
       clickButtonE1(e.key);
    }else if(
        e.key==='+'||
        e.key==='/'||
        e.key==='%'||
        e.key==='-'   
    ){
        clickOperation(e.key);
    }else if(e.key==="*"){
        clickOperation('x');
    }
    
});

function clickButtonE1(key){
    numbers.forEach(button =>{
        if(button.innerText === key){
            button.click();
        }
    })
}
function clickOperation(key){
   operation.forEach(button =>{
    if(button.innerText===key){
        button.click();
    }
   }) 
}
