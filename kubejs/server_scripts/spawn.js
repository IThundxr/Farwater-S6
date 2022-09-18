priority: 1

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

var seed
var log = []

onEvent('player.tick', event => {
    const { x, y, z } = event.player
    if (x < -2170 && x > -2120 &&
        y < 132 && y > 120 &&
        z < 1400 && z > 1320
    ) {
        event.player.potionEffects.add('slow_falling')
    }
})