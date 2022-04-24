
function compute()
{   
    let principal = document.getElementById("principal").value;
    if (principal <= 0 || isNaN(principal))
    {
        alert("Enter a valid number");
        document.getElementById("principal").focus();
        return

    }

    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    let interest = principal * years * rate /100;
    let year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="If you deposit <strong>"+principal+"</strong>,\<br\>at an interest rate of <strong>"+rate+"%</strong>\<br\>You will receive an amount of <strong>"+interest+"</strong>,\<br\>in the year <strong>"+year+"</strong>\<br\>"
}

function updateRate(){
    let rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText= `${rateval}%`;
}
