// code your solution here
function saturdayFun (act= "roller-skate"){  
        return (`This Saturday, I want to ${act}!`);   
    }
   
function mondayWork(act ="go to the office"){
    return `This Monday, I will ${act}.`
    }

function wrapAdjective (sty = "*"){
    return function (adj= "a hard worker"){
        return `You are ${sty}${adj}${sty}!`
}
}
function wrapAdjective (sty = "||"){
    return function (adj = "a dedicated programmer"){
        return `You are ${sty}${adj}${sty}!`
    }

}

