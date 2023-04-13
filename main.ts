let 計時 = 0
input.onButtonPressed(Button.A, function () {
    if (input.compassHeading() > 315 || input.compassHeading() <= 45) {
        basic.showString("N")
    } else if (input.compassHeading() > 45 && input.compassHeading() < 136) {
        basic.showString("E")
    } else if (input.compassHeading() > 135 && input.compassHeading() < 226) {
        basic.showString("S")
    } else if (input.compassHeading() > 225 && input.compassHeading() < 316) {
        basic.showString("W")
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 6))
})
basic.forever(function () {
    if (input.logoIsPressed()) {
        計時 += 1
        basic.pause(300)
        basic.showNumber(計時)
    } else {
        計時 = 0
    }
})
