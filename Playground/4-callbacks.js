const add = (digit1, digit2 , callback) => {
    setTimeout(() => {
        callback(digit1 + digit2)
    }, 2000);
}



add(1,14141, (sum)=> {
    console.log(sum)
})


