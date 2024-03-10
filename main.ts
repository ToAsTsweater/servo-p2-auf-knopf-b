input.onButtonPressed(Button.B, function () {
    if (Tastendruck < 1) {
        Tastendruck += 1
    } else if (Tastendruck == 1) {
        Tastendruck += -1
    }
})
let Tastendruck = 0
servos.P2.setAngle(0)
Tastendruck = 0
basic.forever(function () {
    basic.showNumber(Tastendruck)
})
basic.forever(function () {
    if (Tastendruck == 1) {
        servos.P2.setAngle(90)
    } else if (Tastendruck == 0) {
        servos.P2.setAngle(0)
    }
})
