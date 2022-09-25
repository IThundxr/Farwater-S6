priority: 0

onEvent('tags.items', event => {
    //adds the doughs to the doughs collection tag
    event.add('forge:doughs', 'create:dough')
    event.add('forge:doughs', 'farmersdelight:wheat_dough')
    event.add('forge:doughs', 'croptopia:dough')
    
    //adds the lanterns to the lantern tag
    event.add('c:lanterns', 'minecraft:lantern')
    event.add('c:lanterns', 'minecraft:soul_lantern')
    event.add('c:lanterns', 'architects_palette:nether_brass_lantern')

    //adds experience to the experience tag
    event.add('forge:experience', 'experienceobelisk:raw_experience')
  })