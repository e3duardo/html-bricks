import Ball from './Ball';
import Player from './Player';
import Block from './Block';

class Game {
	constructor(){
		this.stageTag = document.querySelector('.Stage');
		this.sceneTag = document.querySelector('.Scene');

		this.blocks = [];
		this.ball = new Ball(this);
		this.player = new Player(this);

		document.querySelectorAll('.Block').forEach((block) => {
			this.blocks.push(new Block(this, block));
		});

		document.addEventListener("keydown", e => this.movePlayer(e));

		this.ball.startRandom();

		this.playingInterval = setInterval(this.update, 1000/60);
	}

	play = ()=>{
		console.log('play');
		// this.ball.update();
	}
	update = ()=>{
		this.ball.update();
	}

	movePlayer = (e)=>{
		switch (e.key) {
			case "ArrowUp":
				console.clear();
			break;
			case "ArrowDown":
				console.clear();
			break;
			case "ArrowLeft":
				this.player.moveLeft();
			break;
			case "ArrowRight":
				this.player.moveRight();
			break;
		}
	}

	colideWithBlocks(){
		for(const block of this.blocks){
			if(!block.destroyed){
				const collided = block.colideWith(this.ball);
				if(collided){
					return true;
				}
			}
		};
		return false;
	}

	get width (){
		return this.sceneTag.offsetWidth;
	}
	get height (){
		return this.sceneTag.offsetHeight;
	}
	get scaleX (){
		return document.querySelector('.Ball').offsetWidth;
	}
	get scaleY (){
		return document.querySelector('.Ball').offsetHeight;
	}
}

export { Game as default };
