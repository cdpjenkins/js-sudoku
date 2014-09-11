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
	result = 0;
    }

    return result;
}

var get_board_representation = function(board) {
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

var set_value = function(board, x, y, number) {
    // first of all, set it
    board[y][x] = [number];

    // then recursively eliminate that number from other squares
    // er... TODO
    

    console.log("waaaaa");
    console.log(board);

    return board;
}

var eliminate_possibility = function(board, x, y, number) {
    var old = board[y][x];

    var ne = _.without(old, number);

    board[y][x] = ne;

    return board;
}

var log_board = function(board) {
    for (y = 0; y < 9; y++) {
	row = board[y]
	result_row = ""

	for (x = 0; x < 9; x++) {
	    var value = get_value(board, x, y);

	    if (value == 0) {
		result_row += "."
	    } else {
		result_row += value
	    }
	}
	console.log(result_row)

    }
}




//console.log(default_board);
