let counter = 2
let countstoper = 10
function countToTen(x) {
    while (x < 10) {
        console.log("your number is " + x)
        x = x + 1
        counter = counter + 1
        if (counter > countstoper) {
            console.log("your number is " + x)
        }
    }
}
countToTen(1);