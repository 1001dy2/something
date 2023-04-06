let 啟動器 = 0
input.onButtonPressed(Button.A, function () {
    啟動器 = 1
})
input.onGesture(Gesture.Shake, function () {
    while (啟動器 == 1) {
        basic.showNumber(randint(1, 6))
    }
})
input.onButtonPressed(Button.AB, function () {
    啟動器 = 3
    while (啟動器 == 3) {
        basic.showNumber(input.compassHeading())
    }
})
input.onButtonPressed(Button.B, function () {
    啟動器 = 2
    while (啟動器 == 2) {
        basic.showString("[" + input.temperature() + "]")
    }
})
