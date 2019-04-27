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
