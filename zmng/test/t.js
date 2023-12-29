
let t=123
console.log( parseFloat(t))

t="123.3"
console.log(isNumber(1423))
console.log(isNumber(14.2))
console.log(isNumber(t))
t="12"
console.log(isNumber(t))


//false
console.log(isNumber(".5"))
console.log(isNumber(".a"))
console.log(isNumber("."))
console.log(isNumber(""))
console.log(isNumber(null))
console.log(isNumber(undefined))
function isNumber(a){

    if(a=="")
        return  false;

    if(a==null)
        return  false;

    if(isNaN(Number(a,10))){

        return false

    }

    else{

        return true

    }

}