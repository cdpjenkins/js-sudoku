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
	result = value_at(board, x, y)[0];
    } else {
	result = -1;
    }

    return result;
}

var get_board_reprentation = function(board) {
    var result = [];

    for (y = 0; y < 9; y++) {
	var result_row = [];

	for (x = 0; x < 9; x++) {
	    var value = get_value(board, x, y);

	    result_row.push(value);
	}

	result.push(result_row);
    }

    return result;
}


//console.log(default_board);
