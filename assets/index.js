class Game {
    
    max = 100
    size = 50
    map = new Map()

    // Expects window-space
    seed(width, height) {
        const x = width / this.size
        const y = height / this.size
        for (let j = 0; j < y; j++) {
            for (let i = 0; i < x; i++) {
                if (Math.floor(Math.random() * 5) == 0) {
                    this.bloom(i, j)
                }
            }
        }
    }

    bloom(x, y) {
        this.map.set(this.key(x, y), 1)
    }

    key(x, y) {
        //return x + ',' + y
        return x + y * this.max
    }

    unkey(k) {
        //return k.split(',')
        return [k % this.max, Math.floor(k / this.max)]
    }

    step() {
        const next = new Map()

        for (const key of this.map.keys()) {
            const [x, y] = this.unkey(key)
            const [alive, dead] = this.neighbors(x, y)
            if (alive.length == 2 || alive.length == 3) {
                next.set(this.key(x, y), 1)
            }
            for (const dkey of dead) {
                const [dx, dy] = this.unkey(dkey)
                const [dalive, merp] = this.neighbors(dx, dy)
                if (dalive.length == 3) {
                    next.set(dkey, 1)
                }
            }
        }

        this.map = next
    }

    neighbors(x, y) {
        const alive = []
        const dead = []
        let n;

        for (let j = -1; j <= 1; j++) {
            for (let i = -1; i <= 1; i++) {
                if (i != 0 || j != 0) {
                    const key = this.key(x + i, y + j)
                    if (n = this.map.has(key)) {
                        alive.push(key)
                    } else {
                        dead.push(key)
                    }
                }
            }
        }

        return [alive, dead]
    }

    draw(ctx, width, height) {
        ctx.clearRect(0, 0, width, height)
        ctx.fillStyle = "#012201"
        for (const key of this.map.keys()) {
            const [x, y] = this.unkey(key)
            ctx.fillRect(x * this.size, y * this.size, this.size, this.size)
        }
    }
}

var game

(function () {

    // Globals.
    const canvas = document.getElementsByTagName("canvas")[0]
    const ctx = canvas.getContext("2d")
    game = new Game()

    // Play nice with window resizing.
    window.addEventListener('resize', resize)
    function resize() {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        game.draw(ctx)
    }
    resize()
    
    // Setup world.
    game.seed(canvas.width, canvas.height)

    // Run game loop.
    setInterval(loop, 1000)
    function loop() {
        game.draw(ctx, canvas.width, canvas.height)
        game.step()
    }
    loop()

})()