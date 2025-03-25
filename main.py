first_x = 10
first_y = 10
aliens_in_row = 5
num_rows = 3
alien_width = 16
alien_height = 16

aliens :List[Sprite] = []


for row in range(num_rows):
    for col in range(aliens_in_row):
        x = first_x + col * (alien_width + 5)
        y = first_y + row * (alien_height + 5)
        alien = sprites.create(assets.image("""Alien"""), SpriteKind.player)
        alien.set_velocity(20, 0)
        alien.set_position(x, y)
        aliens.append(alien)

def on_update():
    edge_reached = False

    for Alien in aliens:
        if alien.left <= 0 or alien.right >= scene.screen_width() or alien.right <= 100 or alien.left >= scene.screen_width():
            edge_reached = True
    
    if edge_reached:
        for alien in aliens:
            alien.y += 10
            alien.set_velocity(-alien.vx, alien.vy)

game.on_update(on_update)
