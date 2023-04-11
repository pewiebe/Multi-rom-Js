window.addEventListener('keydown', (event) => {
  if (player.preventInput) return
  switch (event.key) {
    case 'w':
      for (let i = 0; i < doors.length; i++) {
        const door = doors[i]

        if (
          player.hitbox.position.x + player.hitbox.width <=
            door.position.x + door.width &&
          player.hitbox.position.x >= door.position.x &&
          player.hitbox.position.y + player.hitbox.height >= door.position.y &&
          player.hitbox.position.y <= door.position.y + door.height
        ) {
          player.velocity.x = 0
          player.velocity.y = 0
          player.preventInput = true
          player.switchSprite('enterDoor')
          door.play()
          return
        }
      }
      if (player.velocity.y === 0) player.velocity.y = -25

      break
    case 'a':
      // mover o jogador para a esquerda
      keys.a.pressed = true
      break
    case 'd':
      //mover o jogador para a direita
      keys.d.pressed = true
      break
  }
})

window.addEventListener('keyup', (event) => {
  switch (event.key) {
    case 'a':
      // mover o jogador para a esquerda
      keys.a.pressed = false

      break
    case 'd':
      // mover o jogador para a direita
      keys.d.pressed = false

      break
  }
})
