var game = new Game();

function run_loop() {
	render();
	game.step();
	render();
	if(game.snake.collides()) {
		$('body').empty();
		$('body').append("<span style='font-size: 10em;'>GAME OVER!</span>");
		return clearInterval(interval);
	}
}

function render() {
	for(var i = 0, l = game.snake.pieces.length; i < l; i ++) {
		var snakePiece = game.snake.pieces[i][1]+'_'+game.snake.pieces[i][0];
		$('#cell_' + snakePiece).toggleClass('showSnake');
	}
	$('#cell_' + game.apple[1] + '_' + game.apple[0]).toggleClass('apple');
}

function initialRender() {
	$('body').empty();
	for(var i = 0; i < 100; i++) {
		$('body').append('<div id=row' + i + '>');
		for(var j = 0; j < 100; j++) {
			$('#row' + i).append('<div id=cell_' + i + '_' + j + ' class=square></div>')
		}
		$('body').append('</div>');
	}
	for(var i = 0, l = game.snake.pieces.length; i < l; i ++) {
		var snakePiece = game.snake.pieces[i][1]+'_'+game.snake.pieces[i][0];
		$('#cell_' + snakePiece).toggleClass('showSnake');
	}
	$('#cell_' + game.apple[1] + '_' + game.apple[0]).toggleClass('apple');
}

$(function() {
	initialRender();
	interval = setInterval(run_loop, 50);
});

$(document).keydown(function(event) {
	if(event.which == 38) {
		game.snake.turn("up");
	}
	if(event.which == 40) {
		game.snake.turn("down");
	}
	if(event.which == 39) {
		game.snake.turn("right");
	}
	if(event.which == 37) {
		game.snake.turn("left");
	}
});
