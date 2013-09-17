var Game = function() {
	this.snake = new Snake();
	this.apple = [50, 20]//makeApple();
}

Game.prototype.step = function() {
	this.snake.move(this.apple);
	if(this.snake.eats(this.snake.pieces[this.snake.pieces.length - 1], this.apple)) {
		this.apple = makeApple();
	}
	if(this.snake.collides()) {
		//game over; exit everything
	}
}

function makeApple() {
	var x = Math.floor(Math.random() * 100);
	var y = Math.floor(Math.random() * 100);
	return [x, y];
}