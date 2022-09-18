priority: 1

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

var seed
var log = []

onEvent('player.tick', event => {
    const player = event.player
    const { x, y, z } = player
    if (x < -2130 && x > -2160 &&
        y < 132 && y > 120 &&
        z < 1400 && z > 1320
    ) {
        event.player.potionEffects.add('slow_falling')
    }
})