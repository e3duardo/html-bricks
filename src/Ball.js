import Measurable from "./Measurable";

class Ball extends Measurable {
	constructor(game) {
		super(document.querySelector('.Ball'));

		this.game = game;
		this.reset();
		this.scale = 5;
	}

	reset = ()=>{
		this.x = this.game.width/2 - this.width/2;
		this.y = this.game.height - 120;
	}

	update = ()=>{
	}

	startRandom = ()=>{
		const x = Math.floor(Math.random() * 2)-1;
		const y = Math.floor(Math.random() * 2)-1;

		this.start(x>0?this.scale:-this.scale, y>0?this.scale:-this.scale);
	}

	start = (x, y)=>{
		this.x += x;
		this.y += y;

		const colideSceneTop = this.y <= 0;
		const colideSceneBottom = this.y >= this.game.height-this.height;
		const colideSceneLeft = this.x <= 0;
		const colideSceneRight = this.x >= this.game.width-this.width;

		const colideWithBlocks = this.game.colideWithBlocks();
		const colideWithPlayer = this.game.player.colideWith(this);

		if(colideWithBlocks){
			y = -y;
			x = -x;
		}
		
		if(colideWithPlayer < 0){
			console.log('<0');
			x = Math.abs(x)*-1;
			y = -y;
		}
		if(colideWithPlayer > 0){
			console.log('>0');
			x = Math.abs(x);
			y = -y;
		}

		if(colideSceneTop){
			y = -y;
		}
		if(colideSceneLeft || colideSceneRight){
			x = -x;
		}
		if(colideSceneBottom){
			console.error("DEAD!!!");
			this.reset();
			this.startRandom();
			return;
		}

		setTimeout(()=>{
			this.start(x, y)
		},1000/20)
	}
}

export {Ball as default};
