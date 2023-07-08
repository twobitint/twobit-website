export default class Game {
    
    max = 100
    size = 50
    map = new Map()

    // Expects window-space
    seed(width: number, height: number) {
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

    bloom(x: number, y: number) {
        this.map.set(this.key(x, y), 1)
    }

    key(x: number, y: number) {
        //return x + ',' + y
        return x + y * this.max
    }

    unkey(k: number) {
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
                const [dalive, _] = this.neighbors(dx, dy)
                if (dalive.length == 3) {
                    next.set(dkey, 1)
                }
            }
        }

        this.map = next
    }

    neighbors(x: number, y: number) {
        const alive = []
        const dead = []

        for (let j = -1; j <= 1; j++) {
            for (let i = -1; i <= 1; i++) {
                if (i != 0 || j != 0) {
                    const key = this.key(x + i, y + j)
                    if (this.map.has(key)) {
                        alive.push(key)
                    } else {
                        dead.push(key)
                    }
                }
            }
        }

        return [alive, dead]
    }

    draw(ctx: CanvasRenderingContext2D, width: number, height: number) {
        ctx.clearRect(0, 0, width, height)
        ctx.fillStyle = "#012201"
        for (const key of this.map.keys()) {
            const [x, y] = this.unkey(key)
            ctx.fillRect(x * this.size, y * this.size, this.size, this.size)
        }
    }
}