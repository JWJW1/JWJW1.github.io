const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    // String이 가져와야할 길이를 2로 정하고 남은 앞쪽은 "0"으로 채움.
    // padStart 반대는 padEnd
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText= `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock,1000);