var Snake = function() {
	this.xDir = 0;
	this.yDir = -1;
	this.pieces = [[50, 50]];
}

Snake.prototype.move = function(apple) {
	var newPiece = [this.pieces[this.pieces.length - 1][0], this.pieces[this.pieces.length - 1][1]];
	newPiece[0] += this.xDir;
	newPiece[1] += this.yDir;
	this.pieces.push(newPiece);
	if(!this.eats(newPiece, apple)) {
		this.pieces.shift();	
	}
}

Snake.prototype.turn = function(dir) {
	if(dir === "up") {
		this.xDir = 0;
		this.yDir = -1;
	}
	if(dir === "down") {
		this.xDir = 0;
		this.yDir = 1;
	}
	if(dir === "left") {
		this.xDir = -1;
		this.yDir = 0;
	}
	if(dir === "right") {
		this.xDir = 1;
		this.yDir = 0;
	}
}

Snake.prototype.collides = function() {
	var piece = this.pieces[this.pieces.length - 1];
	if(piece[0] >= 100 || piece[0] < 0 || piece[1] >= 100 || piece[1] < 0) {
		return true;
	}
	for(var i = 0; i < this.pieces.length - 1; i++) {
		if(this.pieces[i][0] === piece[0] && this.pieces[i][1] === piece[1]) {
			return true;
		}
	}
	return false;
}

Snake.prototype.eats = function(pos, apple) {
	return pos[0] === apple[0] && pos[1] === apple[1];
}