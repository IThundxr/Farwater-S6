priority: 1

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

var seed
var log = []

onEvent('player.tick', event => {z
    const { x, y, z } = event.player
    if (x < -2120 && x > -2170 &&
        y < 131 && y > 128 &&
        z < 1390 && z > 1330
    ) {
        event.player.potionEffects.add('slow_falling')
    }
})