priority: 0

onEvent('tags.items', event => {
    //adds the create dough to the doughs collection tag
    event.add('forge:doughs', 'create:dough')
    //adds the create dough to the doughs collection tag
    event.add('forge:doughs', 'farmersdelight:wheat_dough')
  //adds the create dough to the doughs collection tag
    event.add('forge:doughs', 'croptopia:dough')
  })