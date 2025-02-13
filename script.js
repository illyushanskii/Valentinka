let T;
let width = 30;
let hwidth = 20;
let rotate = 0;
let rValue = 10;
let count = 0;
function StartImg(){
    if(width >= 80){
        document.getElementById("varvar").style.width = "80%";
        document.getElementById("varvar").style.rotate = "0deg";
        document.getElementById("varvar").style.top = "80px";
        document.getElementById("body").style.background= "url('hearts1.png')";
        document.getElementById("text").style.visibility = "visible";
        document.getElementById("hearts").style.display = "none";
        document.getElementById("yes").style.display = "block";
        document.getElementById("no").style.display = "block";
        document.getElementById("question").style.display = "block";
        clearTimeout(T);
        return;
    }
    document.getElementById("varvar").style.width = width+"%";
    document.getElementById("hearts").style.width = hwidth+"%";
    document.getElementById("varvar").style.rotate = rotate+"deg";
    if(width>=70)
        rotate+=2;
    else
    rotate += rValue;
    hwidth+=1;
    width+=0.1;
    rValue-=1;
    T = setTimeout(StartImg,10);
}
function moveButton() {
    count++;
    let button = document.getElementById("no");
    let screenWidth = window.screen.width - 140;
    let screenHeight = window.screen.height-50;

    let newX = Math.random()*screenWidth; // Рандомное значение по X
    let newY = Math.random()*screenHeight; // Рандомное значение по Y
    // Получаем координаты курсора
    let cursorX = event.clientX;
    let cursorY = event.clientY;
    // Обновляем позицию кнопки
    button.style.left = newX + "px";
    button.style.top = newY + "px";
}
function yesbth(){
    if(count == 0)
    alert("ОГО, відразу так, дякую!");
    else
    alert("Уху пішли гуляти (ти намагалася натиснути \"Ні\" "+count+"р.)");
}