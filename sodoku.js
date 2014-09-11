var b = _.range(1,10)
var default_board = [
    [_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b)],
    [_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b)],
    [_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b)],
    [_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b)],
    [_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b)],
    [_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b)],
    [_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b)],
    [_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b)],
    [_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b)]
];


var value_at = function(board, x, y) {
    return board[y][x];
}

var is_solved_square = function(board, x, y) {
    if (value_at(board, x, y).length == 1) {
	return true;
    } else {
	return false;
    }
}


var get_value = function(board, x, y) {
    var result;
    if (is_solved_square(board, x, y)) {
	result = value_at(board, x, y)[0]
    } else {
	result = -1;
    }

    return result;
}


console.log(default_board);
