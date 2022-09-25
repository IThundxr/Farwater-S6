priority: 0

onEvent("tags.items", (event) => {
  //adds the doughs to the doughs collection tag
  event.add("forge:doughs", "create:dough")
  event.add("forge:doughs", "farmersdelight:wheat_dough")
  event.add("forge:doughs", "croptopia:dough")

  //adds the lanterns to the lantern tag
  event.add("c:lanterns", "minecraft:lantern")
  event.add("c:lanterns", "minecraft:soul_lantern")
  event.add("c:lanterns", "architects_palette:nether_brass_lantern")

  //adds aquaculture fish to the {cooked/raw}_fishes tag
  event.add("forge:cooked_fishes", "aquaculture:fish_fillet_cooked")
  event.add("forge:raw_fishes", "aquaculture:fish_fillet_raw")

  //adds architects palettes withered bones to the wither bones tag
  event.add("forge:wither_bones", "architects_palette:withered_bone")

  //adds create:cogwheel to the gears tag
  event.add("forge:gears", "create:cogwheel")
})

onEvent("tags.blocks", (event) => {
  //adds ash blocks to the mineable tag
  event.add("minecraft:block", "kubejs:ash_block")
  event.add("minecraft:mineable/shovel", "kubejs:ash_block")
})

onEvent("tags.fluids", (event) => {
  //adds experience to the experience tag
  event.add("forge:experience", "experienceobelisk:raw_experience")

  //adds tconstruct molten metals to the lava tag to make them burn
  event.add("minecraft:lava", "tconstruct:blazing_blood")
  event.add("minecraft:lava", "tconstruct:flowing_blazing_blood")
  event.add("minecraft:lava", "tconstruct:molten_debris")
  event.add("minecraft:lava", "tconstruct:flowing_molten_debris")
})