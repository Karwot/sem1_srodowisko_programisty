const btn = document.querySelector("#resultBtn")
const resultHolder = document.querySelector("#calcResult");

//delta < > lub == 0

deltaGTzero = () => {
    console.log('2 miejsca zerowe')
}

deltaLTzero = () => {
    console.log('brak')
}

deltaEQzero = () => {
    console.log('1 miejsce zerowe')
}

// obliczanie delty
btn.addEventListener('click', calculateDelta = () =>
{
    let a = document.querySelector("input[name='a']").value
    let b = document.querySelector("input[name='b']").value
    let c = document.querySelector("input[name='c']").value
    console.log("HI")
    console.log(a+b+c)

    let delta = Math.pow(b,2)-(4*a*c)
    console.log(delta)

    if(delta<0) {
        //brak miejsce zerowych
        deltaLTzero
    }
    else if(delta>0) {
        deltaGTzero
    } 
    else {
        deltaEQzero
    }

});


