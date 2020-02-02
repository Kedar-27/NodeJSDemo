// Regular Version

// const square = function(x) {
//     return x * x;
// }

// 1- Long Arrow version

// const square = (x) =>{
//     return x * x ;
// }

// 2- ShortHand version
//const square = (x) => x*x ;
//console.log(square(2))


const event = {
    name: 'Birthday Party',
    guestList: ['ABC', 'XYZ'],
    printGuestList() {
        console.log('Guest List for ' + this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()

