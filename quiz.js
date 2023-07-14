var canvas = document.getElementById('quizboard'),
    ctx = canvas.getContext('2d'),
    moveflg = 0,
    Xpoint,
    Ypoint;
const w = 760;
const h = 380;
canvas.width = w;
canvas.height = h;
 
//初期値（サイズ、色、アルファ値）の決定
var defSize = 4,
    defColor = "#fff";
 
// キャンバスを青色に塗る
ctx.fillStyle = 'rgb(255,255,255)';
 
// ストレージの初期化
var myStorage = localStorage;
window.onload = initLocalStorage();
 
// PC対応
canvas.addEventListener('mousedown', startPoint, false);
canvas.addEventListener('mousemove', movePoint, false);
canvas.addEventListener('mouseup', endPoint, false);
// スマホ対応
canvas.addEventListener('touchstart', startPoint, false);
canvas.addEventListener('touchmove', movePoint, false);
canvas.addEventListener('touchend', endPoint, false);
 
function startPoint(e){
  e.preventDefault();
  ctx.beginPath();
 
  Xpoint = e.layerX;
  Ypoint = e.layerY;
   
  ctx.moveTo(Xpoint, Ypoint);
}
 
function movePoint(e){
  if(e.buttons === 1 || e.witch === 1 || e.type == 'touchmove'){
    Xpoint = e.layerX;
    Ypoint = e.layerY;
    moveflg = 1;
     
    ctx.lineTo(Xpoint, Ypoint);
    ctx.lineCap = "round";
    ctx.lineWidth = defSize * 2;
    ctx.strokeStyle = defColor;
    ctx.stroke();  
  }
}
 
function endPoint(e)
{
    if(moveflg === 0){
       ctx.lineTo(Xpoint-1, Ypoint-1);
       ctx.lineCap = "round";
       ctx.lineWidth = defSize * 2;
       ctx.strokeStyle = defColor;
       ctx.stroke();
        
    }
    moveflg = 0;
    setLocalStoreage();
}
 

 
function ResetCanvas() {
    ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
    ctx.fillStyle = 'rgb(255,255,255)';
    canvas.style.backgroundColor = 'blue';
}
function seikaiCanvas () {
    canvas.style.backgroundColor = 'red';
    new Audio('QA.mp3').play()
}
function huseikaiCanvas () {
    canvas.style.backgroundColor = 'blue'
    new Audio('huseikai.mp3').play();
} 
function initLocalStorage(){
    myStorage.setItem("__log", JSON.stringify([]));
}