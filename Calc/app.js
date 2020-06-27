

function getNumber(num){
    result = document.getElementById("result");
  result.value += num;
  answer.value = eval(result.value)
  
}

function clearbtn(){
    result = document.getElementById("result");
    result.value = "0";
    answer.value = "0"
}

function ans(){
    result = document.getElementById ("result");
    answer.value = eval(result.value );
    result.value = ""
}

function grey(){
    document.getElementById("btn").style.backgroundColor="grey";
    
}

function levenge(){
    document.getElementById("btn").style.backgroundColor="levenge";
    
}

function delet(){
    document.getElementById("result");
    var a = result.value.split("");
    a.splice(a.length-1,1)
    var b = a.join("");
    b.toNumber;
    result.value = b;
    if(result.value === ""){
    answer.value="0"
    }
    else{
    answer.value = eval(result.value)
    }
}


