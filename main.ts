namespace SpriteKind {
    export const glyph = SpriteKind.create()
    export const UI = SpriteKind.create()
}
function InitUI () {
    mySprite = sprites.create(imageList[0], SpriteKind.UI)
    mySprite.setPosition(23, 90)
    mySprite.say("Rojo")
    mySprite = sprites.create(imageList[1], SpriteKind.UI)
    mySprite.setPosition(63, 90)
    mySprite.say("Azul")
    mySprite = sprites.create(imageList[2], SpriteKind.UI)
    mySprite.setPosition(103, 90)
    mySprite.say("Verde")
    mySprite = sprites.create(imageList[3], SpriteKind.UI)
    mySprite.setPosition(23, 108)
    mySprite.say("Rosa")
    mySprite = sprites.create(imageList[4], SpriteKind.UI)
    mySprite.setPosition(63, 108)
    mySprite.say("Negro")
    mySprite = sprites.create(imageList[5], SpriteKind.UI)
    mySprite.setPosition(103, 108)
    mySprite.say("Marrón")
    CursorSprite = sprites.create(img`
        1 1 1 1 1 . . . . . . 1 1 1 1 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 1 1 1 1 . . . . . . 1 1 1 1 1 
        `, SpriteKind.UI)
    CursorSprite.setPosition(23, 90)
    curX = 0
    curY = 0
}
function PlaySequence () {
    for (let index2 = 0; index2 <= CodeSequence.length - 1; index2++) {
        CurrentIndex = index2
        AddToSpriteList()
        pause(200)
    }
    pause(600)
    for (let value2 of spriteList) {
        value2.destroy()
    }
    CurrentIndex = 0
    PlayerTurn = true
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    curY = Math.max(0, curY - 1)
    UpdateCurPos()
})
function AddToSequence () {
    CodeSequence.push(randint(0, 5))
}
function InitSounds2 () {
    SoundList = [
    165,
    175,
    196,
    220,
    247,
    262
    ]
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (PlayerTurn == true) {
        CursorAt = curX + curY * 3
        if (CursorAt == CodeSequence[CurrentIndex]) {
            AddToSpriteList()
            info.changeScoreBy(1)
            CurrentIndex += 1
            if (CurrentIndex == CodeSequence.length) {
                NextLevel()
            }
        } else {
            info.changeLifeBy(-1)
            music.powerDown.play()
        }
    }
})
function InitImages () {
    imageList = [
    img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `,
    img`
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        `,
    img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,
    img`
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        `
    ]
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    curX = Math.max(0, curX - 1)
    UpdateCurPos()
})
function UpdateCurPos () {
    CursorSprite.x = 23 + 40 * curX
    CursorSprite.y = 90 + 18 * curY
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    curX = Math.min(2, curX + 1)
    UpdateCurPos()
})
function InitSequence () {
    for (let index3 = 0; index3 <= 2; index3++) {
        AddToSequence()
    }
}
function NextLevel () {
    PlayerTurn = false
    pause(500)
    for (let value3 of spriteList) {
        value3.destroy()
    }
    AddToSequence()
    PlaySequence()
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    curY = Math.min(1, curX + 1)
    UpdateCurPos()
})
function AddToSpriteList () {
    x = CurrentIndex % 9 * 17
    y = Math.floor(CurrentIndex / 9) * 17
    mySprite = sprites.create(imageList[CodeSequence[CurrentIndex]], SpriteKind.glyph)
    spriteList[CurrentIndex] = mySprite
    mySprite.left = x + 5
    mySprite.top = y + 20
    music.playTone(SoundList[CodeSequence[CurrentIndex]], music.beat(BeatFraction.Half))
}
sprites.onCreated(SpriteKind.UI, function (sprite) {
    sprite.setFlag(SpriteFlag.Ghost, true)
})
let y = 0
let x = 0
let CursorAt = 0
let SoundList: number[] = []
let PlayerTurn = false
let CurrentIndex = 0
let CodeSequence: number[] = []
let curY = 0
let curX = 0
let CursorSprite: Sprite = null
let imageList: Image[] = []
let mySprite: Sprite = null
let spriteList: Sprite[] = []
let index = 0
let value = 0
game.showLongText("Memoriza la secuencia y reprodúcela", DialogLayout.Bottom)
spriteList = sprites.allOfKind(SpriteKind.glyph)
scene.setBackgroundColor(13)
info.setScore(0)
info.setLife(3)
InitImages()
InitSounds2()
InitUI()
InitSequence()
PlaySequence()
