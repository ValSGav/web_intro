function sentButtonClick(){
    
    let iUserName = document.getElementById("InputBoxUserName").value;
    let iMessage = iUserName + ": " +document.getElementById("InputBoxMessage").value;

    document.getElementById("thirdString").innerText = document.getElementById("secondString").innerText;
    document.getElementById("secondString").innerText = document.getElementById("firstString").innerText;
    document.getElementById("firstString").innerText = iMessage;

    console.log(iMessage);

}