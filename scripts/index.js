
//폭탄이 있는 위치를 나타내는 배열
//DOM이 로드가 되면 반복문을 이용하여 [0,0,0,0,0,0,0,0,1]로 초기화
let num = [0,0,0,0,0,0,0,0,1];

//박스를 선택한 순서를 기록하는 배열
let selNum = [];

//박스를 선택한 개수를 기록하는 변수
let cnt = 0 ;

//폭탄이 섞였는지 체크하는 flag변수
let shuffleFlag = false;
//눌렀는지 체크
let boardFlag ;

//메세지 표시 함수
const showMsg = (m) => {
    document.querySelector("#msg").innerHTML = m;
}

//보드 내용 지우기
const boradInit = () => {
    const board = document.querySelectorAll(".boardBox") ;
    for (let item of board) {
        item.innerHTML='';
        
    }
    cnt=0;
    console.log(board);
}

//보드내용 모두 하트
const boradhart = () => {
    const board = document.querySelectorAll(".boardBox") ;
    for (let item of board) {
        item.innerHTML=`<img src="./images/hart.png">`;
    }
    cnt=0;
}
//보드 숫자 누른 후 보여주기 함수
const showbt = (dspBt1,dspmsg) => {

    const bt1 = document.querySelector("#bt1") ;
    const msg = document.querySelector("#msg") ;

    bt1.style.display = dspBt1;
    msg.style.display = dspmsg;
}

const show = (n) => {
    //console.log(n);
    if (shuffleFlag == false) {
        showMsg("폭탄을 섞어 주세요");
        return;
    }
    let img;
  
    if (num[n-1]==0) {
        img = 'hart' ; 
       
        console.log(cnt);
        
    }
    else {
        img = 'boom' ;
        shuffleFlag = false;
        showMsg("펑!");
        showbt ("block","block");
    }
    document.querySelector("#box"+n).innerHTML = `<img src="./images/${img}.png">`
    cnt++;
    if (cnt==8) {
        showMsg("폭탄제거 완료!");
        showbt ("block","block");
        boradhart();
        
    }
    /*selNum.push(n);
    console.log(selNum);*/
    
}



//폭탄섞기 함수
const boxShuffle = () => {
    num.sort(() => Math.random()-0.5);
    console.log(num);
    showbt ("none","none");
    shuffleFlag = true;
    boradInit();
}

/* DOM이 로드된 후에 클릭이벤트 연결*/
document.addEventListener("DOMContentLoaded", ()=>{
   
});