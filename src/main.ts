import './style.css'
import Game from './life.ts'

// Globals.
const game = new Game()
const canvas = document.querySelector<HTMLCanvasElement>("canvas")!
const ctx = canvas.getContext("2d")

// Play nice with window resizing.
window.addEventListener('resize', resize)
function resize() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    game.draw(ctx!, canvas.width, canvas.height)
}
resize()

// Setup world.
game.seed(canvas.width, canvas.height)

// Run game loop.
setInterval(loop, 1000)
function loop() {
    game.draw(ctx!, canvas.width, canvas.height)
    game.step()
}
loop()
