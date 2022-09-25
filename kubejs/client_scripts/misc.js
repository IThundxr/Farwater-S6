//Tooltip


onEvent('item.tooltip', tooltip => {
	function fishTier(tier,fish,water) {
		tooltip.add(fish, [water+' fish','§3Tier '+tier])
	}
	
	fishTier('I', 'aquaculture:smallmouth_bass', '§bFreshwater')
	fishTier('I', 'aquaculture:catfish', '§bFreshwater')
	fishTier('I', 'aquaculture:atlantic_cod', '§fArctic ocean')
	fishTier('I', 'aquaculture:rainbow_trout', '§fArctic ocean')
	fishTier('I', 'aquaculture:jellyfish', '§dSaltwater')
	fishTier('I', 'aquaculture:tuna', '§dSaltwater')
	fishTier('I', 'aquaculture:red_grouper', '§dSaltwater')
	fishTier('I', 'aquaculture:box_turtle', '§2Swamp')
	fishTier('I', 'minecraft:cod', '§6Saltwater')
	fishTier('I', 'minecraft:salmon', '§bFreshwater')
	fishTier('I', 'minecraft:tropical_fish', '§6Saltwater')
	
	fishTier('II', 'aquaculture:bluegill', '§bFreshwater')
	fishTier('II', 'aquaculture:brown_trout', '§bFreshwater')
	fishTier('II', 'aquaculture:carp', '§bFreshwater')
	fishTier('II', 'aquaculture:minnow', '§bFreshwater')
	fishTier('II', 'aquaculture:perch', '§bFreshwater')
	fishTier('II', 'aquaculture:bayad', '§eArid water')
	fishTier('II', 'aquaculture:boulti', '§eArid water')
	fishTier('II', 'aquaculture:blackfish', '§fArctic ocean')
	fishTier('II', 'aquaculture:pacific_halibut', '§fArctic ocean')
	fishTier('II', 'aquaculture:atlantic_halibut', '§fArctic ocean')
	fishTier('II', 'aquaculture:atlantic_herring', '§fArctic ocean')
	fishTier('II', 'aquaculture:piranha', '§aJungle')
	fishTier('II', 'aquaculture:tambaqui', '§aJungle')
	fishTier('II', 'aquaculture:frog', '§2Swamp')
	fishTier('II', 'aquaculture:leech', '§2Swamp')
	fishTier('II', 'minecraft:pufferfish', '§6Saltwater')
	
	fishTier('III', 'aquaculture:muskellunge', '§bFreshwater')
	fishTier('III', 'aquaculture:gar', '§bFreshwater')
	fishTier('III', 'aquaculture:capitaine', '§eArid water')
	fishTier('III', 'aquaculture:synodontis', '§eArid water')
	fishTier('III', 'aquaculture:pink_salmon', '§fArctic ocean')
	fishTier('III', 'aquaculture:pollock', '§fArctic ocean')
	fishTier('III', 'aquaculture:arapaima', '§aJungle')
	fishTier('III', 'aquaculture:arrau_turtle', '§aJungle')
	fishTier('III', 'aquaculture:brown_shrooma', '§cMushroom')
	fishTier('III', 'aquaculture:red_shrooma', '§cMushroom')
})