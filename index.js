// Code your solutions in this file
const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

function countDown (number) {

    let countDown = 10;
    while (number < 10) {
        console.log(number--);
        debugger;

    }
    return number;
}
countDown(number);

