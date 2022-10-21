priority: 1

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

let donutCraft = (event, output, center, ring) => {
  event.shaped(output, ["SSS", "SCS", "SSS"], {
    C: center,
    S: ring,
  })
}

onEvent("recipes", (event) => {
  console.log("Registering Recipes")
  recipetweaks(event)
  diamondnerf(event)
  createmelting(event)
  woodcutting(event)
  createaddition(event)
  crushing(event)
  drawers(event)
  xptweaks(event)
  customcobblegen(event)
  knifemelting(event)
  neptunium(event)
  removeItems(event)
  console.log("Recipes Updated")
})

onEvent("recipes.compostables", (event) => {
  console.log("Registering Composting Recipes")
  event.add("farwateraddons:cotton_seeds", 0.25)
  event.add("farwateraddons:cotton", 0.25)
  console.log("Composting Recipes Updated")
})

function recipetweaks(event) {
  // Recipes
  event.replaceInput({}, "create:dough", "#forge:dough")
  event.replaceInput({}, "farmersdelight:wheat_dough", "#forge:dough")
  event.replaceInput({}, "croptopia:dough", "#forge:dough")

  event.recipes
    .createMixing(
      Fluid.of("create_confectionery:caramel", 125),
      "croptopia:caramel"
    )
    .heated()
  event.recipes.createCrushing(
    ["2x croptopia:caramel"],
    "create_confectionery:bar_of_caramel"
  )

  event.recipes.createFilling("create:electron_tube", [
    "create:polished_rose_quartz",
    Fluid.of("tconstruct:molten_iron", 10),
  ])

  event.shapeless("architects_palette:charcoal_block", [
    "9x minecraft:charcoal",
  ])
  event.shapeless("9x minecraft:charcoal", [
    "architects_palette:charcoal_block",
  ])

  event.shapeless("architects_palette:spool", ["9x minecraft:string"])

  event.shapeless("create:andesite_casing", [
    "#minecraft:logs",
    "create:andesite_alloy",
  ])
  event.shapeless("create:brass_casing", [
    "#minecraft:logs",
    "#forge:plates/brass",
  ])
  event.shapeless("create:copper_casing", [
    "#forge:stone",
    "#forge:plates/copper",
  ])
  event.shapeless("create:refined_radiance_casing", [
    "#forge:glass/colorless",
    "create:refined_radiance",
  ])

  event.shapeless("kubejs:refined_radiance_block", [
    "9x create:refined_radiance",
  ])
  event.shapeless("9x create:refined_radiance", [
    "kubejs:refined_radiance_block",
  ])

  event.recipes.createCrushing("kubejs:ash_block", "minecraft:blackstone")
  event.recipes.createSplashing(
    [Item.of("create:zinc_nugget").withChance(0.125)],
    "kubejs:ash_block"
  )

  //Renewable Zinc
  event.recipes.createMixing(
    ["create:asurine", Item.of("create:asurine").withChance(0.5)],
    ["minecraft:cobbled_deepslate", "create:asurine"]
  )

    //Renewable Iron/Redstone
  event.recipes.createMixing(
    ["create:crimsite", Item.of("create:crimsite").withChance(0.5)],
    ["minecraft:blackstone", "create:crimsite"]
  )

  //Renewable Copper
  event.recipes.createMixing(
    ["create:veridium", Item.of("create:veridium").withChance(0.5)],
    ["minecraft:mossy_cobblestone", "create:veridium"]
  )

  //Renewable Gold
  event.recipes.createMixing(
    ["create:ochrum", Item.of("create:ochrum").withChance(0.5)],
    ["minecraft:soul_sand", "create:ochrum"]
  )

  //Renewable Tin
  event.recipes.createMixing(
    ["thermal:tin_ingot", Item.of("thermal:tin_ingot").withChance(0.5)],
    ["create:ochrum", "thermal:tin_ingot"]
  )

  event.recipes.createCrushing("minecraft:blackstone", "minecraft:basalt")

  event.recipes
    .createMixing(
      [
        "2x minecraft:blackstone",
        Item.of("minecraft:blackstone").withChance(0.1),
      ],
      ["minecraft:cobblestone", "minecraft:blackstone"]
    )
    .heated()

  event.recipes.createMixing("2x minecraft:coarse_dirt", [
    "minecraft:gravel",
    "minecraft:dirt",
  ])
  event.recipes.createMixing(
    ["minecraft:dirt", Item.of("minecraft:flint").withChance(0.1)],
    "minecraft:coarse_dirt"
  )

  event.recipes.createCompacting("minecraft:cobbled_deepslate", [
    "9x minecraft:cobblestone",
    Fluid.of("minecraft:lava", 100),
  ])

  event.recipes.createCompacting("minecraft:netherrack", [
    "minecraft:flint",
    "2x kubejs:ash_block",
    Fluid.of("minecraft:lava", 100),
  ])

  event.custom({
    type: "farmersdelight:cooking",
    ingredients: [
      {
        item: "thermal:tomato_sauce",
      },
    ],
    result: {
      item: "farmersdelight:tomato_sauce",
      count: 3,
    },
    cookingtime: 200,
  })

  event.custom({
    type: "thermal:compression_fuel",
    ingredient: {
      fluid: "createaddition:seed_oil",
      amount: 1000,
    },
    energy: 10000,
  })

  event.shaped("create:sail_frame", ["SSS", "SAS", "SSS"], {
    S: "minecraft:stick",
    A: "create:andesite_alloy",
  })

  event.remove({ id: "create:crafting/kinetics/white_sail" })
  event.shaped("create:white_sail", ["SSS", "SAS", "SSS"], {
    S: "minecraft:stick",
    A: "#minecraft:occludes_vibration_signals",
  })

  event.recipes.createMechanicalCrafting(
    "storagedrawers:creative_storage_upgrade",
    ["DEEED", "EENEE", "ENSNE", "EENEE", "DEEED"],
    {
      E: "storagedrawers:emerald_storage_upgrade",
      N: "minecraft:netherite_block",
      D: "minecraft:diamond_block",
      S: "minecraft:nether_star",
    }
  )

  event.custom({
    type: "create:haunting",
    ingredients: [
      {
        item: "kubejs:ash_block",
      },
    ],
    results: [
      {
        item: "minecraft:netherrack",
      },
    ],
  })

  event.shapeless("davebuildingmod:track_end", "create:track")

  event.remove({ id: "create:compat/ae2/milling/sky_stone_block" })
  event.recipes
    .createMilling(
      ["ae2:sky_dust", "ae2:sky_stone_block"],
      "ae2:sky_stone_block"
    )
    .processingTime(1000)

  event.recipes
    .createCrushing(
      ["ae2:sky_dust", "ae2:sky_stone_block"],
      "ae2:sky_stone_block"
    )
    .processingTime(1000)

  event.custom({
    type: "thermal:insolator",
    ingredient: {
      item: "croptopia:coffee_beans"
    },
    result: [
      {
        item: "farmersrespite:coffee_beans",
        chance: 2.0
      }
    ]
  })

  event.remove({ id: "lazierae2:resonating_seed" })
  event.shapeless("2x lazierae2:resonating_seed", [
    "#forge:dusts/resonating",
    "#forge:sand",
  ])

  event.custom({
    type: "create:haunting",
    ingredients: [
      {
        tag: "minecraft:coals"
      }
    ],
    results: [
      {
        item: "minecraft:glow_ink_sac"
      }
    ]
  })

  event.custom({
    type: "thermal:lapidary_fuel",
    ingredient: {
      item: "minecraft:nether_star",
    },
    energy: 1000000,
  })

  event.custom({
    type: "thermal:insolator",
    ingredient: {
      item: "minecraft:honey_bottle"
    },
    result: [
      {
        item: "minecraft:honey_bottle",
        chance: 2.0
      }
    ]
  })

  event.custom({
    type: "thermal:insolator",
    ingredient: {
      item: "minecraft:honeycomb"
    },
    result: [
      {
        item: "minecraft:honeycomb",
        chance: 2.0
      }
    ]
  })

  event.recipes.createMixing(['2x thermal:lapis_dust', Item.of('thermal:lapis_dust').withChance(0.35)], ['minecraft:calcite', 'minecraft:lapis_lazuli'])
  event.smelting('minecraft:lapis_lazuli', 'thermal:lapis_dust')

  event.recipes.createMixing(['2x thermal:ruby', Item.of('thermal:ruby').withChance(0.35)], ['minecraft:calcite', 'minecraft:redstone'])

  event.recipes.createMixing(['2x thermal:sapphire', Item.of('thermal:sapphire').withChance(0.35)], ['minecraft:calcite', 'minecraft:blue_ice'])

  event.recipes.createMixing(['2x thermal:apatite', Item.of('thermal:apatite').withChance(0.35)], ['minecraft:calcite', 'minecraft:bone_meal'])

  event.recipes.createMixing(['2x thermal:niter', Item.of('thermal:niter').withChance(0.35)], ['minecraft:calcite', 'minecraft:sugar'])

  event.recipes.createMixing(['2x thermal:lead_ingot', Item.of('thermal:lead_ingot').withChance(0.35)], ['ae2:fluix_dust', 'thermal:lead_ingot'])

  event.recipes.createMixing(['2x thermal:silver_ingot', Item.of('thermal:silver_ingot').withChance(0.35)], ['ae2:certus_quartz_dust', 'thermal:silver_ingot'])

  event.custom({
    "type": "tconstruct:entity_melting",
    "entity": {
      "type": "farwateraddons:capybara"
    },
    "result": {
      "fluid": "materialis:utherium",
      "amount": 100
    },
    "damage": 2
  })
}

function diamondnerf(event) {
  function nerfDiamonds(item, amount, time) {
    event.remove({ id: "tconstruct:smeltery/melting/diamond/" + item })
    event.custom({
      type: "tconstruct:damagable_melting",
      ingredient: [
        {
          item: "minecraft:diamond_" + item,
        },
      ],
      result: {
        fluid: "tconstruct:molten_diamond",
        amount: amount,
        unit_size: 25,
      },
      temperature: 1450,
      time: time,
    })
  }

  function DoubleItemNerfDiamonds(item, item2, amount, time, recipeid) {
    event.remove({ id: "tconstruct:smeltery/melting/diamond/" + recipeid })
    event.custom({
      type: "tconstruct:damagable_melting",
      ingredient: [
        {
          item: "minecraft:diamond_" + item,
        },
        {
          item: "minecraft:diamond_" + item2,
        },
      ],
      result: {
        fluid: "tconstruct:molten_diamond",
        amount: amount,
        unit_size: 25,
      },
      temperature: 1450,
      time: time,
    })
  }

  nerfDiamonds("helmet", 50, 186)
  nerfDiamonds("chestplate", 80, 235)
  nerfDiamonds("leggings", 70, 220)
  nerfDiamonds("boots", 40, 166)

  nerfDiamonds("shovel", 10, 83)

  DoubleItemNerfDiamonds("axe", "pickaxe", 30, 144, "axes")
  DoubleItemNerfDiamonds("hoe", "sword", 20, 118, "weapon")
}

function createmelting(event) {
  // Create Melting Mixer recipes
  event.recipes
    .createMixing(
      Fluid.of("tconstruct:blazing_blood", 50),
      "minecraft:blaze_powder"
    )
    .heated()
  event.recipes
    .createMixing(Fluid.of("tconstruct:molten_amethyst_bronze", 90), [
      Fluid.of("tconstruct:molten_copper", 90),
      Fluid.of("tconstruct:molten_amethyst", 100),
    ])
    .heated()
  event.recipes
    .createMixing(Fluid.of("tconstruct:molten_bronze", 360), [
      Fluid.of("tconstruct:molten_copper", 90),
      Fluid.of("tconstruct:molten_tin", 90),
    ])
    .heated()
  event.recipes
    .createMixing(Fluid.of("tconstruct:molten_constantan", 180), [
      Fluid.of("tconstruct:molten_copper", 90),
      Fluid.of("tconstruct:molten_nickel", 90),
    ])
    .heated()
  event.recipes
    .createMixing(Fluid.of("tconstruct:molten_constantan", 180), [
      Fluid.of("tconstruct:molten_copper", 90),
      Fluid.of("tconstruct:molten_nickel", 90),
    ])
    .heated()
  event.recipes
    .createMixing(Fluid.of("tconstruct:molten_debris", 180), [
      "minecraft:ancient_debris",
      "4x create:powdered_obsidian",
    ])
    .superheated()
  event.recipes
    .createMixing(Fluid.of("tconstruct:molten_electrum", 180), [
      Fluid.of("tconstruct:molten_gold", 90),
      Fluid.of("tconstruct:molten_silver", 90),
    ])
    .heated()
  event.recipes
    .createMixing(Fluid.of("tconstruct:molten_enderium", 180), [
      { fluidTag: "forge:molten_lead", amount: 270 },
      "minecraft:diamond",
      { fluidTag: "forge:ender", amount: 500 },
    ])
    .superheated()
  event.recipes
    .createMixing(Fluid.of("materialis:molten_fairy", 90), [
      "minecraft:gold_ingot",
      Fluid.of("tconstruct:liquid_soul", 1000),
      { fluidTag: "forge:milk", amount: 100 },
    ])
    .heated()
  event.recipes
    .createMixing(Fluid.of("tconstruct:molten_invar", 270), [
      Fluid.of("tconstruct:molten_iron", 180),
      Fluid.of("tconstruct:molten_nickel", 90),
    ])
    .heated()
  event.recipes
    .createMixing(Fluid.of("tconstruct:molten_lumium", 360), [
      { fluidTag: "forge:molten_tin", amount: 270 },
      "#forge:ingots/silver",
      { fluidTag: "forge:glowstone", amount: 500 },
    ])
    .superheated()
  event.recipes
    .createMixing(Fluid.of("tconstruct:molten_netherite", 10), [
      Fluid.of("tconstruct:molten_debris", 40),
      Fluid.of("tconstruct:molten_gold", 20),
    ])
    .superheated()
  event.recipes
    .createMixing(Fluid.of("tconstruct:molten_obsidian", 100), [
      Fluid.of("minecraft:water", 50),
      Fluid.of("minecraft:lava", 100),
    ])
    .heated()
  event.recipes
    .createMixing(Fluid.of("tconstruct:molten_rose_gold", 180), [
      Fluid.of("tconstruct:molten_copper", 90),
      Fluid.of("tconstruct:molten_gold", 90),
    ])
    .heated()
  event.recipes
    .createMixing(Fluid.of("tconstruct:molten_signalum", 360), [
      { fluidTag: "forge:molten_copper", amount: 270 },
      "#forge:ingots/silver",
      { fluidTag: "forge:redstone", amount: 400 },
    ])
    .heated()
  event.recipes
    .createMixing(Fluid.of("tconstruct:molten_steel", 90), [
      Fluid.of("tconstruct:molten_iron", 180),
      "#minecraft:coals",
    ])
    .heated()

  //Refined Radiance
  event.recipes
    .createMixing("create:refined_radiance", [
      "8x minecraft:glowstone",
      "2x create:polished_rose_quartz",
      Fluid.of("tconstruct:molten_glass", 1000),
    ])
    .superheated()

  //Tin can melting
  event.custom({
    type: "tconstruct:melting",
    ingredient: [
      {
        item: "aquaculture:tin_can",
      },
    ],
    result: {
      fluid: "tconstruct:molten_tin",
      amount: 90,
    },
    temperature: 500,
    time: 240,
  })
}

function woodcutting(event) {
  function woodcuttingrecipe(woodtype) {
    event.stonecutting(
      "minecraft:" + woodtype + "_planks",
      "minecraft:" + woodtype + "_button"
    )
    event.stonecutting(
      "minecraft:" + woodtype + "_planks",
      "minecraft:" + woodtype + "_fence"
    )
    event.stonecutting(
      "minecraft:" + woodtype + "_planks",
      "minecraft:" + woodtype + "_fence_gate"
    )
    event.stonecutting(
      "minecraft:" + woodtype + "_planks",
      "minecraft:" + woodtype + "_pressure_plate"
    )
    event.stonecutting(
      "minecraft:" + woodtype + "_planks",
      "minecraft:" + woodtype + "_slab"
    )
    event.stonecutting(
      "minecraft:" + woodtype + "_planks",
      "minecraft:" + woodtype + "_stairs"
    )
    event.stonecutting(
      "minecraft:" + woodtype + "_planks",
      "minecraft:" + woodtype + "_trapdoor"
    )

    event.stonecutting(
      "minecraft:" + woodtype + "_button",
      "minecraft:" + woodtype + "_planks"
    )
    event.stonecutting(
      "minecraft:" + woodtype + "_fence",
      "minecraft:" + woodtype + "_planks"
    )
    event.stonecutting(
      "minecraft:" + woodtype + "_fence_gate",
      "minecraft:" + woodtype + "_planks"
    )
    event.stonecutting(
      "minecraft:" + woodtype + "_pressure_plate",
      "minecraft:" + woodtype + "_planks"
    )
    event.stonecutting(
      "minecraft:" + woodtype + "_slab",
      "minecraft:" + woodtype + "_planks"
    )
    event.stonecutting(
      "minecraft:" + woodtype + "_stairs",
      "minecraft:" + woodtype + "_planks"
    )
    event.stonecutting(
      "minecraft:" + woodtype + "_trapdoor",
      "minecraft:" + woodtype + "_planks"
    )
  }

  woodcuttingrecipe("acacia")
  woodcuttingrecipe("birch")
  woodcuttingrecipe("dark_oak")
  woodcuttingrecipe("jungle")
  woodcuttingrecipe("oak")
  woodcuttingrecipe("spruce")
  woodcuttingrecipe("crimson")
  woodcuttingrecipe("warped")
}

function createaddition(event) {
  function wirerecipe(material) {
    event.remove({ id: "createaddition:rolling/" + material + "_plate" })

    event.custom({
      type: "createaddition:rolling",
      input: {
        tag: "forge:rods/" + material,
      },
      result: {
        item: "createaddition:" + material + "_wire",
      },
    })
  }

  wirerecipe("copper")
  wirerecipe("gold")
  wirerecipe("iron")
}

function crushing(event) {
  function crush(input, output) {
    event.recipes.createCrushing(output, input)
  }
  crush("minecraft:diamond", "thermal:diamond_dust")
  crush("minecraft:emerald", "thermal:emerald_dust")
  crush("minecraft:quartz", "thermal:quartz_dust")
  crush("thermal:cinnabar", "thermal:cinnabar_dust")
  crush("thermal:apatite", "thermal:apatite_dust")
  crush("thermal:sulfur", "thermal:sulfur_dust")
  crush("thermal:niter", "thermal:niter_dust")

  function crushedToDust(metal, extra) {
    event.recipes.createCrushing(
      [
        "thermal:" + metal + "_dust",
        Item.of("thermal:" + metal + "_dust").withChance(0.5),
        Item.of("thermal:" + extra).withChance(0.25),
      ],
      "create:crushed_" + metal + "_ore"
    )
  }
  crushedToDust("iron", "nickel_dust")
  crushedToDust("copper", "gold_dust")
  crushedToDust("gold", "copper_dust")
  crushedToDust("tin", "apatite")
  crushedToDust("lead", "silver_dust")
  crushedToDust("silver", "lead_dust")
  crushedToDust("nickel", "copper_dust")
}

function drawers(event) {
  event.remove({ id: "storagedrawers:upgrade_template" })
  function drawerer(woodtype, logtype) {
    event.remove({ id: "storagedrawers:" + woodtype + "_trim" })
    event.remove({ id: "storagedrawers:" + woodtype + "_full_drawers_1" })
    event.remove({ id: "storagedrawers:" + woodtype + "_full_drawers_2" })
    event.remove({ id: "storagedrawers:" + woodtype + "_full_drawers_4" })
    event.remove({ id: "storagedrawers:" + woodtype + "_half_drawers_1" })
    event.remove({ id: "storagedrawers:" + woodtype + "_half_drawers_2" })
    event.remove({ id: "storagedrawers:" + woodtype + "_half_drawers_4" })

    event.shaped(
      "storagedrawers:" + woodtype + "_trim",
      ["PPP", "ZLZ", "PPP"],
      {
        Z: "create:zinc_ingot",
        P: "minecraft:" + woodtype + "_planks",
        L: "#minecraft:" + woodtype + "_" + logtype,
      }
    )
    event.stonecutting(
      "2x storagedrawers:" + woodtype + "_half_drawers_1",
      "storagedrawers:" + woodtype + "_trim"
    )
    event.stonecutting(
      "2x storagedrawers:" + woodtype + "_half_drawers_2",
      "storagedrawers:" + woodtype + "_trim"
    )
    event.stonecutting(
      "2x storagedrawers:" + woodtype + "_half_drawers_4",
      "storagedrawers:" + woodtype + "_trim"
    )
    event.stonecutting(
      "storagedrawers:" + woodtype + "_full_drawers_1",
      "storagedrawers:" + woodtype + "_trim"
    )
    event.stonecutting(
      "storagedrawers:" + woodtype + "_full_drawers_2",
      "storagedrawers:" + woodtype + "_trim"
    )
    event.stonecutting(
      "storagedrawers:" + woodtype + "_full_drawers_4",
      "storagedrawers:" + woodtype + "_trim"
    )
    event.stonecutting(
      "2x storagedrawers:upgrade_template",
      "storagedrawers:" + woodtype + "_trim"
    )
  }
  drawerer("oak", "logs")
  drawerer("spruce", "logs")
  drawerer("birch", "logs")
  drawerer("jungle", "logs")
  drawerer("acacia", "logs")
  drawerer("dark_oak", "logs")
  drawerer("crimson", "stems")
  drawerer("warped", "stems")

  event.remove({ id: "framedcompactdrawers:framed_trim" })
  event.remove({ id: "framedcompactdrawers:framed_full_one" })
  event.remove({ id: "framedcompactdrawers:framed_full_two" })
  event.remove({ id: "framedcompactdrawers:framed_full_four" })
  event.remove({ id: "framedcompactdrawers:framed_half_one" })
  event.remove({ id: "framedcompactdrawers:framed_half_two" })
  event.remove({ id: "framedcompactdrawers:framed_half_four" })

  event.shaped("framedcompactdrawers:framed_trim", ["PPP", "ZLZ", "PPP"], {
    Z: "create:zinc_ingot",
    P: "minecraft:stick",
    L: "#minecraft:logs",
  })
  event.stonecutting(
    "2x framedcompactdrawers:framed_half_one",
    "framedcompactdrawers:framed_trim"
  )
  event.stonecutting(
    "2x framedcompactdrawers:framed_half_two",
    "framedcompactdrawers:framed_trim"
  )
  event.stonecutting(
    "2x framedcompactdrawers:framed_half_four",
    "framedcompactdrawers:framed_trim"
  )
  event.stonecutting(
    "framedcompactdrawers:framed_full_one",
    "framedcompactdrawers:framed_trim"
  )
  event.stonecutting(
    "framedcompactdrawers:framed_full_two",
    "framedcompactdrawers:framed_trim"
  )
  event.stonecutting(
    "framedcompactdrawers:framed_full_four",
    "framedcompactdrawers:framed_trim"
  )
  event.stonecutting(
    "2x storagedrawers:upgrade_template",
    "framedcompactdrawers:framed_trim"
  )

  // Easier Void Upgrade
  event.remove({ id: "storagedrawers:void_upgrade" })
  donutCraft(
    event,
    "storagedrawers:void_upgrade",
    "storagedrawers:upgrade_template",
    "minecraft:stick"
  )

  function drawerupgrade(upgradetype, upgradeitem, upgradeitem2) {
    event.remove({ id: "storagedrawers:" + upgradetype + "_upgrade" })

    event.shaped(
      "storagedrawers:" + upgradetype + "_upgrade",
      ["SSS", "IBI", "SSS"],
      {
        B: upgradeitem2,
        I: upgradeitem,
        S: "minecraft:stick",
      }
    )
  }

  // Easier Upgrades
  drawerupgrade(
    "one_stack",
    "minecraft:flint",
    "storagedrawers:upgrade_template"
  )

  // Retextured upgrade recipes to match the rest of the modpack
  drawerupgrade(
    "obsidian_storage",
    "create:andesite_alloy",
    "storagedrawers:upgrade_template"
  )
  drawerupgrade(
    "iron_storage",
    "#forge:plates/copper",
    "storagedrawers:obsidian_storage_upgrade"
  )
  drawerupgrade(
    "gold_storage",
    "#forge:plates/brass",
    "storagedrawers:iron_storage_upgrade"
  )
  drawerupgrade(
    "diamond_storage",
    "create:polished_rose_quartz",
    "storagedrawers:gold_storage_upgrade"
  )
  drawerupgrade(
    "emerald_storage",
    "create:refined_radiance",
    "storagedrawers:diamond_storage_upgrade"
  )
}

function xptweaks(event) {
  // XP Fluids to Bottle o' Enchanting with appropiate Ratios
  event.recipes.createFilling("minecraft:experience_bottle", [
    "minecraft:glass_bottle",
    Fluid.of("experienceobelisk:raw_experience", 10),
  ])
  event.recipes.createFilling("minecraft:experience_bottle", [
    "minecraft:glass_bottle",
    Fluid.of("sophisticatedcore:xp_still", 150),
  ])
  event.recipes.createFilling("minecraft:experience_bottle", [
    "minecraft:glass_bottle",
    Fluid.of("cofh_core:experience", 250),
  ])

  // Emptying Recipe - Bottle o' Enchanting => CoFH xp fluid
  event.recipes.createEmptying(
    ["minecraft:glass_bottle", Fluid.of("cofh_core:experience", 250)],
    "minecraft:experience_bottle"
  )
}

function customcobblegen(event) {
  // Custom Cobblegen for thermal
  let bedrock_cobblegen = (adjacent, output) => {
    event.custom({
      type: "thermal:rock_gen",
      adjacent: adjacent,
      below: "minecraft:bedrock",
      result: { item: output },
    })
  }

  let cobblegen = (adjacent, output) => {
    event.custom({
      type: "thermal:rock_gen",
      adjacent: adjacent,
      result: { item: output },
    })
  }

  bedrock_cobblegen("minecraft:packed_ice", "minecraft:andesite")
  bedrock_cobblegen(
    "architects_palette:polished_packed_ice",
    "minecraft:granite"
  )
  bedrock_cobblegen(
    "architects_palette:chiseled_packed_ice",
    "minecraft:diorite"
  )

  cobblegen("create:honey", "create:limestone")
  cobblegen("farwateraddons:molten_sugar", "minecraft:calcite")
}

function knifemelting(event) {
  function meltknife(material, temp) {
    event.custom({
      type: "tconstruct:damagable_melting",
      ingredient: [
        {
          item: "farmersdelight:" + material + "_knife",
        },
      ],
      result: {
        fluid: "tconstruct:molten_" + material,
        amount: 100,
        unit_size: 25,
      },
      temperature: temp,
      time: 118,
    })
  }

  meltknife("iron", 800)
  meltknife("diamond", 1450)
  meltknife("netherite", 1250)

  //Golden Knife and Molten Gold have different IDs for some reason
  event.custom({
    type: "tconstruct:damagable_melting",
    ingredient: [
      {
        item: "farmersdelight:golden_knife",
      },
    ],
    result: {
      fluid: "tconstruct:molten_gold",
      amount: 100,
      unit_size: 25,
    },
    temperature: 700,
    time: 118,
  })
}

function neptunium(event) {
  // Milling 1-4 neptunium nuggets
  event.recipes.createMilling(
    [
      "aquaculture:neptunium_nugget",
      Item.of("aquaculture:neptunium_nugget").withChance(0.75),
      Item.of("aquaculture:neptunium_nugget").withChance(0.5),
      Item.of("aquaculture:neptunium_nugget").withChance(0.25),
    ],
    "aquaculture:neptunes_bounty"
  )

  // Crushing 5-9 neptunium nuggets
  event.recipes.createCrushing(
    [
      "5x aquaculture:neptunium_nugget",
      Item.of("aquaculture:neptunium_nugget").withChance(0.8),
      Item.of("aquaculture:neptunium_nugget").withChance(0.6),
      Item.of("aquaculture:neptunium_nugget").withChance(0.4),
      Item.of("aquaculture:neptunium_nugget").withChance(0.2),
    ],
    "aquaculture:neptunes_bounty"
  )
}

function removeItems(event) {
  // Abuseable
  event.remove({ output: "tconstruct:ender_slime_sling" })
  event.remove({ output: "advancedperipherals:chunk_controller" })
  event.remove({ output: "ae2:spatial_anchor" })
  event.remove({ output: "ae2:matter_cannon" })
  event.remove({ output: "ae2:tiny_tnt" })

  // Admin only
  event.remove({ output: "invisibilitycloak:cloak_of_invisibility" })

  // Remove double Food Crates
  event.remove({ output: "thermal:carrot_block" })
  event.remove({ output: "thermal:potato_block" })
  event.remove({ output: "thermal:beetroot_block" })
  event.remove({ output: "thermal:corn_block" })
  event.remove({ output: "thermal:onion_block" })
  event.remove({ output: "thermal:eggplant_block" })
  event.remove({ output: "thermal:tomato_block" })

  // Very badly coded and not worth it can bypass claims
  function thermalexplosives(type) {
    event.remove({ output: "thermal:" + type + "_grenade" })
    event.remove({ output: "thermal:" + type + "_tnt" })
    event.remove({ output: "thermal:" + type + "_tnt_minecart" })
  }

  thermalexplosives("fire")
  thermalexplosives("ice")
  thermalexplosives("lightning")
  thermalexplosives("earth")
  thermalexplosives("ender")
  thermalexplosives("glowstone")
  thermalexplosives("redstone")
  thermalexplosives("slime")
  thermalexplosives("phyto")

  event.remove({ output: "thermal:explosive_grenade" })

  // Spams console on arc and doesnt function
  event.remove({ output: "create:tree_fertilizer" })

  // Explotiable blocks from dbm
  event.remove({ output: "davebuildingmod:particle_generator" })
  event.remove({ output: "davebuildingmod:particle_card_tnt" })
  event.remove({ output: "davebuildingmod:particle_card_fire" })
  event.remove({ output: "davebuildingmod:particle_card_campfire" })
  event.remove({ output: "davebuildingmod:particle_card_smoke" })
  event.remove({ output: "davebuildingmod:particle_card_steam" })
  event.remove({ output: "davebuildingmod:particle_card_water" })
  event.remove({ output: "davebuildingmod:hard_air" })
  event.remove({ output: "davebuildingmod:soft_air" })
}
