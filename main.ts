let untouch = 0
let temp = input.temperature()
let hunger = 100
loops.everyInterval(60000, function () {
    hunger += 0 - 5
    temp = input.temperature()
    untouch = untouch + 1
})
basic.forever(function () {
    basic.showLeds(`
        . # . # .
        # . . . #
        . . . . .
        # . . . #
        . # # # .
        `)
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . # . # .
            # # . # #
            . . . . .
            . # . # .
            . . # . .
            `)
        music.playMelody("C E D F E G E D ", 120)
        untouch = 0
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        music.playMelody("A E D C C C C - ", 120)
        untouch = 0
    } else if (input.isGesture(Gesture.Shake)) {
        basic.showLeds(`
            # . . . #
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
        music.playMelody("E F G B A G A C5 ", 120)
        untouch = 0
    } else if (input.temperature() - temp > 5) {
        basic.showLeds(`
            . # . # .
            # . . . #
            . . # . .
            # . . . #
            . # # # .
            `)
        untouch = 0
    } else if (input.magneticForce(Dimension.X) < 50) {
        basic.showLeds(`
            . # # # .
            # . . . .
            # . . . .
            # . . . .
            . # # # .
            `)
        music.playMelody("C5 C B D A E G F ", 120)
        untouch = 0
    } else if (untouch >= 2) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        music.playMelody("C C5 C C5 C C5 C C5 ", 500)
        untouch = 0
    } else if (input.isGesture(Gesture.TiltLeft)) {
        basic.showLeds(`
            # . # . .
            # . . # .
            . . . . .
            # . # . .
            . # . . .
            `)
        untouch = 0
    } else if (input.isGesture(Gesture.TiltRight)) {
        basic.showLeds(`
            . . # . #
            . # . . #
            . . . . .
            . . # . #
            . . . # .
            `)
        untouch = 0
    } else if (false) {
    	
    } else if (false) {
    	
    } else {
    	
    }
})
