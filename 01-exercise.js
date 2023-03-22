console.log(isReverseInt(123, 321))
console.log(isReverseInt(123, 342))
console.log(isReverseInt(-123, -321))




























function isReverseInt(number1, number2) {
    const revString = number1.toString().split('').reverse().join('')
    return ((parseInt(revString) * Math.sign(number1)) === number2)
}