input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.compassHeading())
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 6))
})
input.onButtonPressed(Button.B, function () {
    basic.showString("[" + input.temperature() + "]")
})
