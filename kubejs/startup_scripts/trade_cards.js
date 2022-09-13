
// Item
onEvent('item.registry', event => {
	function card(id, display){
		event.create(id+'_card')
			.displayName(display)
			.texture('kubejs:item/trading_cards/'+id)
	}
	
	// -- Export --
	card('hunter', '§cHunter Export Card')
	card('lumber', '§cLumber Export Card')
	card('farmer', '§cFarmer Export Card')
	card('miner', '§cMiner Export Card')
	card('fisher', '§cFisherman Export Card')
	
	// -- Import --
	
	// Drops
	card('wool', '§9Wool Import Card')
	card('leather', '§9Leather Import Card')
	card('rotten_flesh', '§9Rotten Flesh Import Card')
	card('sunken_flesh', '§9Sunken Flesh Import Card')
	card('bone', '§9Bone Import Card')
	card('gunpowder', '§9Gunpowder Import Card')
	card('string', '§9String Import Card')
	card('spider_eye', '§9Spider Eye Import Card')
	card('blaze_rod', '§9Blaze Rod Import Card')
	card('ender_pearl', '§9Ender Pearl Import Card')
	
	// Wood
	card('oak_log', '§9Oak Log Import Card')
	card('spruce_log', '§9Spruce Log Import Card')
	card('birch_log', '§9Birch Log Import Card')
	card('jungle_log', '§9Jungle Log Import Card')
	card('acacia_log', '§9Acacia Log Import Card')
	card('dark_oak_log', '§9Dark Oak Log Import Card')
	card('crimson_stem', '§9Crimson Stem Import Card')
	card('warped_stem', '§9Warped Stem Import Card')
	
	// Farm
	card('wheat', '§9Wheat Import Card')
	card('carrot', '§9Carrot Import Card')
	card('potato', '§9Potato Import Card')
	card('beetroot', '§9Beetroot Import Card')
	card('tomato', '§9Tomato Import Card')
	card('onion', '§9Onion Import Card')
	card('cabbage', '§9Cabbage Import Card')
	card('flax', '§9Flax Import Card')
	card('rice', '§9Rice Import Card')
	card('sweet_berries', '§9Sweet Berries Import Card')
	card('blueberries', '§9Blueberries Import Card')
	card('pumpkin', '§9Pumpkin Import Card')
	card('melon', '§9Melon Import Card')
	
	// Ingot
	card('copper_ingot', '§9Copper Ingot Import Card')
	card('tin_ingot', '§9Tin Ingot Import Card')
	card('iron_ingot', '§9Iron Ingot Import Card')
	card('zinc_ingot', '§9Zinc Ingot Import Card')
	card('gold_ingot', '§9Gold Ingot Import Card')
	card('lead_ingot', '§9Lead Ingot Import Card')
	card('silver_ingot', '§9Silver Ingot Import Card')
	card('cobalt_ingot', '§9Cobalt Ingot Import Card')
	card('redstone', '§9Redstone Import Card')
	card('nether_quartz', '§9Nether Quartz Import Card')
	card('andesite_alloy', '§9Andesite Alloy Import Card')
	card('brass_ingot', '§9Brass Ingot Import Card')
	card('bronze_ingot', '§9Bronze Ingot Import Card')
	card('steel_ingot', '§9Steel Ingot Import Card')
})