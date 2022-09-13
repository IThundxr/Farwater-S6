priority: 1

// Item
onEvent('item.registry', event => {
	//event.create('bronze_coin', item => {
	//	item.displayName('Bronze Farcoin')
	//})
	//event.create('steel_coin', item => {
	//	item.displayName('Steel Farcoin').rarity(RARITY_UNCOMMON)
	//})
	//event.create('manyullyn_coin', item => {
	//	item.displayName('Manyullyn Farcoin').rarity(RARITY_RARE)
	//})
	event.create('chunk_loader_ticket')
		.displayName('Chunk Loader Ticket')
		.glow(true)
		.rarity(RARITY_EPIC)
		
		.tooltip('§5Can be traded in the §dBulletin Board')
		.tooltip('§5for a Chunk Loader')

	event.create('coal_dust').displayName('Coal Dust')
	event.create('incomplete_netherite_sheet', 'create:sequenced_assembly')
		.displayName('Incomplete Netherite Sheet')
	event.create('reviving_ender_eye', 'create:sequenced_assembly')
		.displayName('Reviving Eye of Ender')
	event.create('netherite_sheet').displayName('Netherite Sheet')	
	event.create('diamond_shard').displayName('Diamond Shard')	
	event.create('blue_nether_blend').displayName('Blue Nether Blend')
	
	event.create('crushed_radiance')
		.displayName('Crushed Radiance')
		.glow(true)
		.rarity(RARITY_UNCOMMON)
	event.create('purple_radiance')
		.displayName('Purple Radiance')
		.glow(true).rarity(RARITY_UNCOMMON)
	event.create('red_radiance')
		.displayName('Red Radiance')
		.rarity(RARITY_UNCOMMON)
	event.create('yellow_radiance')
		.displayName('Yellow Radiance')
		.glow(true)
		.rarity(RARITY_UNCOMMON)
	event.create('green_radiance')
		.displayName('Green Radiance')
		.rarity(RARITY_UNCOMMON)
	event.create('cyan_radiance')
		.displayName('Cyan Radiance')
		.glow(true)
		.rarity(RARITY_UNCOMMON)
	event.create('blue_radiance')
		.displayName('Blue Radiance')
		.rarity(RARITY_UNCOMMON)
	event.create('chromatic_nugget')
		.displayName('Chromatic Nugget')
		.rarity(RARITY_UNCOMMON)
	event.create('chromatic_compound')
		.displayName('Chromatic Compound')
		.rarity(RARITY_UNCOMMON)
		.tooltip('§cDo §lnot §cthrow this into the void')
	event.create('spawner_shard')
		.displayName('Spawner Shard')
		.rarity(RARITY_UNCOMMON)
	
	event.create('drill_head').displayName('Drill Head')
	event.create('saw_blade').displayName('Saw Blade')
	event.create('roller_shafts').displayName('Roller Shafts')
	event.create('crimsite_alloy').displayName('Crimsite Alloy')
	event.create('asurine_alloy').displayName('Asurine Alloy')
	event.create('veridium_alloy').displayName('Veridium Alloy')

	//event.create('tin_nugget', item => {
	//	item.displayName('Tin Nugget')
	//})
	//event.create('tin_ingot', item => {
	//	item.displayName('Tin Ingot')
	//})

	event.create('sunken_flesh')
		.displayName('Sunken Flesh')
		.food(food => {
			food.hunger(2).saturation(0.25)
			food.effect('minecraft:nausea', 200, 0, 0.8)
		})

	event.create('spawner_pickaxe', 'pickaxe')
		.tier('diamond').maxDamage(32).displayName('Spawner Pickaxe').rarity(RARITY_UNCOMMON)
		.tooltip('§7Use to get §fSpawner Shards §7from spawners')
	
	
	// Mechanisms
	// Ch.1
	event.create('kinetic_mechanism').displayName('Kinetic Mechanism')
	event.create('incomplete_kinetic_mechanism', 'create:sequenced_assembly')
		.displayName('Incomplete Kinetic Mechanism')

	
	// Ch.1a
	event.create('sealed_mechanism').displayName('Sealed Mechanism')
	event.create('incomplete_sealed_mechanism', 'create:sequenced_assembly')
		.displayName('Incomplete Sealed Mechanism')

	
	// Ch.-
	event.create('chromatic_mechanism').displayName('Chromatic Mechanism')
	event.create('incomplete_chromatic_mechanism', 'create:sequenced_assembly')
		.displayName('Incomplete Chromatic Mechanism')
	
	// Ch.2a
	event.create('inductive_mechanism').displayName('Inductive Mechanism')
	event.create('incomplete_inductive_mechanism', 'create:sequenced_assembly')
		.displayName('Incomplete Inductive Mechanism')
	
	// Ch.3
	event.create('soul_mechanism').displayName('Soul Mechanism')
	event.create('incomplete_soul_mechanism', 'create:sequenced_assembly')
		.displayName('Incomplete Soul Mechanism')
	
	event.create('light_mechanism').displayName('Light Mechanism')
	event.create('incomplete_light_mechanism', 'create:sequenced_assembly')
		.displayName('Incomplete Light Mechanism')
	
	event.create('floral_mechanism').displayName('Floral Mechanism')
	event.create('incomplete_floral_mechanism', 'create:sequenced_assembly')
		.displayName('Incomplete Floral Mechanism')
})

// Block
onEvent('block.registry', event => {
	event.create('andesite_alloy_block')
		.material('stone')
		.hardness(5)
		.displayName('Block of Andesite Alloy')
	event.create('phantom_membrane_block')
		.material('honey')
		.hardness(2)
		.displayName('Phantom Membrane Block')
	event.create('rose_quartz_block')
		.material('glass')
		.hardness(2)
		.displayName('Block of Rose Quartz')
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
	event.create('brown_mushroom_bag')
		.material('wool')
		.hardness(1.0)
		.displayName('Bag of Brown Mushroom')
	event.create('red_mushroom_bag')
		.material('wool')
		.hardness(1.0)
		.displayName('Bag of Red Mushroom')

	//event.create('chromatic_compound_block').material('stone').hardness(5).displayName('Block of Chromatic Compound').item(function (item) { item.rarity(RARITY_UNCOMMON) })
	event.create('shadow_steel_block').material('metal').hardness(5).displayName('Block of Shadow Steel').item(function (item) { item.rarity(RARITY_UNCOMMON) })

	//
	//
	event.create('andesite_machine')
		.displayName('Andesite Machine')
		.material('lantern')
		.hardness(5)
		.fullBlock(false)
		.defaultCutout()

	event.create('copper_machine')
		.displayName('Copper Machine')
		.material('copper')
		.hardness(5)
		.fullBlock(false)
		.defaultTranslucent()

	event.create('brass_machine')
		.material('lantern')
		.hardness(5)
		.displayName('Brass Machine')
		.fullBlock(false)
		.defaultTranslucent()
	
	event.create('bronze_casing')
		.displayName('Bronze Casing')
		.material('metal')
		.hardness(5)
	event.create('bronze_machine')
		.displayName('Bronze Machine')
		.material('lantern')
		.hardness(5)
		.fullBlock(false)
		.defaultTranslucent()
	
	event.create('queen_slime_casing')
		.material('metal')
		.hardness(5)
		.displayName('Queen\'s Slime Casing')
	event.create('queen_slime_machine')
		.material('metal')
		.hardness(5)
		.displayName('Queen\'s Slime Machine')
		.fullBlock(false)
		.defaultTranslucent()
		.lightLevel(0.8)

	event.create('lumium_casing')
		.material('metal')
		.hardness(5)
		.displayName('Lumium Casing')
		.lightLevel(0.5)
})

onEvent('block.modification', event => {
	event.modify('minecraft:spawner', block => {
		block.destroySpeed = 0.1
	})
	
	event.modify('refinedstorage:machine_casing', block => {
		block.lightEmission = 15
	})
	event.modify('thermal:machine_frame', block => {
		block.lightEmission = 10
	})
})