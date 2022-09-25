priority: 1

onEvent('player.tick', event => {
    const { x, y, z } = event.player
    if (x < -2110 && x > -2180 &&
        y < 132 && y > 120 &&
        z < 1400 && z > 1320
    ) {
        event.player.potionEffects.add('slow_falling')
    }
})