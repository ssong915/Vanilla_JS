const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0"); // 적어도 2글자여야함, 아니면 앞(start)에 0을 추가한다.
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000); //getClock 를 1000ms 마다
//cf) setTimeout(sayHello, 5000) // 한번실행
