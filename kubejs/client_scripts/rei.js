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
    event.hide('farwateraddons:ithundxr_item')

    // Abuseable
    event.hide('tconstruct:efln_ball')
    event.hide('ender_slime_sling')

    // To make trade station work
    event.hide('thermal:earth_charge')
    event.hide('thermal:press_coin_die')
    event.hide('thermal:press_gear_die')
    event.hide('thermal:press_packing_2x2_die')
    event.hide('thermal:press_packing_3x3_die')
    event.hide('thermal:press_unpacking_die')

    // Remove double Food Crates
    event.hide('thermal:carrot_block')
    event.hide('thermal:potato_block')
    event.hide('thermal:beetroot_block')
    event.hide('thermal:corn_block')
    event.hide('thermal:onion_block')
    event.hide('thermal:eggplant_block')
    event.hide('thermal:tomato_block')

    // Ah yes thermals lovely very annoying grenades and tnt
    event.hide('thermal:slime_grenade')
    event.hide('thermal:redstone_grenade')
    event.hide('thermal:glowstone_grenade')
    event.hide('thermal:ender_grenade')
    event.hide('thermal:earth_grenade')
    event.hide('thermal:lightning_grenade')
    event.hide('thermal:ice_grenade')
    event.hide('thermal:fire_grenade')
    event.hide('thermal:explosive_grenade')

    event.hide('thermal:fire_tnt')
    event.hide('thermal:ice_tnt')
    event.hide('thermal:lightning_tnt')
    event.hide('thermal:earth_tnt')
    event.hide('thermal:ender_tnt')
    event.hide('thermal:glowstone_tnt')
    event.hide('thermal:redstone_tnt')
    event.hide('thermal:slime_tnt')

    event.hide('thermal:slime_tnt_minecart')
    event.hide('thermal:redstone_tnt_minecart')
    event.hide('thermal:glowstone_tnt_minecart')
    event.hide('thermal:ender_tnt_minecart')
    event.hide('thermal:earth_tnt_minecart')
    event.hide('thermal:lightning_tnt_minecart')
    event.hide('thermal:ice_tnt_minecart')
    event.hide('thermal:fire_tnt_minecart')

    // Explotable stuff from ae2
    event.hide('ae2:tiny_tnt')
    event.hide('ae2:debug_eraser')
    event.hide('ae2:debug_meteorite_placer')

    // Spams console on arc and doesnt function
    event.hide('create:tree_fertilizer')

    // Explotiable blocks from dbm
    event.hide('davebuildingmod:particle_generator')
    event.hide('davebuildingmod:particle_card_tnt')
    event.hide('davebuildingmod:particle_card_fire')
    event.hide('davebuildingmod:particle_card_campfire')
    event.hide('davebuildingmod:particle_card_smoke')
    event.hide('davebuildingmod:particle_card_steam')
    event.hide('davebuildingmod:particle_card_water')
    event.hide('davebuildingmod:hard_air')
    event.hide('davebuildingmod:soft_air')
})
