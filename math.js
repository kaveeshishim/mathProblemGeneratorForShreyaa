var ans;
function mathProblem(operation){
    if(operation=="+"){
        var num1=Math.floor(Math.random()* 11)
        var num2=Math.floor(Math.random()* 11)
        ans=num1+num2
    }
    if(operation=="*"){
        var num1=Math.floor(Math.random()* 11)
        var num2=Math.floor(Math.random()* 11)
        ans=num1*num2
    }
    document.getElementById("questionText").innerText=num1+operation+num2+"=?";
}
function check(){
    ans=String(ans);
    var input=document.getElementById("useranswer")
    if(ans=="undefined"){
        document.getElementById("answer").innerText("Please click an operation")
    }
    if(input.value==ans){
        document.getElementById("answer").innerText="Yes it is "+ans+"!";
    }
    if(input.value!=ans){
        document.getElementById("answer").innerText="No it's "+ans;
    }
}