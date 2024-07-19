let sorteio = 0
input.onGesture(Gesture.Shake, function () {
    sorteio = randint(0, 2)
    if (sorteio == 0) {
        basic.showString("nao sei")
    } else {
        if (sorteio == 1) {
            basic.showString("sim")
        } else {
            if (sorteio == 2) {
                basic.showString("nao")
            }
        }
    }
})
