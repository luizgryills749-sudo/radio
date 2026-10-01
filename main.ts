radio.onReceivedString(function (receivedString) {
    basic.showString("we are raytech")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("raytec")
})
basic.forever(function () {
    radio.setGroup(3)
})
