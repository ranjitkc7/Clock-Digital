let myCnt = document.getElementById("inner-div");
let dateCon = document.querySelector(".outer-div");

const currentTime = () => {
  let curTime = new Date().toLocaleTimeString();
  myCnt.innerText = curTime;
};

currentTime();
setInterval(() => {
  currentTime();
}, 1000);

const currentDate = () => {
  let curDate = new Date().toLocaleDateString();
  dateCon.innerText = curDate;
};

currentDate();

let myCount = document.getElementById("counter");
let contShow = document.getElementById("show-bar");

let setTime = 1;
let intervelId;

const startBtn = () => {
  intervelId = setInterval(() => {
    myCount.innerText = setTime++;
  }, 1000);
};

const stopBtn = () => {
  clearInterval(intervelId);
};

const reStartBtn = () => {
  setTime = 0;
  myCount.innerText = setTime;
  clearInterval(intervelId);
};

const getTimeBtn = () => {
   const newPar = document.createElement("p");
   newPar.innerText = `"The time is ${setTime} sec."`;
   contShow.appendChild(newPar);
};

const clearBtn = () => {
  contShow.innerHTML = "";
};

document.querySelector(".button1").addEventListener("click", startBtn);
document.querySelector(".button2").addEventListener("click", stopBtn);
document.querySelector(".button3").addEventListener("click", reStartBtn);
document.querySelector(".button4").addEventListener("click", getTimeBtn);
document.querySelector(".button5").addEventListener("click", clearBtn);
document.querySelector(".button6").addEventListener("click", getInfoBtn);
