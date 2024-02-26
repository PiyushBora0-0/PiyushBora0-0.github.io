function updateClock(){

    const currentTime = new Date();
    const hrs = currentTime.getHours().toString().padStart(2,0);
    const min = currentTime.getMinutes().toString().padStart(2,0);
    const sec = currentTime.getSeconds().toString().padStart(2,0);
    
    document.getElementById("clock").textContent = `${hrs}:${min}:${sec}`;
  
}
updateClock();
setInterval(updateClock,1000)