var array = [];
var x =""

function Submit(){
    var a = document.getElementById('x1').value;
    var b = document.getElementById('x2').value;
    var c = document.getElementById('x3').value;

    var record = {
        person:a,
        days:b,
        categories:c,
    }
    array[array.length]=record;
    alert("Successfully submited")
}

function getBill(){
  
    for(val of array)
    {

        if(val.categories=="Delux")
        {
            if(val.day>5){
                x =val.days*val.person*(2000-250);
            }
            else{
                x =val.days*val.person*(2000);
            }
        }
        else if(val.categories=="Business")
        {
            if(val.day>3){
                x =val.days*val.person*900;
            }
            else{
                x =val.days*val.person*1000;
            }
        }
            
        if(val.categories=="Economy")
        {
            x =val.days*val.person*500;
        }
        if(val.categories=="SuperDuper")
        {
            x =val.days*val.person*10000 +" enjoy hard..!!!"
        
        }
        document.getElementById("x4").value=x;
    }

}
function getTBill()
{
    var y=""
    for(val of array)
    {
    y=y+`
    <tr>
        <td>${val.person}</td>
        <td>${val.days}</td>
        <td>${val.categories}</td>
        <td>${x}</td>
    </tr>
    `
    }
    console.log(y);
    document.getElementById("x5").innerHTML=y;
}
    


