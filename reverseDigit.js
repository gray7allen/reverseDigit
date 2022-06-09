function printDigits(num) {
    let reversed = 0
    while(num > 0) {
        let lastNumber = num %10;
        console.log(lastNumber)
        reversed = reversed * 10 + lastNumber;
        num = Math.floor(num/10)
    }
    return reversed
}

printDigits(543)
printDigits(60)

// let output = ' ,'
// reversedNum = reversed.toString();

    
// for (let i = 0, length = reversedNum.length; i < length; i += 1) {
// output.push(+reversedNum.chartAt(i))
// }
// console.log(output);

//     var number = 12354987,
//     output = []
//     sNumber = number.toString();

// for (var i = 0, len = sNumber.length; i < len; i += 1) {
//     output.push(+sNumber.charAt(i));
// }

// console.log(output);