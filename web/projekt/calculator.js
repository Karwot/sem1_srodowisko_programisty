const btn = document.querySelector("#resultBtn");
const resultHolder = document.querySelector("#calcResult");


//delta < > lub == 0

handleDelta = (delta, a, b, c) => {
    console.log(delta);
    let w = "";
    let z = "";

    let bp, bp2;
    let x, x2

    if(delta>0) {
        w = "większa niż"
        z = "funkcja ma dwa miejsca zerowe"
        x = (-b+Math.sqrt(delta))/(2*a)
        x2 = (-b-Math.sqrt(delta))/(2*a)

            /*if(a>0){
               f jest malejąca dla (-inf, p) (??). Rosnąca dla (p, inf) ??? 
            }
            else {
                odwrotnie?
            }*/
    }    
    else if(delta<0) {
        w = "mniejsza niż";
        z = "funkcja nie ma miejsc zerowych"
        x = (-b+Math.sqrt(delta))/(2*a)
    } else {
        w = "równa"
        z = "istnieje jedno miejsce zerowe tej funkcji"
    }
    resultHolder.innerHTML = "<p>	<b>Delta(&Delta;)</b> jest "+ w +" zero. Zatem "+z+".</p>";
    
    if(x) 
        resultHolder.innerHTML += "<p class='formula m-top'>x = "+x.toFixed(2)+"</p>";
        if(x2) 
            resultHolder.innerHTML += "<p class='formula m-top'>x<sub>2</sub> = "+x2.toFixed(2) + "</p>";
        else
            resultHolder.innerHTML += "</p>";

}

// obliczanie delty
btn.addEventListener('click', calculateDelta = () =>
{
    let a = document.querySelector("input[name='a']").value
    let b = document.querySelector("input[name='b']").value
    let c = document.querySelector("input[name='c']").value
    console.log(a+b+c)

    let delta = Math.pow(b,2)-(4*a*c)
    console.log(delta)

    handleDelta(delta, a, b, c);

});