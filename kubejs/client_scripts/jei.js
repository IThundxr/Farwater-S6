// JEI Subtype
onEvent('jei.subtypes', event => {
	event.useNBTKey('kubejs:trade_card', 'CustomModelData')
})
// JEI Add
onEvent('jei.add.items', event => {
	event.add(Item.of('create:refined_radiance'))
	event.add(Item.of('create:refined_radiance_casing'))
	event.add(Item.of('create:shadow_steel'))
	event.add(Item.of('create:shadow_steel_casing'))
	
	
    event.add(Item.of('kubejs:trade_card', "{CustomModelData:1,display:{Name:'{\"text\":\"Hunter Export Card\",\"italic\":\"false\",\"color\":\"light_purple\"}'}}"))
    event.add(Item.of('kubejs:trade_card', "{CustomModelData:2,display:{Name:'{\"text\":\"Lumber Export Card\",\"italic\":\"false\",\"color\":\"light_purple\"}'}}"))
    event.add(Item.of('kubejs:trade_card', "{CustomModelData:3,display:{Name:'{\"text\":\"Farmer Export Card\",\"italic\":\"false\",\"color\":\"light_purple\"}'}}"))
    event.add(Item.of('kubejs:trade_card', "{CustomModelData:4,display:{Name:'{\"text\":\"Miner Export Card\",\"italic\":\"false\",\"color\":\"light_purple\"}'}}"))
    event.add(Item.of('kubejs:trade_card', "{CustomModelData:5,display:{Name:'{\"text\":\"Fisherman Export Card\",\"italic\":\"false\",\"color\":\"light_purple\"}'}}"))
})

// JEI Hide
onEvent('jei.hide.items', event => {
	event.hide('createaddition:copper_connector')
	
	//event.hide('computercraft:turtle_normal')
	//event.hide('computercraft:turtle_advanced')

	event.hide('farwateraddons:ithundxr_item')
	
	event.hide('thermal:carrot_block')
    	event.hide('thermal:potato_block')
    	event.hide('thermal:beetroot_block')
    	event.hide('thermal:corn_block')
    	event.hide('thermal:onion_block')
    	event.hide('thermal:eggplant_block')
    	event.hide('thermal:tomato_block')

})
