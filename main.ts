input.onButtonPressed(Button.A, function () {
    human.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    human.change(LedSpriteProperty.Y, -1)
})
let human: game.LedSprite = null
human = game.createSprite(0, 2)
let gameover = false
let rock: game.LedSprite[] = []
let index = 0
let rockY: number[] = []
for (let index2 = 0; index2 < 3; index2++) {
    rockY.push(randint(0, 4))
}
for (let index = 0; index <= 4; index++) {
    if (index != rockY[index]) {
        rock.push(game.createSprite(2, rockY[index]))
    }
}
