export function $(selector){

    return document.querySelector(selector);
}

export function $$(selector){
    return document.querySelectorAll(selector);
}

export function submit(x,o,y){

    x = Number(x);
    y = Number(y);

    
 switch(o){
    case "+":
        return x+y;
        break;
    case "-":
        return x-y;
        break;
    case "*":
        return x*y;
    case "/":
        return x/y;
    case "%":
        return x % y;
 }
   
}