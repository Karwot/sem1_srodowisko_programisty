const btn = document.querySelector("#resultBtn");
const resultHolder = document.querySelector("#calcResult");


//delta < > lub == 0

handleDelta = (delta, a, b, c) => {
    console.log(delta);
    let w = "";
    let z = "";

    let x, x2

    if(delta>0) {
        w = "większa niż"
        z = "funkcja ma dwa miejsca zerowe"
        x = -b+Math.sqrt(delta)/(2*a)
        x2 = -b-Math.sqrt(delta)/(2*a)
    }    
    else if(delta<0) {
        w = "mniejsza niż";
        z = "funkcja nie ma miejsc zerowych"
        x = -b+Math.sqrt(delta)/(2*a)
    } else {
        w = "równa"
        z = "istnieje jedno miejsce zerowe tej funkcji"
    }
    resultHolder.innerHTML = "<p>Delta jest "+ w +" zero. Zatem "+z+".</p>";
    
    if(x) 
        resultHolder.innerHTML += "<p>x = "+x.toFixed(2);
        if(x2) 
            resultHolder.innerHTML += "x<sub>2</sub> = "+x2.toFixed(2) + "</p>";
        else
            resultHolder.innerHTML += "</p>";

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

    handleDelta(delta, a, b, c);

});