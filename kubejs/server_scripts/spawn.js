priority: 1

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

var seed
var log = []

onEvent('player.tick', event => {z
    const player = event.getPlayer()
    const { x, y, z } = player
    if (x < -2140 && x > -2190 &&
        y < 151 && y > 148 &&
        z < 1410 && z > 1350
    ) {
        player.potionEffects.add('slow_falling')
    }
})