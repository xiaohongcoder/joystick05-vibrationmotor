pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
pins.digitalWritePin(DigitalPin.P12, 0)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P16) == 0) {
        pins.digitalWritePin(DigitalPin.P12, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P12, 0)
    }
})
