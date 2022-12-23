// Code your solutions in this file

function writeCards(names, event) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
        thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouMessages;
}

const messages = writeCards(["Guadalupe", "Oli", "Aki"], "surprise");
console.log(messages);



function countDown (start) {
    while (start >= 0) {
        console.log(start);
        start--;
    }
}