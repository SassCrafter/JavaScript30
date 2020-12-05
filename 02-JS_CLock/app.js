const hourHand = document.querySelector('.hourHand');
const minHand = document.querySelector('.minHand');
const secHand = document.querySelector('.secHand');
const clockFace = document.querySelector('.clock-face');


function setDate() {
    const currentTime = new Date();

    const seconds = currentTime.getSeconds();
    const secDegree = ((seconds / 60) * 360) + 90;
    secHand.style.transform = `translate(-100%, -50%) rotate(${secDegree}deg)`
    console.log(secDegree);
    
    const minutes = currentTime.getMinutes();
    const minutesDegree = ((minutes / 60) * 360) + 90;
    minHand.style.transform = `translate(-100%, -50%) rotate(${minutesDegree}deg)`

    const hours = currentTime.getHours();
    const hoursDegree = ((hours / 60) * 360) + 90;
    hourHand.style.transform = `translate(-100%, -50%) rotate(${hoursDegree}deg)`


}


setDate();
setInterval(setDate, 1000);