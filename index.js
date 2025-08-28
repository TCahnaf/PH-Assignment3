document.addEventListener("DOMContentLoaded", function(){

function captureElementID(id){
    return document.getElementById(id);
}

function numberConvertedElementID(id){
    const element = document.getElementById(id);

    return parseInt(element.innerText);
}

function captureElementClasses(className){
    return document.getElementsByClassName(className);
}



for(const element of captureElementClasses("heart-btn")){
    element.addEventListener('click', function(){
      let heartCount = numberConvertedElementID("heart-count");
        console.log(heartCount);
        heartCount += 1;
    captureElementID("heart-count").innerText = heartCount;

    })
    
}

for(const element of captureElementClasses("call-btn")){
    element.addEventListener('click', function(e){
        let coinCount = numberConvertedElementID("coin-count");
        coinCount -= 20;
        const element = e.currentTarget;
        const grandparent = element.parentElement.parentElement;
        const serviceName = grandparent.getElementsByTagName("h1")[0].innerText;
        const serviceNumber = grandparent.getElementsByTagName("h1")[1].innerText;
     
        if(coinCount < 0){
            alert("OOPS !!! SORRY YOU ARE OUT OF COINS !!!")
            return

        }
        else{
            alert(`\u{1F4DE} Calling ${serviceName} ${serviceNumber}`)
        }
        captureElementID("coin-count").innerText = coinCount;
        
        const historyLog = captureElementID("dynamic-container");
        
        const timeStamp = new Date()
  .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true })
  .toLowerCase();


        let logContent = document.createElement("div");
        logContent.innerHTML = `

        <div class = "flex justify-between items-start gap-10 bg-[#FAFAFA] h-[100px] w-[450px] p-4">
        <div>
        <h2 class = "font-bold text-lg">${serviceName}</h2>
        <h2>${serviceNumber}</h2>
        </div>
        <p>${timeStamp}</p>
        </div>
        `
      historyLog.appendChild(logContent);
    
       
    })
}

document.getElementById("clear-button").addEventListener('click', function(){
    const dynamicContent = captureElementID("dynamic-container")
            dynamicContent.innerHTML = "";

})


for(element of captureElementClasses("copy-btn")){
    element.addEventListener('click', function(e){
const grandparentOfElement = e.currentTarget.parentElement.parentElement
const textToCopy = grandparentOfElement.getElementsByTagName("h1")[1].innerText;
navigator.clipboard.writeText(textToCopy);
alert(`Emergency hotline number ${textToCopy} has been copied !!!`)


copyCount = numberConvertedElementID("copy-count");
copyCount += 1;
console.log(copyCount);
document.getElementById("copy-count").innerText = copyCount;

})

}






})










