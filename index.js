// Code your solutions in this file
function writeCards(namesArray, event) {
    let msgArray = [];
    for (let i = 0; i < namesArray.length; i++) {
        let message = `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`;
        msgArray.push(message);
    }
    return msgArray;
}

function countDown(){
    for (let i=10;i>=0;i--){
        console.log(i);
    }
}

