
//Fluids
onEvent('fluid.registry', event => {
	event.create('red_solution')
		.displayName('Red Solution')
		.bucketColor(0xFF0000)
		.thinTexture(0xFF0000)
	event.create('green_solution')
		.displayName('Green Solution')
		.bucketColor(0x00FF00)
		.thinTexture(0x00FF00)
	event.create('blue_solution')
		.displayName('Blue Solution')
		.bucketColor(0x0000FF)
		.thinTexture(0x0000FF)
})