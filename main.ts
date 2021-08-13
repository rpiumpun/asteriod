input.onButtonPressed(Button.A, function () {
    human.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    human.change(LedSpriteProperty.Y, -1)
})
let human: game.LedSprite = null
let rand = randint(0, 4)
human = game.createSprite(0, 2)
let gameover = false
basic.forever(function () {
    if (gameover) {
        basic.showString("Game Over!")
    }
})
