let a=""
remove = () =>{
    a = a.substring(0, a.length - 1);
    document.getElementById("input-text").value =a
}
cal = (val) =>{
    a = document.getElementById("input-text").value += val; 
    document.getElementById("input-text").value =a;
}

clr = () =>{
    document.getElementById("input-text").value="";
    a=""
}

calculate = () =>{
    a=document.getElementById("input-text").value;
    document.getElementById("input-text").value = eval(a);
}