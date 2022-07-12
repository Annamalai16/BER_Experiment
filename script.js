function calculateBER(){
    document.getElementById("values").style.display = "block";
    let bits = document.getElementById("bitsInput").value;
    let I = document.getElementById("currentInput").value;
    let ones = 0;

    for(let ch of bits){
        if(ch=='1'){
            ones+=1;
        }
    }

    document.getElementById("onesCount").innerHTML = "Ones bit = " + ones;

    let h = 6.6256 * Math.pow(10,-34);
    let c = 3 * Math.pow(10,8);
    let q = 1.602 * Math.pow(10,-19);
    let lambda = 850 * Math.pow(10,-9);
    let Nint = 0.7;
    let Pint = Nint * ((h * c * I) / (q * lambda));
    document.getElementById("Pint").innerHTML = "P(int) = " + Pint.toFixed(4);
    
    let Next = 1.4;
    let Pled = Next * Pint;
    document.getElementById("Pled").innerHTML = "P(led) = " + Pled.toFixed(4);

    let symbol = 0.9;
    let Ip = ((symbol * q * lambda) / (h * c))*Pled;
    document.getElementById("Ip").innerHTML = "I(p) = " + Ip.toFixed(4);
}