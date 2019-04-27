import Collision from "./Collision";

class Player {
	constructor(game) {
		// this.n = n;
		this.playerTag = document.querySelector('.Player');
		this.game = game;
	}

	// tickScore = ()=>{
	// 	this.score++;
	// 	document.querySelector('.ScorePlayer'+this.n).innerHTML=this.score;
	// }
	//
	// update = ()=>{
	// }
	//
	moveLeft = ()=>{
		this.x -= 20;

		if(this.x < 0){
			this.x = 0;
		}
	}
	moveRight = ()=>{
		this.x += 20;

		if(this.x+this.width > this.game.width){
			this.x = this.game.width-this.width;
		}
	}

	colideWith = (ball)=>{

		const left = {x: this.x, y:this.y, width: this.width/2, height: this.height};
		const right = {x: this.x+this.width/2, y:this.y, width: this.width/2, height: this.height};


		const matchLeft = Collision.between(left, ball);
		const matchRight = Collision.between(right, ball);

		console.log(this.x, this.y, this.width, this.height);
		console.log(left, matchLeft);
		console.log(right, matchRight);

	   if(matchLeft)
			return -1;

	  if(matchRight)
		  return 1;

		return false;
	}
	//
	// get isGoingUp (){
	// 	return this.lastMove > 0;
	// }
	// get isGoingDown (){
	// 	return this.lastMove < 0;
	// }
	//
	// get colideWithY (){
	// 	if(this.game.ball == undefined){
	// 		return false;
	// 	}
	// 	const colideWithTop = this.y - this.game.ball.height <= this.game.ball.y * this.game.scaleY;
	// 	const colideWithBottom = this.y + this.height + this.game.ball.height >= this.game.ball.y * this.game.scaleY;
	// 	return colideWithTop && colideWithBottom;
	// }
	// get colideWithLeft (){
	// 	if(this.game.ball == undefined){
	// 		return false;
	// 	}
	// 	const colideWithLeft = this.game.ball.x * this.game.scaleX <= this.x + this.width;
	// 	return colideWithLeft;
	// }
	// get colideWithRight (){
	// 	if(this.game.ball == undefined){
	// 		return false;
	// 	}
	// 	const colideWithRight = (this.game.ball.x * this.game.scaleX) + this.game.ball.width >= this.x ;
	// 	return colideWithRight;
	// }

	get x (){
		return this.playerTag.offsetLeft;
	}
	set x (x){
		this.playerTag.style.left = x + 'px';
	}
	get y (){
		return this.playerTag.offsetTop;
	}
	get width (){
		return this.playerTag.offsetWidth;
	}
	get height (){
		return this.playerTag.offsetHeight;
	}
}

export {Player as default};
