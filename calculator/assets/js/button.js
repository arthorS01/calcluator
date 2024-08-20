import {$,$$} from "./lib.js";
import * as screen from "./screen.js";

export function loadEvents(){
    let allButtons = $$(".numeric-button");
    allButtons.forEach(btn=>{
        btn.addEventListener("click",e=>{
           
            let char = e.target.innerText;
            
            screen.display(char);
        });
    });

    let allOperatorButtons = $$(".operator-button");
    allOperatorButtons.forEach(btn=>{
        btn.addEventListener("click",e=>{
            let char = e.target.innerText;
            screen.display(char);
        })
    });


    $("#clear-screen-button").addEventListener("click",_=>{
        $("#screen-display").innerText = "";
    });

    $("#backspace-button").addEventListener("click",_=>{
        let currentText = $("#screen-display").innerText;

        if(currentText == ""){
            return;
        }

        if(currentText.length == 1) {
            $("#screen-display").innerText = "";
        }else{
            let newText = currentText.slice(0,currentText.length-1);
            $("#screen-display").innerText = newText;
        }
    });

}