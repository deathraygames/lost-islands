class Player extends Character {
	constructor(world, x, y) {
		super(world, x, y, "hero");
		let o = this;
		o.type = "PC";
		o.inventory = {"watch": true};
		o.alpha = 1;
		o.discovered = 1;
		o.name = "Stranger";
		o.label = "";
		o.walking = [o.guy, new GameImage("hero_walk_0"), o.guy, new GameImage("hero_walk_1")];
	}
}