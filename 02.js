
    function add(){
    var a =(document.getElementById('num1').value);
    var b = (document.getElementById('num2').value);
    if(a.length==0||b.length==0){
        alert("ENTER THE NO. FIRST")
        document.getElementById('result').value=("");
    }
    else{a=parseFloat(a);
    b=parseFloat(b);
    let result = a+b;
    document.getElementById('result').value=result;}
    }
function sub(){
    var a =(document.getElementById('num1').value);
    var b = (document.getElementById('num2').value);
    if(a.length==0||b.length==0){
        alert("ENTER THE NO. FIRST")
        document.getElementById('result').value=("");
    }
    else{a=parseFloat(a);
    b=parseFloat(b);
    let result = a-b;
    document.getElementById('result').value=result;}
}
function multiply(){
    var a =(document.getElementById('num1').value);
    var b = (document.getElementById('num2').value);
     if(a.length==0||b.length==0){
        alert("ENTER THE NO. FIRST")
        document.getElementById('result').value=("");
       }
    else{a=parseFloat(a);
    b=parseFloat(b);
    let result = a*b;
    document.getElementById('result').value=result;}
}
function divide(){
    var a =(document.getElementById('num1').value);
    var b = (document.getElementById('num2').value);
    if(a.length==0||b.length==0){
        alert("ENTER THE NO. FIRST")
        document.getElementById('result').value=("");

    }
    else{a=parseFloat(a);
    b=parseFloat(b);
    let result = a/b;
    document.getElementById('result').value=result}
}
function remain(){
    var a =(document.getElementById('num1').value);
    var b = (document.getElementById('num2').value);
    if(a.length==0||b.length==0){
        alert("ENTER THE NO. FIRST")
        document.getElementById('result').value=("");
    }
    else{a=parseFloat(a);
    b=parseFloat(b);
    let result = a%b;
    document.getElementById('result').value=result;}
}
function refresh(){
    c="";
    document.getElementById('num1').value=(c);
    document.getElementById('num2').value=(c);
    document.getElementById('result').value=(c);
}