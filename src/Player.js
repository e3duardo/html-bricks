import Measurable from "./Measurable";

class Player extends Measurable  {
	constructor(game) {
		super(document.querySelector('.Player'));
		this.game = game;
	}

	moveLeft(){
		this.x -= 20;

		if(this.x < 0){
			this.x = 0;
		}
	}
	moveRight(){
		this.x += 20;

		if(this.x+this.width > this.game.width){
			this.x = this.game.width-this.width;
		}
	}
	colideWith(target){
		console.log('>',target,target.colideWith(this));
		super.colideWith(target);
	}

	// colideWith = (ball)=>{
	//
	// 	// const left = {x: this.x, y:this.y, width: this.width/2, height: this.height};
	// 	// const right = {x: this.x+this.width/2, y:this.y, width: this.width/2, height: this.height};
	//   //
	//   //
	// 	// const matchLeft = Collision.between(ball, left);
	// 	// const matchRight = Collision.between(ball, right);
	//   //
	//   //  if(matchLeft)
	// 	// 	return -1;
	//   //
	//   // if(matchRight)
	// 	//   return 1;
	//
	// 	return Collision.between(ball, this);
	// }
}

export {Player as default};
