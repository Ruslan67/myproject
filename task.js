console.log("hello word");

function sent(event) {
    const text1 = document.getElementById("text1")
    const kod = document.getElementById("kod")
    const weight = document.getElementById("weight")
    console.log(text1.value, kod.value, weight.value);
    //const ekran = document.getElementById("ekran")
    //ekran.innerText = (text1.value + kod.value + weight.value)
    const newDiv = document.createElement("div");
    const container = document.getElementById("container")
    container.appendChild(newDiv);
    newDiv.textContent = text1 + ' ' + kod + ' ' + weight;




}