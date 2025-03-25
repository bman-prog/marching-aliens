let x: number;
let y: number;
let alien: Sprite;
let first_x = 10
let first_y = 10
let aliens_in_row = 5
let num_rows = 3
let alien_width = 16
let alien_height = 16
let aliens : Sprite[] = []
for (let row = 0; row < num_rows; row++) {
    for (let col = 0; col < aliens_in_row; col++) {
        x = first_x + col * (alien_width + 5)
        y = first_y + row * (alien_height + 5)
        alien = sprites.create(assets.image`Alien`, SpriteKind.Player)
        alien.setVelocity(20, 0)
        alien.setPosition(x, y)
        aliens.push(alien)
    }
}
game.onUpdate(function on_update() {
    let edge_reached = false
    for (let Alien of aliens) {
        if (alien.left <= 0 || alien.right >= scene.screenWidth() || alien.right <= 100 || alien.left >= scene.screenWidth()) {
            edge_reached = true
        }
        
    }
    if (edge_reached) {
        for (let alien of aliens) {
            alien.y += 10
            alien.setVelocity(-alien.vx, alien.vy)
        }
    }
    
})
