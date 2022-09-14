// JEI Subtype
onEvent('rei.subtypes', event => {
	event.useNBTKey('kubejs:trade_card', 'CustomModelData')
})
// JEI Add
onEvent('rei.add.items', event => {
	event.add(Item.of('create:refined_radiance'))
	
    event.add(Item.of('kubejs:trade_card', "{CustomModelData:1,display:{Name:'{\"text\":\"Hunter Export Card\",\"italic\":\"false\",\"color\":\"light_purple\"}'}}"))
    event.add(Item.of('kubejs:trade_card', "{CustomModelData:2,display:{Name:'{\"text\":\"Lumber Export Card\",\"italic\":\"false\",\"color\":\"light_purple\"}'}}"))
    event.add(Item.of('kubejs:trade_card', "{CustomModelData:3,display:{Name:'{\"text\":\"Farmer Export Card\",\"italic\":\"false\",\"color\":\"light_purple\"}'}}"))
    event.add(Item.of('kubejs:trade_card', "{CustomModelData:4,display:{Name:'{\"text\":\"Miner Export Card\",\"italic\":\"false\",\"color\":\"light_purple\"}'}}"))
    event.add(Item.of('kubejs:trade_card', "{CustomModelData:5,display:{Name:'{\"text\":\"Fisherman Export Card\",\"italic\":\"false\",\"color\":\"light_purple\"}'}}"))
})

// JEI Hide
onEvent('rei.hide.items', event => {
	event.hide('createaddition:copper_connector')

	event.hide('farwateraddons:ithundxr_item')
})
