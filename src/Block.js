class Block {
	constructor(game, tag) {
		this.tag = tag;
		this.game = game;
		this.destroyed = false;
	}


	getPositions = (box) => {
	  return [ [ box.x, box.x + box.width ], [ box.y, box.y + box.height ] ];
	}

	comparePositions = (p1, p2) => {
	  var x1 = p1[0] < p2[0] ? p1 : p2;
	  var x2 = p1[0] < p2[0] ? p2 : p1;
	  return x1[1] > x2[0] || x1[0] === x2[0] ? true : false;
	}

	colideWith = (ball)=>{
		const targetA = ball;
		const targetB = this;

		const match = !(targetB.x > (targetA.x + targetA.width) ||
           (targetB.x + targetB.width) < targetA.x ||
           targetB.y > (targetA.x + targetA.height) ||
           (targetB.y + targetB.height) < targetA.y);

		if(match){
			this.destroyed = true;
			this.tag.parentNode.removeChild(this.tag);
		}

		return match;
	}
	// tickScore = ()=>{
	// 	this.score++;
	// 	document.querySelector('.ScorePlayer'+this.n).innerHTML=this.score;
	// }
	//
	// update = ()=>{
	// }
	//
	// moveUp = ()=>{
	// 	this.lastMove = 1;
	// 	this.playerTag.style.top = this.playerTag.offsetTop-(this.game.scaleY*2)+'px';
	//
	// 	if(this.playerTag.offsetTop < 0){
	// 		this.playerTag.style.top = 0;
	// 	}
	// }
	// moveDown = ()=>{
	// 	this.lastMove = -1;
	// 	this.playerTag.style.top = this.playerTag.offsetTop+(this.game.scaleY*2)+'px';
	//
	// 	if(this.playerTag.offsetTop+this.playerTag.offsetHeight > this.game.height){
	// 		this.playerTag.style.top = this.game.height-this.playerTag.offsetHeight+'px';
	// 	}
	// }
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
		return this.tag.offsetLeft;
	}
	get y (){
		return this.tag.offsetTop;
	}
	get width (){
		return this.tag.offsetWidth;
	}
	get height (){
		return this.tag.offsetHeight;
	}
}

export {Block as default};
