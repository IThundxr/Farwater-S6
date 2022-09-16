priority: 1

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

var seed
var log = []

// Mod shortcuts
let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let AE2 = (id, x) => MOD("appliedenergistics2", id, x)
let TE = (id, x) => MOD("thermal", id, x)
let AP = (id, x) => MOD("architects_palette", id, x)
let CR = (id, x) => MOD("create", id, x)
let TC = (id, x) => MOD("tconstruct", id, x)
let MC = (id, x) => MOD("minecraft", id, x)
let KJ = (id, x) => MOD("kubejs", id, x)
let FD = (id, x) => MOD("farmersdelight", id, x)
let RQ = (id, x) => MOD("xreliquary", id, x)
let SD = (id, x) => MOD("storagedrawers", id, x)
let F = (id, x) => MOD("forge", id, x)
let AC = (id, x) => MOD("aquaculture", id, x)

onEvent('recipes', event => {
	function crush(input, output) {
		event.recipes.createCrushing(output, input)
	}
	crush('minecraft:diamond', 'thermal:diamond_dust')
	crush('minecraft:emerald', 'thermal:emerald_dust')
	crush('minecraft:quartz', 'thermal:quartz_dust')
	crush('thermal:cinnabar', 'thermal:cinnabar_dust')
	crush('thermal:apatite', 'thermal:apatite_dust')
	crush('thermal:sulfur', 'thermal:sulfur_dust')
	crush('thermal:niter', 'thermal:niter_dust')

	function crushedToDust(metal, extra) {
		event.recipes.createCrushing(
			[
				'thermal:' + metal + '_dust',
				Item.of('thermal:' + metal + '_dust').withChance(0.5),
				Item.of('thermal:' + extra).withChance(0.25)
			],
			'create:crushed_' + metal + '_ore'
		)
	}
	crushedToDust('iron', 'nickel_dust')
	crushedToDust('copper', 'gold_dust')
	crushedToDust('gold', 'copper_dust')
	crushedToDust('tin', 'apatite')
	crushedToDust('lead', 'silver_dust')
	crushedToDust('silver', 'lead_dust')
	crushedToDust('nickel', 'copper_dust')


	//Drawers
	event.remove({ id: 'storagedrawers:upgrade_template' })
	function drawerer(woodtype, logtype) {
		event.remove({ id: 'storagedrawers:' + woodtype + '_trim' })
		event.remove({ id: 'storagedrawers:' + woodtype + '_full_drawers_1' })
		event.remove({ id: 'storagedrawers:' + woodtype + '_full_drawers_2' })
		event.remove({ id: 'storagedrawers:' + woodtype + '_full_drawers_4' })
		event.remove({ id: 'storagedrawers:' + woodtype + '_half_drawers_1' })
		event.remove({ id: 'storagedrawers:' + woodtype + '_half_drawers_2' })
		event.remove({ id: 'storagedrawers:' + woodtype + '_half_drawers_4' })

		event.shaped('storagedrawers:' + woodtype + '_trim', [
			'PPP',
			'ZLZ',
			'PPP'
		],
			{
				Z: 'create:zinc_ingot',
				P: 'minecraft:' + woodtype + '_planks',
				L: '#minecraft:' + woodtype + '_' + logtype
			})
		event.stonecutting('2x storagedrawers:' + woodtype + '_half_drawers_1', 'storagedrawers:' + woodtype + '_trim')
		event.stonecutting('2x storagedrawers:' + woodtype + '_half_drawers_2', 'storagedrawers:' + woodtype + '_trim')
		event.stonecutting('2x storagedrawers:' + woodtype + '_half_drawers_4', 'storagedrawers:' + woodtype + '_trim')
		event.stonecutting('storagedrawers:' + woodtype + '_full_drawers_1', 'storagedrawers:' + woodtype + '_trim')
		event.stonecutting('storagedrawers:' + woodtype + '_full_drawers_2', 'storagedrawers:' + woodtype + '_trim')
		event.stonecutting('storagedrawers:' + woodtype + '_full_drawers_4', 'storagedrawers:' + woodtype + '_trim')
		event.stonecutting('2x storagedrawers:upgrade_template', 'storagedrawers:' + woodtype + '_trim')
	}
	drawerer('oak', 'logs')
	drawerer('spruce', 'logs')
	drawerer('birch', 'logs')
	drawerer('jungle', 'logs')
	drawerer('acacia', 'logs')
	drawerer('dark_oak', 'logs')
	drawerer('crimson', 'stems')
	drawerer('warped', 'stems')


	event.remove({ id: 'framedcompactdrawers:framed_trim' })
	event.remove({ id: 'framedcompactdrawers:framed_full_one' })
	event.remove({ id: 'framedcompactdrawers:framed_full_two' })
	event.remove({ id: 'framedcompactdrawers:framed_full_four' })
	event.remove({ id: 'framedcompactdrawers:framed_half_one' })
	event.remove({ id: 'framedcompactdrawers:framed_half_two' })
	event.remove({ id: 'framedcompactdrawers:framed_half_four' })

	event.shaped('framedcompactdrawers:framed_trim', [
		'PPP',
		'ZLZ',
		'PPP'
	],
		{
			Z: 'create:zinc_ingot',
			P: 'minecraft:stick',
			L: '#minecraft:logs'
		})
	event.stonecutting('2x framedcompactdrawers:framed_half_one', 'framedcompactdrawers:framed_trim')
	event.stonecutting('2x framedcompactdrawers:framed_half_two', 'framedcompactdrawers:framed_trim')
	event.stonecutting('2x framedcompactdrawers:framed_half_four', 'framedcompactdrawers:framed_trim')
	event.stonecutting('framedcompactdrawers:framed_full_one', 'framedcompactdrawers:framed_trim')
	event.stonecutting('framedcompactdrawers:framed_full_two', 'framedcompactdrawers:framed_trim')
	event.stonecutting('framedcompactdrawers:framed_full_four', 'framedcompactdrawers:framed_trim')
	event.stonecutting('2x storagedrawers:upgrade_template', 'framedcompactdrawers:framed_trim')

	// XP Stuff
	// XP Fluids to Bottle o' Enchanting with appropiate Ratios
	event.recipes.createFilling('minecraft:experience_bottle', [
		'minecraft:glass_bottle',
		Fluid.of('experienceobelisk:raw_experience', 10)
	])
	event.recipes.createFilling('minecraft:experience_bottle', [
		'minecraft:glass_bottle',
		Fluid.of('sophisticatedcore:xp_still', 150)
	])
	event.recipes.createFilling('minecraft:experience_bottle', [
		'minecraft:glass_bottle',
		Fluid.of('cofh_core:experience', 250)
	])

	// Emptying Recipe - Bottle o' Enchanting => CoFH xp fluid
	event.recipes.createEmptying([
		'minecraft:glass_bottle',
		Fluid.of('cofh_core:experience', 250)
	], 'minecraft:experience_bottle')

	// Custom Cobblegen for thermal
	let bedrock_cobblegen = (adjacent, output) => {
		event.custom({
			"type": "thermal:rock_gen",
			"adjacent": adjacent,
			"below": "minecraft:bedrock",
			"result": { "item": output }
		})
	}

	bedrock_cobblegen(MC("packed_ice"), MC("andesite"))
	bedrock_cobblegen(AP("polished_packed_ice"), MC("granite"))
	bedrock_cobblegen(AP("chiseled_packed_ice"), MC("diorite"))

	// Recipes
	event.replaceInput({}, 'create:dough', '#forge:doughs')
	event.replaceInput({}, 'farmersdelight:wheat_dough', '#forge:doughs')
	event.replaceInput({}, 'croptopia:dough', '#forge:doughs')

	event.recipes.createMixing(Fluid.of('create_confectionery:caramel', 125), 'croptopia:caramel').heated()
	event.recipes.createCrushing([
		'2x croptopia:caramel'
	], 'create_confectionery:bar_of_caramel')


	// Abuseable
	event.remove({ output: 'tconstruct:efln_ball' })
	// Abuseable
	event.remove({ output: 'tconstruct:efln_ball' })
	event.remove({ output: 'ender_slime_sling' })

	// To make trade station work
	// To make trade station work
	event.remove({ input: 'thermal:earth_charge' })
	event.remove({ input: 'thermal:press_coin_die' })
	event.remove({ input: 'thermal:press_gear_die' })
	event.remove({ input: 'thermal:press_packing_2x2_die' })
	event.remove({ input: 'thermal:press_packing_3x3_die' })
	event.remove({ input: 'thermal:press_unpacking_die' })

	// Remove double Food Crates
	event.remove({ output: 'thermal:carrot_block' })
	event.remove({ output: 'thermal:potato_block' })
	event.remove({ output: 'thermal:beetroot_block' })
	event.remove({ output: 'thermal:corn_block' })
	event.remove({ output: 'thermal:onion_block' })
	event.remove({ output: 'thermal:eggplant_block' })
	event.remove({ output: 'thermal:tomato_block' })
	
    	// Ah yes thermals lovely very annoying grenades and tnt
	event.remove({ output: 'thermal:slime_grenade' })
	event.remove({ output: 'thermal:redstone_grenade' })
	event.remove({ output: 'thermal:glowstone_grenade' })
	event.remove({ output: 'thermal:ender_grenade' })
	event.remove({ output: 'thermal:earth_grenade' })
	event.remove({ output: 'thermal:lightning_grenade' })
	event.remove({ output: 'thermal:ice_grenade' })
	event.remove({ output: 'thermal:fire_grenade' })
	event.remove({ output: 'thermal:explosive_grenade' })
	
	event.remove({ output: 'thermal:fire_tnt' })
	event.remove({ output: 'thermal:ice_tnt' })
	event.remove({ output: 'thermal:lightning_tnt' })
	event.remove({ output: 'thermal:earth_tnt' })
	event.remove({ output: 'thermal:ender_tnt' })
	event.remove({ output: 'thermal:glowstone_tnt' })
	event.remove({ output: 'thermal:redstone_tnt' })
	event.remove({ output: 'thermal:slime_tnt' })
	
	event.remove({ output: 'thermal:slime_tnt_minecart' })
	event.remove({ output: 'thermal:redstone_tnt_minecart' })
	event.remove({ output: 'thermal:glowstone_tnt_minecart' })
	event.remove({ output: 'thermal:ender_tnt_minecart' })
	event.remove({ output: 'thermal:earth_tnt_minecart' })
	event.remove({ output: 'thermal:lightning_tnt_minecart' })
	event.remove({ output: 'thermal:ice_tnt_minecart' })
	event.remove({ output: 'thermal:fire_tnt_minecart' })
	
    	// Explotable stuff from ae2
	event.remove({ output: 'ae2:tiny_tnt' })
	event.remove({ output: 'ae2:debug_eraser' })
	event.remove({ output: 'ae2:debug_meteorite_placer' })
	
    	// Spams console on arc and doesnt function
	event.remove({ output: 'create:tree_fertilizer' })
	
    	// Explotiable blocks from dbm
	event.remove({ output: 'davebuildingmod:particle_generator' })
   	event.remove({ output: 'davebuildingmod:particle_card_tnt' })
 	event.remove({ output: 'davebuildingmod:particle_card_fire' })
    	event.remove({ output: 'davebuildingmod:particle_card_campfire' })
    	event.remove({ output: 'davebuildingmod:particle_card_smoke' })
    	event.remove({ output: 'davebuildingmod:particle_card_steam' })
    	event.remove({ output: 'avebuildingmod:particle_card_water' })
    	event.remove({ output: 'davebuildingmod:hard_air' })
    	event.remove({ output: 'davebuildingmod:soft_air' })
	
    	// Ah yes thermals lovely very annoying grenades and tnt
	event.remove({ output: 'thermal:slime_grenade' })
	event.remove({ output: 'thermal:redstone_grenade' })
	event.remove({ output: 'thermal:glowstone_grenade' })
	event.remove({ output: 'thermal:ender_grenade' })
	event.remove({ output: 'thermal:earth_grenade' })
	event.remove({ output: 'thermal:lightning_grenade' })
	event.remove({ output: 'thermal:ice_grenade' })
	event.remove({ output: 'thermal:fire_grenade' })
	event.remove({ output: 'thermal:explosive_grenade' })
	
	event.remove({ output: 'thermal:fire_tnt' })
	event.remove({ output: 'thermal:ice_tnt' })
	event.remove({ output: 'thermal:lightning_tnt' })
	event.remove({ output: 'thermal:earth_tnt' })
	event.remove({ output: 'thermal:ender_tnt' })
	event.remove({ output: 'thermal:glowstone_tnt' })
	event.remove({ output: 'thermal:redstone_tnt' })
	event.remove({ output: 'thermal:slime_tnt' })
	
	event.remove({ output: 'thermal:slime_tnt_minecart' })
	event.remove({ output: 'thermal:redstone_tnt_minecart' })
	event.remove({ output: 'thermal:glowstone_tnt_minecart' })
	event.remove({ output: 'thermal:ender_tnt_minecart' })
	event.remove({ output: 'thermal:earth_tnt_minecart' })
	event.remove({ output: 'thermal:lightning_tnt_minecart' })
	event.remove({ output: 'thermal:ice_tnt_minecart' })
	event.remove({ output: 'thermal:fire_tnt_minecart' })
	
    	// Explotable stuff from ae2
	event.remove({ output: 'ae2:tiny_tnt' })
	event.remove({ output: 'ae2:debug_eraser' })
	event.remove({ output: 'ae2:debug_meteorite_placer' })
	
    	// Spams console on arc and doesnt function
	event.remove({ output: 'create:tree_fertilizer' })
	
    	// Explotiable blocks from dbm
	event.remove({ output: 'davebuildingmod:particle_generator' })
   	event.remove({ output: 'davebuildingmod:particle_card_tnt' })
 	event.remove({ output: 'davebuildingmod:particle_card_fire' })
	event.remove({ output: 'davebuildingmod:particle_card_campfire' })
	event.remove({ output: 'davebuildingmod:particle_card_smoke' })
	event.remove({ output: 'davebuildingmod:particle_card_steam' })
	event.remove({ output: 'avebuildingmod:particle_card_water' })
	event.remove({ output: 'davebuildingmod:hard_air' })
	event.remove({ output: 'davebuildingmod:soft_air' })
})
