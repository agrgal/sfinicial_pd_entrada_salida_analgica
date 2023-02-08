led.enable(false)
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P2, pins.map(
    pins.analogReadPin(AnalogPin.P4),
    0,
    1023,
    500,
    800
    ))
})
