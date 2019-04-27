class Ball {
	constructor(game) {
		this.ballTag = document.querySelector('.Ball');
		this.game = game;
		this.reset();
	}

	reset = ()=>{
		this.x = this.game.width/2 - this.width/2;
		this.y = this.game.height - 80;
	}

	update = ()=>{
	}
	//
	startRandom = ()=>{
		const x = Math.floor(Math.random() * 2)-1;
		const y = Math.floor(Math.random() * 2)-1;

		this.start(x>0?10:-10, y>0?10:-10);
	}

	start = (x, y)=>{
		this.x += x;
		this.y += y;

		const colideSceneTop = this.y <= 0;
		const colideSceneBottom = this.y >= this.game.height-this.height;
		const colideSceneLeft = this.x <= 0;
		const colideSceneRight = this.x >= this.game.width-this.width;

		if(this.game.colideWithBlocks(this)){
			y = -y;
			x = -x;
		}

		if(colideSceneTop){
			y = -y;
		}
		if(colideSceneLeft || colideSceneRight){
			x = -x;
		}
		if(colideSceneBottom){
			this.reset();
			this.startRandom();
			return;
		}

		//
		// if(colideSceneLeft){
		// 	this.game.player2.tickScore();
		// }
		// if(colideSceneRight){
		// 	this.game.player1.tickScore();
		// }
		// if(colideSceneLeft || colideSceneRight){
		// 	this.reset();
		// 	this.startRandom();
		// 	return;
		// }
		//
		setTimeout(()=>{
			this.start(x, y)
		},1000/5)
	}



	get x (){
		return this.ballTag.offsetLeft;
	}
	set x (x){
		this.ballTag.style.left = x + 'px';
	}
	get y (){
		return this.ballTag.offsetTop;
	}
	set y (y){
		this.ballTag.style.top = y + 'px';
	}

	get width (){
		return this.ballTag.offsetWidth;
	}
	get height (){
		return this.ballTag.offsetHeight;
	}
}

export {Ball as default};
