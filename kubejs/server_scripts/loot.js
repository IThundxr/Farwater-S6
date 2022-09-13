// priority: 0

onEvent('chest.loot_tables', event => {
	
	event.modify('minecraft:village/village_armorer', table => {
		table.addPool(pool => {
			pool.rolls = [2, 8]
			pool.addItem('create:andesite_alloy', 15)
		})
	})
	event.modify('minecraft:village/village_toolsmith', table => {
		table.addPool(pool => {
			pool.rolls = [2, 8]
			pool.addItem('create:andesite_alloy', 15)
		})
	})
	event.modify('minecraft:village/village_weaponsmith', table => {
		table.addPool(pool => {
			pool.rolls = [2, 8]
			pool.addItem('create:andesite_alloy', 15)
		})
	})
})