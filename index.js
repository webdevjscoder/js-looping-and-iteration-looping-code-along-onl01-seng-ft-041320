// Code your solutions in this file
function writeCards(arrNames, eventName) {
    let thankYouMessages = [];
    for (let i = 0; i < arrNames.length; i++) {
        thankYouMessages.push(`Thank you, ${arrNames[i]}, for the wonderful ${eventName} gift!`);
    }
    return thankYouMessages;
}

function countDown(number) {
    let i = 0;
    while(i <= 10) {
        console.log(i++);
    }
}