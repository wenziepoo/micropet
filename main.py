temp = input.temperature()
hunger = 100

def on_every_interval():
    global hunger, temp
    hunger += 0 - 5
    temp = input.temperature()
loops.every_interval(60000, on_every_interval)

def on_forever():
    basic.show_leds("""
        . # . # .
                # . . . #
                . . . . .
                # . . . #
                . # # # .
    """)
    if input.button_is_pressed(Button.A):
        basic.show_leds("""
            . # . # .
                        # # . # #
                        . . . . .
                        . # . # .
                        . . # . .
        """)
        music.play_melody("C E D F E G E D ", 120)
    elif input.button_is_pressed(Button.B):
        basic.show_leds("""
            # . . . #
                        . # . # .
                        . . . . .
                        . # # # .
                        # . . . #
        """)
        music.play_melody("A E D C C C C - ", 120)
    elif input.is_gesture(Gesture.SHAKE):
        basic.show_leds("""
            # . . . #
                        . # . # .
                        # . . . #
                        . # . # .
                        . . # . .
        """)
        music.play_melody("E F G B A G A C5 ", 120)
    elif input.temperature() - temp > 5:
        basic.show_leds("""
            . # . # .
                        # . . . #
                        . . # . .
                        # . . . #
                        . # # # .
        """)
    elif input.magnetic_force(Dimension.X) < 50:
        music.play_melody("- - - - - - - - ", 120)
    else:
        pass
basic.forever(on_forever)
