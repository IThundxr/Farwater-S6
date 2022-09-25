priority: 1

// Item
onEvent('item.registry', event => {
})

// Block
onEvent('block.registry', event => {
	event.create('refined_radiance_block')
		.material('glass')
		.defaultCutout()
		.hardness(5)
		.displayName('Block of Refined Radiance')
		.lightLevel(1)
		.item(function (item) { item.glow(true).rarity(RARITY_UNCOMMON) })
	event.create('ash_block')
		.material('sand')
		.hardness(0.5)
		.displayName('Ash Block')
})
