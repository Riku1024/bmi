function bmiResult(){
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);

    document.getElementById("result").innerText = "結果:" + weight / ((height/100)*(height/100));
    if(18.5 > weight / ((height/100)*(height/100))){
        document.getElementById("body-state").innerText = "肥満度 : 低体重";
    }else if(18.5 <= weight / ((height/100)*(height/100)) && weight / ((height/100)*(height/100)) <= 25){
        document.getElementById("body-state").innerText = "肥満度 : 普通";
    }else{
        document.getElementById("body-state").innerText = "肥満度 : 肥満";
    };
};