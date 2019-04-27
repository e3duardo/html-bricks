class Measurable {
	constructor(tag){
		this.tag = tag;
	}

	colideWith(target){
		// if(target instanceof Measurable){
			const match = !(target.x > (this.x + this.width) ||
	           (target.x + target.width) < this.x ||
	           target.y > (this.x + this.height) ||
	           (target.y + target.height) < this.y);

			return match;
		// }
		// return false;
	}

	get width (){
		return this.tag.offsetWidth;
	}
	get height (){
		return this.tag.offsetHeight;
	}

	get x (){
		return this.tag.offsetLeft;
	}
	set x (x){
		this.tag.style.left = x + 'px';
	}

	get y (){
		return this.tag.offsetTop;
	}
	set y (y){
		this.tag.style.top = y + 'px';
	}
}

export { Measurable as default };
