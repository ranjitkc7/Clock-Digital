let myCnt = document.getElementById("inner-div");
const currentTime = () => {
  let curTime = new Date().toLocaleTimeString();
  myCnt.innerText = curTime;
};

currentTime();

setInterval(() => {
  currentTime();
}, 1000);