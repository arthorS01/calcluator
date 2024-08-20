import {$,$$, submit} from "./lib.js";

export function display(chart_to_display){
    let numerals = ['0','1','2','3','4','5','6','7','8','9']
    let operators = ['/','*','+','-',"%"];
    //if char is  a numeric char
    if(numerals.includes(chart_to_display)){

        let text = $("#screen-display").innerText;
        if(text == ""){
            $("#screen-display").innerHTML+=chart_to_display;
            return;
        }

        let length = text.length;
        let char = text[length-1];


       if(operators.includes(char)){
       
        let firstpart = text.slice(0,length-1);
        
        let result = submit(firstpart,char,chart_to_display);
        $("#screen-display").innerText = result;
        return
       }


       $("#screen-display").innerHTML+=chart_to_display;

        
    }

    if(operators.includes(chart_to_display)){
        
        $("#screen-display").innerHTML+=chart_to_display;
        return;
    }

    if(chart_to_display == "="){
        let strCalculations = $("#screen-display").innerText;
       if(strCalculations == ""){
        return ;
       }
        submit(strCalculations);
    }
}