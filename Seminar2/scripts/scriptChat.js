function sentButtonClick(){
    let iMessage = document.getElementById("InputBox").value;

    document.getElementById("thirdString").innerText = document.getElementById("secondString").innerText;
    document.getElementById("secondString").innerText = document.getElementById("firstString").innerText;
    document.getElementById("firstString").innerText = iMessage;

    console.log(iMessage);

}