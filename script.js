function calculate() 
{
    var field1 = parseInt(document.querySelector("#alt1").value);
    var field2 = parseInt(document.querySelector("#alt2").value);
    var calculate;
    calculate = field1 - field2;
    document.querySelector("#result").innerHTML=calculate;
}

