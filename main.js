const result =document.getElementById ('result');
const buttons =document.querySelectorAll ('.button');

let operation='';

buttons.forEach(btn=>{
    btn.addEventListener('click',()=>{
      const value =btn.textContent;

      if(value === 'C' ){
        operation='';
        result.value='';
      }else if(value === '='){
      result.value = eval(operation);
      expression=result.value;
      }else if (value === '←'){
        operation =operation.slice(0,-1);
      result.value=operation;
      }
    else if (/[+\-*/]/.test(value) && /[+\-*/]$/.test(operation))  {
    result;
    }
      else{
        operation+=value;
        result.value=operation
      }
      
    });
});