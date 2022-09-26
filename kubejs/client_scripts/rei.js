// JEI Add
onEvent("rei.add.items", (event) => {
  event.add(Item.of("create:refined_radiance"))
})

// JEI Hide
onEvent("rei.hide.items", (event) => {
  // Not for use in production
  event.hide("farwateraddons:ithundxr_item")
  event.hide("invisibilitycloak:cloak_of_invisibility")

  // Abuseable
  event.hide("tconstruct:ender_slime_sling")
  event.hide("advancedperipherals:chunk_controller")
  event.hide("ae2:spatial_anchor")

  // Remove double Food Crates
  event.hide("thermal:carrot_block")
  event.hide("thermal:potato_block")
  event.hide("thermal:beetroot_block")
  event.hide("thermal:corn_block")
  event.hide("thermal:onion_block")
  event.hide("thermal:eggplant_block")
  event.hide("thermal:tomato_block")

  // Ah yes thermals lovely very annoying grenades and tnt
  function thermalexplosives(type) {
    event.hide("thermal:" + type + "_grenade")
    event.hide("thermal:" + type + "_tnt")
    event.hide("thermal:" + type + "_tnt_minecart")
  }

  thermalexplosives("explosive")
  thermalexplosives("fire")
  thermalexplosives("ice")
  thermalexplosives("lightning")
  thermalexplosives("earth")
  thermalexplosives("ender")
  thermalexplosives("glowstone")
  thermalexplosives("redstone")
  thermalexplosives("slime")
  thermalexplosives("phyto")
  thermalexplosives("nuke")

  // Explotable stuff from ae2
  event.hide("ae2:tiny_tnt")

  // Spams console on arc and doesnt function
  event.hide("create:tree_fertilizer")

  // Explotiable blocks from dbm
  event.hide("davebuildingmod:particle_generator")
  event.hide("davebuildingmod:particle_card_tnt")
  event.hide("davebuildingmod:particle_card_fire")
  event.hide("davebuildingmod:particle_card_campfire")
  event.hide("davebuildingmod:particle_card_smoke")
  event.hide("davebuildingmod:particle_card_steam")
  event.hide("davebuildingmod:particle_card_water")
  event.hide("davebuildingmod:hard_air")
  event.hide("davebuildingmod:soft_air")
})
