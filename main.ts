input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
let curr_p2 = 0
let curr_p1 = 0
radio.setGroup(1)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    curr_p1 = pins.analogReadPin(AnalogPin.P1)
    radio.sendValue("y", curr_p1)
    if (curr_p1 > 450 && curr_p1 < 550) {
        if (curr_p2 > 450 && curr_p2 < 550) {
            radio.sendValue("stop", 1)
        }
    }
    curr_p2 = pins.analogReadPin(AnalogPin.P2)
    radio.sendValue("x", curr_p2)
    if (curr_p2 > 450 && curr_p2 < 550) {
        if (curr_p1 > 450 && curr_p1 < 550) {
            radio.sendValue("stop", 1)
        }
    }
    if (pins.digitalReadPin(DigitalPin.P12) == 0) {
        radio.sendValue("stop", 1)
    }
})
