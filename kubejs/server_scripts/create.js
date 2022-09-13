priority: 1

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

var seed
var log = []

onEvent('block.right_click', event => {
    if (event.item.hasTag('c:lanterns')) {
        let bracket = event.block.entityData.Bracket.Properties
        if (bracket) {
            if (bracket.facing == 'up' && event.block.down.id == 'minecraft:air') {
                event.block.down.set(event.item.id, {hanging: true})
                event.player.playSound('block.lantern.place')
            } else if (bracket.facing == 'down' && event.block.up.id == 'minecraft:air') {
                event.block.up.set(event.item.id, {hanging: false})
                event.player.playSound('block.lantern.place')
            }
            if (!event.player.creativeMode) { event.player.getHeldItem(event.hand).count -= 1 }
        }
    }
});