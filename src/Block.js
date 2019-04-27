import Measurable from "./Measurable";

class Block extends Measurable {
	constructor(game, tag) {
		super(tag);

		this.game = game;
		this.destroyed = false;
	}

	colideWith(target){
		const match = super.colideWith(target);

		if(match){
			this.destroyed = true;
			this.tag.parentNode.removeChild(this.tag);
		}

		return match;
	}
}

export {Block as default};
