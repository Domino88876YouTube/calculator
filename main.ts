input.onButtonPressed(Button.A, function () {
    basic.showNumber(3)
    basic.pause(100)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.pause(100)
    basic.showNumber(5)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        # # # # #
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.pause(100)
    basic.showNumber(8)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(8)
    basic.pause(100)
    basic.showLeds(`
        . . # . .
        . . . . .
        # # # # #
        . . . . .
        . . # . .
        `)
    basic.pause(100)
    basic.showNumber(4)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        # # # # #
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.pause(100)
    basic.showNumber(2)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(6)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showNumber(2)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        # # # # #
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.pause(100)
    basic.showNumber(4)
})
