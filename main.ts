basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) >= 2) {
        pins.digitalWritePin(DigitalPin.P8, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P8, 0)
    }
})
