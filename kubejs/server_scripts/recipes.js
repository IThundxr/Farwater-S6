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

	
	//remove
	function delRec(id) {
		event.remove({ id: id })
	}

	delRec('alloyed:mixing/bronze_ingot')
	delRec('alloyed:mixing/bronze_ingot_x3')
	delRec('alloyed:mixing/steel_ingot')
	delRec('aquaculture:tin_can_to_iron_nugget')
	delRec('aquaculture:tin_can_to_iron_nugget_from_blasting')
	delRec('aquaculture:tin_can_to_iron_nugget_from_blasting')

	delRec('architects_pallete:vertslabs/limestone_brick_vertical_slab')
	delRec('architects_pallete:vertslabs/limestone_brick_vertical_slab_revert')
	delRec('architects_pallete:vertslabs/limestone_vertical_slab')
	delRec('architects_pallete:vertslabs/limestone_vertical_slab_revert')
	delRec('architects_pallete:vertslabs/mushy_limestone_brick_vertical_slab')
	delRec('architects_pallete:vertslabs/mushy_limestone_brick_vertical_slab_revert')
	delRec('architects_pallete:vertslabs/stonecutting/limestone_vslab_from_limestone_stonecutting')
	delRec('architects_pallete:vertslabs/stonecutting/mushy_limestone_brick_vslab_from_mushy_limestone_bricks_stonecutting')

	delRec('torchmaster:megatorch')
	delRec('torchmaster:dreadlamp')
	delRec('tconstruct:smeltery/casting/metal/soulsteel/ingot_gold_cast')
	delRec('tconstruct:smeltery/casting/metal/soulsteel/ingot_sand_cast')
	delRec('tconstruct:smeltery/casting/metal/soulsteel/nugget_gold_cast')
	delRec('tconstruct:smeltery/casting/metal/soulsteel/nugget_sand_cast')
	delRec('tconstruct:smeltery/casting/metal/soulsteel/block')

	event.remove({ output: 'ender_slime_sling' })

	event.remove({ output: 'computercraft:turtle_normal' })
	event.remove({ output: 'computercraft:turtle_advanced' })

	event.remove({ mod: 'refinedpipes' })

	event.remove({ input: 'thermal:earth_charge' })
	event.remove({ input: 'thermal:press_coin_die' })
	event.remove({ input: 'thermal:press_gear_die' })
	event.remove({ input: 'thermal:press_packing_2x2_die' })
	event.remove({ input: 'thermal:press_packing_3x3_die' })
	event.remove({ input: 'thermal:press_unpacking_die' })
	event.remove({ input: 'thermal:fluid_cell' })

	event.remove({ output: 'thermal:carrot_block' })
	event.remove({ output: 'thermal:potato_block' })
	event.remove({ output: 'thermal:beetroot_block' })
	event.remove({ output: 'thermal:corn_block' })
	event.remove({ output: 'thermal:onion_block' })
	event.remove({ output: 'thermal:eggplant_block' })
	event.remove({ output: 'thermal:tomato_block' })
})